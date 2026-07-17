import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

// Allowed hostnames for the Turnstile token (blocks tokens minted on other domains)
const ALLOWED_HOSTNAMES = ["solvolab.com", "www.solvolab.com", "localhost"];

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(request: Request): string {
  const headers = request.headers;
  return (
    headers.get("cf-connecting-ip") ||
    headers.get("x-real-ip") ||
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

// In-memory fallback counters (per server instance). Used when KV is
// unavailable so rate limiting never silently disappears.
const memoryCounters = new Map<string, { count: number; resetAt: number }>();

function memoryCount(key: string, ttlSeconds: number): number {
  const now = Date.now();
  // Opportunistic cleanup so the map doesn't grow unbounded
  if (memoryCounters.size > 10000) {
    for (const [k, v] of memoryCounters) {
      if (v.resetAt < now) memoryCounters.delete(k);
    }
  }
  const entry = memoryCounters.get(key);
  if (!entry || entry.resetAt < now) {
    memoryCounters.set(key, { count: 1, resetAt: now + ttlSeconds * 1000 });
    return 1;
  }
  entry.count += 1;
  return entry.count;
}

// Increment a counter with a TTL, return the new count. Tries Upstash KV
// (shared across instances); falls back to the in-memory counter if KV is
// missing or unreachable.
async function rateLimitCount(key: string, ttlSeconds: number): Promise<number> {
  if (KV_URL && KV_TOKEN) {
    try {
      const res = await fetch(`${KV_URL}/pipeline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${KV_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ["INCR", key],
          ["EXPIRE", key, String(ttlSeconds), "NX"],
        ]),
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        const count = Number(data?.[0]?.result);
        if (count > 0) return count;
      }
      console.warn(`[contact] KV rate-limit call failed (status ${res.status}), using in-memory fallback`);
    } catch (err) {
      console.warn("[contact] KV unreachable, using in-memory rate-limit fallback:", (err as Error)?.message);
    }
  }
  return memoryCount(key, ttlSeconds);
}

async function verifyTurnstile(token: string, ip: string) {
  // Env var names kept from the reCAPTCHA setup; values are Turnstile keys.
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error("Turnstile secret key is not configured.");
  }

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret,
      response: token,
      remoteip: ip === "unknown" ? undefined : ip,
    }),
  });
  return res.json();
}

// Silent rejection: looks like success to the caller so bots can't learn
// which defense caught them, but nothing is sent.
function fakeSuccess() {
  return NextResponse.json({ success: true });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, turnstileToken, honeypot, elapsedMs } = body;

    if (!name || !email || !message || !turnstileToken) {
      return NextResponse.json(
        { error: "Name, email, message, and verification token are required." },
        { status: 400 }
      );
    }

    // Basic input sanity
    if (
      typeof name !== "string" || name.length > 200 ||
      typeof email !== "string" || email.length > 254 ||
      typeof message !== "string" || message.length > 5000
    ) {
      return NextResponse.json({ error: "Invalid input." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const ip = getClientIp(request);

    // --- Layer 1: honeypot (hidden field real users never fill) ---
    if (honeypot) {
      console.warn(`[contact] Honeypot triggered from ${ip}`);
      return fakeSuccess();
    }

    // --- Layer 2: minimum fill time (bots submit instantly) ---
    if (typeof elapsedMs !== "number" || elapsedMs < 4000) {
      console.warn(`[contact] Fill-time check failed (${elapsedMs}ms) from ${ip}`);
      return fakeSuccess();
    }

    // --- Layer 3: content heuristics ---
    const linkCount = (message.match(/https?:\/\//gi) || []).length;
    if (linkCount > 2) {
      console.warn(`[contact] Too many links (${linkCount}) from ${ip}`);
      return fakeSuccess();
    }

    // --- Layer 4: rate limiting (per IP and per email) ---
    const [ipHourCount, emailDayCount] = await Promise.all([
      rateLimitCount(`contact:ip:${ip}`, 3600), // per hour
      rateLimitCount(`contact:email:${email.toLowerCase()}`, 86400), // per day
    ]);
    if (ipHourCount > 3 || emailDayCount > 2) {
      console.warn(`[contact] Rate limited ip=${ip} (${ipHourCount}/h) email=${email} (${emailDayCount}/d)`);
      return NextResponse.json(
        { error: "Too many submissions. Please try again later or email us directly." },
        { status: 429 }
      );
    }

    // --- Layer 5: Turnstile verification (tokens are single-use) ---
    const outcome = await verifyTurnstile(turnstileToken, ip);
    console.log("Turnstile verification result:", JSON.stringify(outcome));

    if (!outcome.success) {
      return NextResponse.json(
        { error: `Verification failed: ${outcome["error-codes"]?.join(", ") || "unknown error"}. Please refresh and try again.` },
        { status: 400 }
      );
    }
    if (outcome.action && outcome.action !== "CONTACT_SUBMIT") {
      console.warn(`[contact] Unexpected Turnstile action "${outcome.action}" from ${ip}`);
      return fakeSuccess();
    }
    if (outcome.hostname && !ALLOWED_HOSTNAMES.includes(outcome.hostname)) {
      console.warn(`[contact] Unexpected Turnstile hostname "${outcome.hostname}" from ${ip}`);
      return fakeSuccess();
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    // 1. Send notification email to SolvoLab
    await resend.emails.send({
      from: "SolvoLab Contact Form <noreply@contact.solvolab.com>",
      to: "saboor@solvolab.com",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    // 2. Send confirmation email to the user
    await resend.emails.send({
      from: "SolvoLab <noreply@contact.solvolab.com>",
      to: email,
      subject: "We've got your message — SolvoLab",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SolvoLab</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #eaf2ee;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <tr>
            <td align="center" style="padding: 34px 20px 30px; text-align: center; background-color: #06322b; background: linear-gradient(135deg, #06322b 0%, #0a463b 55%, #0e8c73 100%);">
                <!-- logo in a clean white rounded badge -->
                <div style="display: inline-block; background: #ffffff; border-radius: 20px; padding: 14px 18px; box-shadow: 0 6px 18px rgba(6,50,43,0.28);">
                    <img src="https://www.solvolab.com/brandlogo/SolvoLabLogo-Cut.png" alt="SolvoLab Logo" style="display:block; width:78px; height:78px; margin:0 auto;" />
                </div>
                <h3 style="color:#ffffff; margin: 16px 0 0; font-size: 20px; letter-spacing: 0.2px;">SolvoLab</h3>
            </td>
        </tr>

        <!-- Main Content -->
        <tr>
            <td style="padding: 30px 24px; color: #45605a; font-size: 15px; line-height: 1.6;">
                <p style="margin: 0 0 16px;">Hey ${safeName}!</p>
                <p>Thanks for reaching out to us! We've received your message and wanted to let you know that our team is already on it.</p>
                <p>We'll get back to you shortly with a thoughtful response. In the meantime, here's a quick look at what we can do for you, from intelligent automation to AI-driven workflows, we help businesses like yours eliminate manual bottlenecks and scale faster.</p>
                <p>Ready to dive deeper? Book a quick 15-minute discovery call and let's explore how SolvoLab can transform your operations.</p>
                <p>Cheers to smoother operations,</p>
                <p>The SolvoLab Team</p>

                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://calendly.com/saboor-forgerlab/30min" style="display: inline-block; padding: 12px 25px; background-color: #0e8c73; background: linear-gradient(135deg, #0b6f5c, #0e8c73); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold;">Schedule a Call</a>
                </div>
            </td>
        </tr>

        <!-- Footer -->
        <tr>
            <td style="padding: 20px; text-align: center; background-color: #eaf2ee; color: #7a938c; font-size: 14px;">
                <p style="margin: 0 0 10px;">&copy; ${new Date().getFullYear()} SolvoLab. All rights reserved.</p>
                <p style="margin: 0;">
                    <a href="https://solvolab.com" style="color: #0b6f5c; text-decoration: none;">Visit our website</a>
                </p>
            </td>
        </tr>
    </table>
</body>
</html>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
