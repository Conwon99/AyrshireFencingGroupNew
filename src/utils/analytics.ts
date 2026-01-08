// Google Analytics event tracking utility

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Track a custom event in Google Analytics
 * @param eventName - The event name (e.g., "quoteButton_hero", "phone_nav")
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'CTA',
      event_label: eventName,
      ...eventParams,
    });
  }
};

/**
 * Track quote button clicks
 */
export const trackQuoteButton = (location: string) => {
  trackEvent(`quoteButton_${location}`);
};

/**
 * Track phone link clicks
 */
export const trackPhone = (location: string) => {
  trackEvent(`phone_${location}`);
};

/**
 * Track form start (when user first interacts with form)
 */
export const trackFormStart = (location: string) => {
  trackEvent(`formstart_${location}`);
};

