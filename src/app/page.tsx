import { Metadata } from 'next';

import HomePage from '~/components/pages/HomePage';
import { fetchHomepageCached } from '~/lib/contentful/home';
import { fetchSiteSettings } from '~/lib/contentful/siteSettings';
import { generatePageMetadata } from '~/lib/seo';

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const entry = await fetchHomepageCached({ preview: false });

  return generatePageMetadata(entry.fields.seoFields || undefined, {
    title: String(
      entry.fields.title || 'Danny Arntz | Freelance Senior Front-end Developer React & Next.js | Nederland',
    ),
    description:
      'Senior freelance front-end developer met 10+ jaar ervaring. Expert in React, Next.js, TypeScript en GraphQL voor Nederlandse agencies en enterprises. Lead developer voor Eneco, Unicef, WUR. Utrecht, Amsterdam, Rotterdam.',
  });
}

export default async function Page() {
  const [entry, siteSettings] = await Promise.all([
    fetchHomepageCached({ preview: false }),
    fetchSiteSettings({ preview: false }),
  ]);

  return <HomePage entry={entry} siteSettings={siteSettings} />;
}
