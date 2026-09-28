type Gtag = (command: 'event', name: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

/** Sends a GA4 event if (and only if) GA is loaded. */
export function track(name: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', name, params);
}
