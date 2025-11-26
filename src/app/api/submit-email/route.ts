// src/app/api/submit-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { validateEmail } from '@/utils/emailValidation';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'),
  prefix: 'ratelimit_email_submit',
});

// Verify reCAPTCHA v2 token
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
      console.error('reCAPTCHA v2 verification failed:', data['error-codes']);
      return { success: false, error: 'Please complete the reCAPTCHA verification' };
    }

    console.log('reCAPTCHA v2 verified successfully');
    return { success: true };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false, error: 'Verification failed' };
  }
}


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, timestamp, first_name, last_name, context, recaptchaToken } = body;
    
    // Get identifier for rate limiting (IP address)
    const ip = 
      request.headers.get('x-forwarded-for')?.split(',')[0] || 
      request.headers.get('x-real-ip') || 
      'unknown';
    
    // === SERVER-SIDE SECURITY CHECKS ===
    
    // 1. Check required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // 2. Timestamp validation (form must be open for at least 3 seconds)
    if (timestamp) {
      const timeSinceLoad = Date.now() - timestamp;
      if (timeSinceLoad < 3000) {
        console.log(`Timestamp check failed: ${timeSinceLoad}ms`);
        return NextResponse.json(
          { error: 'Invalid submission timing' },
          { status: 400 }
        );
      }
      
      // Also check if timestamp is too old (prevent replay attacks)
      if (timeSinceLoad > 3600000) { // 1 hour
        return NextResponse.json(
          { error: 'Form session expired' },
          { status: 400 }
        );
      }
    }
    
    // 3. Rate limiting
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      console.log(`Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    // 4. reCAPTCHA v2 verification
    if (recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      if (!recaptchaResult.success) {
        console.log(`reCAPTCHA v2 failed: ${recaptchaResult.error}`);
        return NextResponse.json(
          { error: recaptchaResult.error || 'Security verification failed' },
          { status: 403 }
        );
      }
      console.log('reCAPTCHA v2 verification passed');
    } else {
      console.warn('No reCAPTCHA token provided');
    }
    
    // 5. Email validation + disposable domain check
    const validation = validateEmail(email);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }
    
    // === END SECURITY CHECKS ===
    
    // Prepare data for webhook
    const webhookData = {
      email: email.toLowerCase().trim(),
      first_name: first_name?.trim() || '',
      last_name: last_name?.trim() || '',
      context: context?.trim() || "Interested in a demo"
    };
    
    // Call the ForgerLab webhook
    if (!process.env.N8N_END_POINT) {
      throw new Error("N8N_END_POINT is missing");
    }
    
    const webhookResponse = await fetch(process.env.N8N_END_POINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(webhookData),
    });
    
    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error('Webhook error:', errorText);
      throw new Error(`Webhook failed: ${webhookResponse.status}`);
    }
    
    const webhookResult = await webhookResponse.json();
    console.log('Webhook success:', webhookResult);
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Email submitted successfully' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Optional: Add OPTIONS for CORS if needed
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}