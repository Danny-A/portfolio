import { Metadata } from 'next';

import WerkPage from '~/components/pages/Werk';
import { fetchWorkPageCached } from '~/lib/contentful/work';
import { fetchWorkItemsCached } from '~/lib/contentful/workItems';
import { generatePageMetadata } from '~/lib/seo';

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const entry = await fetchWorkPageCached({ preview: false });

  return generatePageMetadata(entry.fields.seoFields || undefined, {
    title: String(entry.fields.title || 'Projecten & Ervaringen'),
    description:
      '10+ jaar freelance front-end development voor Nederlandse top bedrijven. Ervaring met React, Next.js, Design Systems, team leiderschap en enterprise architectuur. Bekijk recente projecten voor Liander, WUR, Bravoure, Eneco en Unicef.',
  });
}

export default async function Page() {
  const [workPageEntry, workItemEntries] = await Promise.all([
    fetchWorkPageCached({ preview: false }),
    fetchWorkItemsCached({ preview: false }),
  ]);

  return <WerkPage workPageEntry={workPageEntry} workItemEntries={workItemEntries} />;
}
