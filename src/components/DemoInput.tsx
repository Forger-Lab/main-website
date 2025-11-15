'use client';
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { validateEmail } from '@/utils/emailValidation';

function DemoInput() {
  const [email, setEmail] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  // Security: Honeypot field
  const [honeypot, setHoneypot] = useState('');
  const [timestamp] = useState(Date.now());
  const submitAttempts = useRef(0);
  const lastSubmitTime = useRef(0);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setShowButton(emailRegex.test(value));
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
    
    // === END SECURITY CHECKS ===
    
    lastSubmitTime.current = now;
    setIsLoading(true);
    
    try {
      // Your API call here
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, timestamp }),
      });
      
      if (!response.ok) throw new Error('Failed');
      
      setIsLoading(false);
      setIsSuccess(true);
    } catch (err) {
      setIsLoading(false);
      setError('Something went wrong');
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
      <AnimatePresence>
        {showButton && (
          <motion.button
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
        {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-2 absolute"
        >
          {error}
        </motion.p>
      )}
      </AnimatePresence>
    </form>
  );
}

export default DemoInput;