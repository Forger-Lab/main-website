import { NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// 1. Initialize Rate Limiter (10 requests per 24 hours per IP)
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '24 h'),
});

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<{ success: boolean; error?: string }> {
  if (!token) {
    return { success: false, error: 'No reCAPTCHA token provided' };
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return { success: false, error: 'reCAPTCHA not configured' };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data['error-codes']);
      return { success: false, error: 'Please complete the reCAPTCHA verification' };
    }

    console.log('reCAPTCHA verified successfully');
    return { success: true };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false, error: 'Verification failed' };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, timezone, captchaToken } = body;
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               '127.0.0.1';

    // --- Security Check 1: Rate Limiting ---
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json({ error: 'Daily demo limit reached.' }, { status: 429 });
    }

    // --- Security Check 2: Verify Captcha ---
    const captchaResult = await verifyRecaptcha(captchaToken);
    if (!captchaResult.success) {
      return NextResponse.json({ error: captchaResult.error || 'Invalid Captcha' }, { status: 400 });
    }

    // --- 3. Generate Unique Room Name ---
    // CRITICAL: Every user gets a unique room so they don't talk over each other.
    const roomName = `demo_${crypto.randomUUID()}`;
    const participantIdentity = `user_${crypto.randomUUID()}`;

    // --- 4. Create LiveKit Token ---
    const at = new AccessToken(
      process.env.LIVEKIT_API_KEY!,
      process.env.LIVEKIT_API_SECRET!,
      {
        identity: participantIdentity,
        name: name || 'Guest',
        // Pass email, name, and timezone securely in metadata for the Python Agent to read
        metadata: JSON.stringify({ email, name: name || 'Guest', timezone }), 
      }
    );

    at.addGrant({
      roomJoin: true,
      room: roomName,
      canPublish: true,
      canSubscribe: true,
    });

    return NextResponse.json({
      token: await at.toJwt(),
      url: process.env.NEXT_PUBLIC_LIVEKIT_URL,
      roomName
    });

  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

