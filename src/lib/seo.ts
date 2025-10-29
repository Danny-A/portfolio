import { Metadata } from 'next';

import type { SEOEntry } from '~/types';

import { getAssetUrl } from './contentful/contentful';

interface SEOConfig {
  siteName?: string;
  siteUrl?: string;
  defaultDescription?: string;
  defaultImage?: string;
}

const defaultSEOConfig: SEOConfig = {
  siteName: 'Freelance senior front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Antz',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  defaultDescription: 'Freelance front-end developer met ruim 10 jaar ervaring in de digitale industrie.',
  defaultImage: '/opengraph-image.png',
};

export function generateMetadata(
  seoFields?: SEOEntry,
  pageTitle?: string,
  config: SEOConfig = defaultSEOConfig,
): Metadata {
  // Use SEO fields if available, otherwise fall back to page title and defaults
  const title = seoFields?.fields?.pageTitle || pageTitle || config.siteName;
  const description = seoFields?.fields?.pageDescription || config.defaultDescription;
  const canonical = seoFields?.fields?.canonicalUrl;

  // Handle share images - use first image if available, otherwise default
  const images = seoFields?.fields?.shareImages?.length
    ? seoFields.fields.shareImages.map(img => ({
        url: getAssetUrl(img),
        alt: img.fields?.title || img.fields?.file?.fileName || '',
      }))
    : config.defaultImage
      ? [{ url: config.defaultImage }]
      : undefined;

  const metadata: Metadata = {
    metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
    title,
    description,
  };

  // Add canonical URL if provided
  if (canonical) {
    metadata.alternates = {
      canonical,
    };
  }

  // Add robots directives if specified
  if (seoFields?.fields?.noindex || seoFields?.fields?.nofollow) {
    metadata.robots = {
      index: !seoFields.fields.noindex,
      follow: !seoFields.fields.nofollow,
    };
  }

  // Add Open Graph metadata
  metadata.openGraph = {
    title,
    description,
    siteName: config.siteName,
    type: 'website',
    images,
  };

  // Add Twitter Card metadata
  metadata.twitter = {
    card: 'summary_large_image',
    title,
    description,
    images,
  };

  return metadata;
}

// Helper function for page-specific SEO generation
export function generatePageMetadata(
  seoFields?: SEOEntry,
  fallbacks?: {
    title?: string;
    description?: string;
  },
): Metadata {
  return generateMetadata(seoFields, fallbacks?.title, {
    ...defaultSEOConfig,
    defaultDescription: fallbacks?.description || defaultSEOConfig.defaultDescription,
  });
}
