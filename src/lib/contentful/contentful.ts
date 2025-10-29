import { createClient } from 'contentful';

import type { ContentfulAsset } from '~/types';

// Validate required environment variables
if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID environment variable is required');
}
if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN environment variable is required');
}
if (!process.env.CONTENTFUL_PREVIEW_SECRET) {
  throw new Error('CONTENTFUL_PREVIEW_SECRET environment variable is required');
}

// Create Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

// This is a Contentful client that's been configured
// to fetch drafts and unpublished content.
const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_SECRET,
});

// This little helper will let us switch between the two
// clients easily:
export default function contentfulClient({ preview = false }) {
  if (preview) {
    return previewClient;
  }

  return client;
}

// Helper function to get asset URL
export function getAssetUrl(asset: ContentfulAsset | undefined): string {
  if (!asset?.fields?.file?.url) return '';
  return `https:${asset.fields.file.url}`;
}

// Helper function to get asset filename
export function getAssetFilename(asset: ContentfulAsset | undefined): string {
  return asset?.fields?.file?.fileName || '';
}
