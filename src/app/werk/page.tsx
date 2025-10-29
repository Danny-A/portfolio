import { Metadata } from 'next';

import WerkPage from '~/components/pages/Werk';
import { fetchWorkPage } from '~/lib/contentful/work';
import { fetchWorkItems } from '~/lib/contentful/workItems';
import { generatePageMetadata } from '~/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const entry = await fetchWorkPage({ preview: false });
  return generatePageMetadata(entry.fields.seoFields || undefined, {
    title: String(entry.fields.title || 'Projecten & Ervaringen'),
    description:
      '10+ jaar freelance front-end development voor Nederlandse top bedrijven. Ervaring met React, Next.js, Design Systems, team leiderschap en enterprise architectuur. Bekijk recente projecten voor Liander, WUR, Bravoure, Eneco en Unicef.',
  });
}

export default async function Page() {
  const [workPageEntry, workItemEntries] = await Promise.all([
    fetchWorkPage({ preview: false }),
    fetchWorkItems({ preview: false }),
  ]);

  return <WerkPage workPageEntry={workPageEntry} workItemEntries={workItemEntries} />;
}
