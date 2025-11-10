import type { EntrySkeletonType } from 'contentful';

import type { BlogOverviewEntry, BlogOverviewFields } from '~/types';

import contentfulClient from './contentful';

interface FetchBlogOverviewOptions {
  preview: boolean;
}

type BlogOverviewSkeleton = EntrySkeletonType<BlogOverviewFields, 'pageBlogOverview'>;

export const fetchBlogOverview = async ({ preview }: FetchBlogOverviewOptions): Promise<BlogOverviewEntry> => {
  const client = contentfulClient({ preview });

  const entries = await client.getEntries<BlogOverviewSkeleton>({
    content_type: 'pageBlogOverview',
    limit: 1,
  });

  if (!entries.items.length) {
    throw new Error('Blog overview page not found');
  }

  return entries.items[0];
};

// Cached version with tags
export const fetchBlogOverviewCached = async ({ preview }: FetchBlogOverviewOptions): Promise<BlogOverviewEntry> => {
  const { unstable_cache } = await import('next/cache');

  const cachedFetch = unstable_cache(async () => fetchBlogOverview({ preview }), ['blogoverview'], {
    tags: ['blogoverview', 'page'],
    revalidate: preview ? 0 : 3600,
  });

  return cachedFetch();
};

