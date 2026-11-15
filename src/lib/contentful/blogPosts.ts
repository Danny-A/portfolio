import { cacheLife, cacheTag } from 'next/cache';
import type { EntrySkeletonType } from 'contentful';

import type { BlogPostEntry, BlogPostFields, SEOEntry } from '~/types';

import contentfulClient from './contentful';

// Helper to detect locale from URL slug
export function parseSlug(slug: string): { locale: string } {
  return { locale: slug.endsWith('-en') ? 'en-US' : 'nl' };
}

// Fetch blog post by entry ID in a specific locale
export const fetchBlogPostById = async ({
  entryId,
  locale,
  preview,
}: FetchBlogPostsOptions & { entryId: string; locale: string }): Promise<BlogPostEntry | null> => {
  const client = contentfulClient({ preview });

  try {
    const entry = await client.getEntry<BlogPostSkeleton>(entryId, { 
      locale,
      include: 2, // Include linked entries (seoFields, author, etc.) up to 2 levels deep
    } as any);
    return entry as BlogPostEntry;
  } catch {
    return null;
  }
};

// Fetch SEO fields entry in the correct locale
export const fetchSEOFieldsInLocale = async (
  seoEntryId: string | undefined,
  locale: string,
  preview: boolean,
): Promise<SEOEntry | null> => {
  if (!seoEntryId) return null;

  const client = contentfulClient({ preview });

  try {
    const entry = await client.getEntry(seoEntryId, { locale } as any);
    return entry as SEOEntry;
  } catch {
    return null;
  }
};

interface FetchBlogPostsOptions {
  preview: boolean;
}

type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, 'pageBlogPost'>;

export const fetchBlogPosts = async ({ preview }: FetchBlogPostsOptions): Promise<BlogPostEntry[]> => {
  const client = contentfulClient({ preview });

  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: 'pageBlogPost',
    order: ['-fields.publishedDate' as any],
  });

  return entries.items;
};

// Cached version with tags
export const fetchBlogPostsCached = async ({ preview }: FetchBlogPostsOptions): Promise<BlogPostEntry[]> => {
  'use cache';
  cacheLife('hours');
  cacheTag('blogposts', 'page');

  return fetchBlogPosts({ preview });
};

export const fetchBlogPostBySlug = async ({
  slug,
  preview,
  locale,
}: FetchBlogPostsOptions & { slug: string; locale?: string }): Promise<BlogPostEntry | null> => {
  const client = contentfulClient({ preview });

  try {
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: 'pageBlogPost',
      'fields.slug': slug,
      ...(locale && { locale }),
      include: 2, // Include linked entries (seoFields, author, etc.) up to 2 levels deep
      limit: 1,
    } as any);

    if (!entries.items.length) {
      return null;
    }

    return entries.items[0];
  } catch {
    // If locale doesn't exist, try without locale (fallback to default)
    if (locale) {
      const entries = await client.getEntries<BlogPostSkeleton>({
        content_type: 'pageBlogPost',
        'fields.slug': slug,
        include: 2,
        limit: 1,
      } as any);

      return entries.items[0] || null;
    }
    return null;
  }
};

// Cached version with tags
export const fetchBlogPostBySlugCached = async ({
  slug,
  preview,
  locale,
}: FetchBlogPostsOptions & { slug: string; locale?: string }): Promise<BlogPostEntry | null> => {
  'use cache';
  cacheLife('hours');
  cacheTag('blogposts', 'page', `blogpost-${slug}`);

  return fetchBlogPostBySlug({ slug, preview, locale });
};

// Find alternative locales for a blog post by checking the same entry ID in other locales
// Works bidirectionally - finds both Dutch and English versions regardless of current locale
export const findAlternativeLocales = async (
  entry: BlogPostEntry,
  preview: boolean,
): Promise<{ locale: string; slug: string }[]> => {
  'use cache';
  cacheLife('hours');
  cacheTag('blogposts', 'page', `blogpost-${entry.fields.slug}`);

  const entryId = entry.sys.id;
  const currentLocale = entry.sys.locale || 'nl';
  const isEnglish = ['en-US', 'en', 'en-GB'].includes(currentLocale);
  const enLocales = ['en-US', 'en', 'en-GB'];

  // Look up all locale variants in parallel
  const [nlEntry, ...enEntries] = await Promise.all([
    fetchBlogPostById({ entryId, locale: 'nl', preview }),
    ...enLocales.map(locale => fetchBlogPostById({ entryId, locale, preview })),
  ]);

  const alternatives: { locale: string; slug: string }[] = [];

  if (nlEntry) {
    alternatives.push({ locale: 'nl', slug: nlEntry.fields.slug });
  } else if (currentLocale === 'nl') {
    alternatives.push({ locale: 'nl', slug: entry.fields.slug });
  }

  // Prefer the first English locale code that resolves, in priority order
  const enEntry = enEntries.find(Boolean);
  if (enEntry) {
    alternatives.push({ locale: 'en-US', slug: enEntry.fields.slug });
  } else if (isEnglish) {
    alternatives.push({ locale: 'en-US', slug: entry.fields.slug });
  }

  return alternatives;
};

// Get all slugs for static generation (from both locales)
export const fetchAllBlogPostSlugs = async ({ preview }: FetchBlogPostsOptions): Promise<string[]> => {
  const client = contentfulClient({ preview });
  const slugs: string[] = [];

  // Fetch Dutch slugs
  try {
    const nlEntries = await client.getEntries<BlogPostSkeleton>({
      content_type: 'pageBlogPost',
      select: ['fields.slug'],
      locale: 'nl',
      limit: 1000,
    });
    slugs.push(...nlEntries.items.map(item => item.fields.slug).filter(Boolean) as string[]);
  } catch {
    // nl locale might not exist
  }

  // Fetch English slugs (try common locale codes)
  const enLocales = ['en-US', 'en', 'en-GB'];
  for (const locale of enLocales) {
    try {
      const enEntries = await client.getEntries<BlogPostSkeleton>({
        content_type: 'pageBlogPost',
        select: ['fields.slug'],
        locale,
        limit: 1000,
      });
      slugs.push(...enEntries.items.map(item => item.fields.slug).filter(Boolean) as string[]);
      break; // Success, stop trying
    } catch {
      continue;
    }
  }

  return slugs;
};

// Cached version with tags
export const fetchAllBlogPostSlugsCached = async ({ preview }: FetchBlogPostsOptions): Promise<string[]> => {
  'use cache';
  cacheLife('hours');
  cacheTag('blogposts', 'page');

  return fetchAllBlogPostSlugs({ preview });
};

