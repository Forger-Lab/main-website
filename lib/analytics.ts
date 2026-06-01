declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

/** Fire a Google Analytics button_click event. No-op if gtag hasn't loaded yet. */
export function trackClick(buttonName: string) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "button_click", { button_name: buttonName });
}

export {};
