export const GA_TRACKING_ID = 'G-G9RW3D6T9K';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, file_extension, file_name, link_url, link_text }) => {
  window.gtag('event', action, {
    file_extension,
    file_name,
    link_url,
    link_text,
  });
};
