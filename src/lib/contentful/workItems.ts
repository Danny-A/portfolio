import type { EntrySkeletonType } from 'contentful';

import type { WorkItemEntry, WorkItemFields } from '~/types';

import contentfulClient from './contentful';

interface FetchWorkItemsOptions {
  preview: boolean;
}

type WorkItemSkeleton = EntrySkeletonType<WorkItemFields, 'pageWork'>;

export const fetchWorkItems = async ({ preview }: FetchWorkItemsOptions): Promise<WorkItemEntry[]> => {
  const client = contentfulClient({ preview });

  const entries = await client.getEntries<WorkItemSkeleton>({
    content_type: 'pageWork',
    order: ['-fields.startDate' as any],
  });

  if (!entries.items.length) {
    throw new Error('Work items not found');
  }

  return entries.items;
};
