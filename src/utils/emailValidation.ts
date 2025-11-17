// src/utils/emailValidation.ts

import { disposableDomainsSet } from './disposableDomains';

export function isDisposableEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  if (!domain) return false;
    
  // Check exact domain match
  if (disposableDomainsSet.has(domain)) {
    return true;
  }
  
  // Optional: Check subdomains (e.g., mail.tempmail.com)
  const parts = domain.split('.');
  for (let i = 1; i < parts.length; i++) {
    const subdomain = parts.slice(i).join('.');
    if (disposableDomainsSet.has(subdomain)) {
      return true;
    }
  }
  
  return false;
}

export function validateEmail(email: string): { valid: boolean; error?: string } {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }
  
  if (isDisposableEmail(email)) {
    return { valid: false, error: 'Please use a permanent email address' };
  }
  
  return { valid: true };
}