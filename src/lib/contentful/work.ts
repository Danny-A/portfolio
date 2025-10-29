import type { EntrySkeletonType } from 'contentful';

import type { WorkPageEntry, WorkPageFields } from '~/types';

import contentfulClient from './contentful';

interface FetchWorkPageOptions {
  preview: boolean;
}

type WorkPageSkeleton = EntrySkeletonType<WorkPageFields, 'pageWorkOverview'>;

export const fetchWorkPage = async ({ preview }: FetchWorkPageOptions): Promise<WorkPageEntry> => {
  const client = contentfulClient({ preview });

  const entries = await client.getEntries<WorkPageSkeleton>({
    content_type: 'pageWorkOverview',
    limit: 1,
  });

  if (!entries.items.length) {
    throw new Error('Work page not found');
  }

  return entries.items[0];
};

// Cached version with tags
export const fetchWorkPageCached = async ({ preview }: FetchWorkPageOptions): Promise<WorkPageEntry> => {
  const { unstable_cache } = await import('next/cache');

  const cachedFetch = unstable_cache(async () => fetchWorkPage({ preview }), ['workpage'], {
    tags: ['workpage', 'page'],
    revalidate: preview ? 0 : 3600,
  });

  return cachedFetch();
};
