import { Metadata } from 'next';

import HomePage from '~/components/pages/HomePage';
import { fetchHomepage } from '~/lib/contentful/home';
import { fetchSiteSettings } from '~/lib/contentful/siteSettings';
import { generatePageMetadata } from '~/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const entry = await fetchHomepage({ preview: false });
  console.log(entry.fields.seoFields);
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
    fetchHomepage({ preview: false }),
    fetchSiteSettings({ preview: false }),
  ]);

  return <HomePage entry={entry} siteSettings={siteSettings} />;
}
