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
