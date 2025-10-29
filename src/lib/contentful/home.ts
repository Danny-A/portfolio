import type { EntrySkeletonType } from 'contentful';

import type { HomePageEntry, HomePageFields } from '~/types';

import contentfulClient from './contentful';

interface FetchHomepageOptions {
  preview: boolean;
}

type HomePageSkeleton = EntrySkeletonType<HomePageFields, 'pageLanding'>;

export const fetchHomepage = async ({ preview }: FetchHomepageOptions): Promise<HomePageEntry> => {
  const client = contentfulClient({ preview });

  const entries = await client.getEntries<HomePageSkeleton>({
    content_type: 'pageLanding',
    limit: 1,
  });

  if (!entries.items.length) {
    throw new Error('Home page not found');
  }

  return entries.items[0];
};
