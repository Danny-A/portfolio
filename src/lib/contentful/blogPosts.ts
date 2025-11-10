import type { EntrySkeletonType } from 'contentful';

import type { BlogPostEntry, BlogPostFields } from '~/types';

import contentfulClient from './contentful';

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
  const { unstable_cache } = await import('next/cache');

  const cachedFetch = unstable_cache(async () => fetchBlogPosts({ preview }), ['blogposts'], {
    tags: ['blogposts', 'page'],
    revalidate: preview ? 0 : 3600,
  });

  return cachedFetch();
};

export const fetchBlogPostBySlug = async ({
  slug,
  preview,
}: FetchBlogPostsOptions & { slug: string }): Promise<BlogPostEntry | null> => {
  const client = contentfulClient({ preview });

  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: 'pageBlogPost',
    'fields.slug': slug,
    limit: 1,
  } as any);

  if (!entries.items.length) {
    return null;
  }

  return entries.items[0];
};

// Cached version with tags
export const fetchBlogPostBySlugCached = async ({
  slug,
  preview,
}: FetchBlogPostsOptions & { slug: string }): Promise<BlogPostEntry | null> => {
  const { unstable_cache } = await import('next/cache');

  const cachedFetch = unstable_cache(
    async () => fetchBlogPostBySlug({ slug, preview }),
    [`blogpost-${slug}`],
    {
      tags: ['blogposts', 'page', `blogpost-${slug}`],
      revalidate: preview ? 0 : 3600,
    },
  );

  return cachedFetch();
};

// Get all slugs for static generation
export const fetchAllBlogPostSlugs = async ({ preview }: FetchBlogPostsOptions): Promise<string[]> => {
  const client = contentfulClient({ preview });

  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: 'pageBlogPost',
    select: ['fields.slug'],
    limit: 1000, // Adjust if you have more than 1000 posts
  });

  return entries.items.map(item => item.fields.slug).filter(Boolean) as string[];
};

// Cached version with tags
export const fetchAllBlogPostSlugsCached = async ({ preview }: FetchBlogPostsOptions): Promise<string[]> => {
  const { unstable_cache } = await import('next/cache');

  const cachedFetch = unstable_cache(async () => fetchAllBlogPostSlugs({ preview }), ['blogpost-slugs'], {
    tags: ['blogposts', 'page'],
    revalidate: preview ? 0 : 3600,
  });

  return cachedFetch();
};

