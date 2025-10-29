import type { EntrySkeletonType } from 'contentful';

import type { SiteSettingsEntry, SiteSettingsFields } from '~/types';

import contentfulClient from './contentful';

interface FetchSiteSettingsOptions {
  preview: boolean;
}

type SiteSettingsSkeleton = EntrySkeletonType<SiteSettingsFields, 'siteSettings'>;

export const fetchSiteSettings = async ({ preview }: FetchSiteSettingsOptions): Promise<SiteSettingsEntry> => {
  const client = contentfulClient({ preview });

  const entries = await client.getEntries<SiteSettingsSkeleton>({
    content_type: 'siteSettings',
    limit: 1,
  });

  if (!entries.items.length) {
    throw new Error('Site settings not found');
  }

  return entries.items[0];
};
