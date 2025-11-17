'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { validateEmail } from '@/utils/emailValidation';

function DemoInput() {
  const [email, setEmail] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  
  // Security: Honeypot field
  const [honeypot, setHoneypot] = useState('');
  const [timestamp] = useState(Date.now());
  const submitAttempts = useRef(0);
  const lastSubmitTime = useRef(0);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Load and render reCAPTCHA when component mounts
  useEffect(() => {
    const renderRecaptcha = () => {
      const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      
      if (!sitekey) {
        console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not configured');
        setError('reCAPTCHA not configured. Please add keys to .env.local');
        return;
      }

      if (
        typeof window !== 'undefined' && 
        (window as any).grecaptcha && 
        (window as any).grecaptcha.render &&
        recaptchaRef.current &&
        recaptchaWidgetId.current === null &&
        showButton
      ) {
        try {
          recaptchaWidgetId.current = (window as any).grecaptcha.render(recaptchaRef.current, {
            sitekey: sitekey,
          });
          setRecaptchaLoaded(true);
        } catch (error) {
          console.error('Error rendering reCAPTCHA:', error);
          setError('Failed to load reCAPTCHA. Please check your configuration.');
        }
      }
    };

    if (showButton && !recaptchaLoaded) {
      // Wait for grecaptcha to be ready
      const checkRecaptcha = () => {
        if (typeof window !== 'undefined' && (window as any).grecaptcha?.ready) {
          (window as any).grecaptcha.ready(() => {
            renderRecaptcha();
          });
        } else {
          setTimeout(checkRecaptcha, 100);
        }
      };
      checkRecaptcha();
    }

    // Cleanup on unmount
    return () => {
      if (recaptchaWidgetId.current !== null && typeof window !== 'undefined' && (window as any).grecaptcha) {
        try {
          (window as any).grecaptcha.reset(recaptchaWidgetId.current);
        } catch (error) {
          // Ignore errors on cleanup
        }
      }
    };
  }, [showButton, recaptchaLoaded]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    const isValid = emailRegex.test(value);
    
    // If email becomes invalid, hide button and reset reCAPTCHA
    if (!isValid && showButton) {
      setShowButton(false);
      setRecaptchaLoaded(false);
      recaptchaWidgetId.current = null;
    } else if (isValid && !showButton) {
      setShowButton(true);
    }
    
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // === SECURITY CHECKS ===
    
    // 1. Honeypot check
    if (honeypot) {
      console.log('Bot detected');
      return; // Silent fail
    }
    
    // 2. Timestamp check (minimum 3 seconds)
    const timeSinceLoad = Date.now() - timestamp;
    if (timeSinceLoad < 3000) {
      setError('Please slow down');
      return;
    }
    
    // 3. Rate limiting
    const now = Date.now();
    if (now - lastSubmitTime.current < 5000) {
      setError('Please wait before submitting again');
      return;
    }
    
    submitAttempts.current += 1;
    if (submitAttempts.current > 3) {
      setError('Too many attempts');
      return;
    }
    
    // 4. Email validation + disposable domain check
    const validation = validateEmail(email);
    if (!validation.valid) {
      setError(validation.error || 'Invalid email');
      return;
    }
    
    // 5. reCAPTCHA v2 check
    let recaptchaToken = '';
    if (typeof window !== 'undefined' && (window as any).grecaptcha && recaptchaWidgetId.current !== null) {
      try {
        recaptchaToken = (window as any).grecaptcha.getResponse(recaptchaWidgetId.current);
        if (!recaptchaToken) {
          setError('Please complete the reCAPTCHA verification');
          return;
        }
      } catch (error) {
        console.error('Error getting reCAPTCHA response:', error);
        setError('reCAPTCHA error. Please refresh the page.');
        return;
      }
    } else {
      setError('reCAPTCHA not loaded. Please refresh the page.');
      return;
    }
    
    // === END SECURITY CHECKS ===
    
    lastSubmitTime.current = now;
    setIsLoading(true);
    
    try {
      // Your API call here
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          timestamp,
          recaptchaToken 
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed');
      }
      
      setIsLoading(false);
      setIsSuccess(true);
    } catch (err: any) {
      setIsLoading(false);
      setError(err.message || 'Something went wrong');
      // Reset reCAPTCHA on error
      if (typeof window !== 'undefined' && (window as any).grecaptcha && recaptchaWidgetId.current !== null) {
        try {
          (window as any).grecaptcha.reset(recaptchaWidgetId.current);
        } catch (error) {
          console.error('Error resetting reCAPTCHA:', error);
        }
      }
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="demo-success"
      >
        <div className="demo-success-content">
        <span className="demo-success-text">We'll get back to you in a jiffy!</span>
        </div>
        <span className="demo-success-close">😎</span>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <form onSubmit={handleSubmit} className="relative w-fit demo-input-container">
        <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            style={{
              display: 'none',
            }}
          />
        <input
          type="email"
          className="demo-input"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
          disabled={isLoading}
        />
        <AnimatePresence mode="wait">
          {showButton && (
            <motion.button
              key="submit-button"
              type="submit"
              initial={{ x: 120, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 120, opacity: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 25,
                mass: 0.8
              }}
              className="demo-input-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="demo-loader"></div>
              ) : (
                <>
                  <span className="demo-button-text">→</span>
                </>
              )}
            </motion.button>
          )}
        </AnimatePresence>
        {error && (
          <motion.p
            key="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 text-sm mt-2 absolute"
          >
            {error}
          </motion.p>
        )}
      </form>
      
      {/* reCAPTCHA v2 Checkbox */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            key="recaptcha-widget"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div ref={recaptchaRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DemoInput;