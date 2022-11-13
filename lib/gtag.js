export const GA_TRACKING_ID = 'G-G9RW3D6T9K';

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};
