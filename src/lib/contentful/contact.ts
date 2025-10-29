import type { EntrySkeletonType } from 'contentful';

import type { ContactPageEntry, ContactPageFields } from '~/types';

import contentfulClient from './contentful';

interface FetchContactPageOptions {
  preview: boolean;
}

type ContactPageSkeleton = EntrySkeletonType<ContactPageFields, 'pageContact'>;

export const fetchContactPage = async ({ preview }: FetchContactPageOptions): Promise<ContactPageEntry> => {
  const entries = await contentfulClient({ preview }).getEntries<ContactPageSkeleton>({
    content_type: 'pageContact',
    limit: 1,
  });

  if (!entries.items.length) {
    throw new Error('Contact page not found');
  }

  return entries.items[0];
};

// Cached version with tags
export const fetchContactPageCached = async ({ preview }: FetchContactPageOptions): Promise<ContactPageEntry> => {
  const { unstable_cache } = await import('next/cache');

  const cachedFetch = unstable_cache(async () => fetchContactPage({ preview }), ['contactpage'], {
    tags: ['contactpage', 'page'],
    revalidate: preview ? 0 : 3600,
  });

  return cachedFetch();
};
