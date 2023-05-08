import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.dannyarntz.nl/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.dannyarntz.nl/werk',
      lastModified: new Date(),
    },
    {
      url: 'https://www.dannyarntz.nl/contact',
      lastModified: new Date(),
    },
  ];
}
