import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json(
        { error: "Name, email, message, and reCAPTCHA token are required." },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA Enterprise token (Requires Google Cloud API Key)
    // To generate the API Key, go to Google Cloud Platform -> APIs & Services -> Credentials -> Create API Key.
    const apiKey = process.env.GCP_API_KEY || process.env.RECAPTCHA_SECRET_KEY; // The API Key (Starts with AIza...)
    const projectId = process.env.GCP_PROJECT_ID || "cs-poc-5g1m4mkqvtquseo0zgmtytj"; // Using the Project ID you provided
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    
    const verifyUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`;

    const assessmentRequest = {
      event: {
        token: recaptchaToken,
        expectedAction: "CONTACT_SUBMIT",
        siteKey: siteKey,
      }
    };

    const recaptchaRes = await fetch(verifyUrl, { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(assessmentRequest)
    });
    const recaptchaData = await recaptchaRes.json();
    console.log("Enterprise Assessment result: ", JSON.stringify(recaptchaData, null, 2));

    if (!recaptchaData.tokenProperties?.valid) {
      return NextResponse.json(
        { error: `Enterprise Validation failed: ${recaptchaData.tokenProperties?.invalidReason || 'Unknown error'}` },
        { status: 400 }
      );
    }

    // Optional: block low-risk scores. Scale is 0.0 (likely bot) to 1.0 (likely valid)
    if (recaptchaData.riskAnalysis && recaptchaData.riskAnalysis.score < 0.5) {
      return NextResponse.json(
        { error: "Submission rejected by spam detection filter." },
        { status: 400 }
      );
    }

    // 1. Send notification email to SolvoLab
    await resend.emails.send({
      from: "SolvoLab Contact Form <noreply@contact.solvolab.com>",
      to: "saboor@solvolab.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2. Send confirmation email to the user
    await resend.emails.send({
      from: "SolvoLab <noreply@contact.solvolab.com>",
      to: email,
      subject: "We've received your message — SolvoLab",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SolvoLab</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <tr>
            <td align="center" style="padding: 20px 0; text-align: center; background: #735AB7; background: linear-gradient(90deg, #735AB7 0%, #EAEFEF 100%);">
                <img src="https://www.solvolab.com/brandlogo/SolvoLabLogo-Cut.png" alt="SolvoLab Logo" style="display:block; max-width:100px; height:100px; margin:0 auto;" />
                <h3 style="color:white; margin: 8px 0 0;">SolvoLab</h3>
            </td>
        </tr>

        <!-- Main Content -->
        <tr>
            <td style="padding: 30px 20px; color: #333333;">
                <p>Hey ${name}!</p>
                <p>Thanks for reaching out to us! We've received your message and wanted to let you know that our team is already on it.</p>
                <p>We'll get back to you within 24 hours with a thoughtful response. In the meantime, here's a quick look at what we can do for you — from intelligent automation to AI-driven workflows, we help businesses like yours eliminate manual bottlenecks and scale faster.</p>
                <p>Ready to dive deeper? Book a quick 15-minute discovery call and let's explore how SolvoLab can transform your operations.</p>
                <p>Cheers to smoother operations,</p>
                <p>The SolvoLab Team</p>

                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://calendly.com/saboor-forgerlab/30min" style="display: inline-block; padding: 12px 25px; background-color: #735AB7; color: #ffffff; text-decoration: none; border-radius: 4px; font-weight: bold;">Schedule a Call</a>
                </div>
            </td>
        </tr>

        <!-- Footer -->
        <tr>
            <td style="padding: 20px; text-align: center; background-color: #f8f9fa; color: #6c757d; font-size: 14px;">
                <p style="margin: 0 0 10px;">&copy; ${new Date().getFullYear()} SolvoLab. All rights reserved.</p>
                <p style="margin: 0;">
                    <a href="https://solvolab.com" style="color: #735AB7; text-decoration: none;">Visit our website</a>
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
