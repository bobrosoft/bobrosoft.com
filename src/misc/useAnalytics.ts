declare const gtag: any;

class Analytics {
  trackEvent(name: string, props: any) {
    if (window.hasOwnProperty('gtag')) {
      gtag('event', name, props);
    }
  }
}

const analytics = new Analytics();

export const useAnalytics = (): Analytics => {
  return analytics;
};
