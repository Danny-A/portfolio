import { cacheLife, cacheTag } from 'next/cache';
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
  'use cache';
  cacheLife('hours');
  cacheTag('blogoverview', 'page');

  return fetchBlogOverview({ preview });
};

