import { Metadata } from 'next';

import ContactPageComponent from '~/components/pages/Contact';
import { fetchContactPage } from '~/lib/contentful/contact';
import { fetchSiteSettings } from '~/lib/contentful/siteSettings';
import { generatePageMetadata } from '~/lib/seo';
import { formatDate } from '~/utils/formatDate';

export async function generateMetadata(): Promise<Metadata> {
  const [entry, siteSettings] = await Promise.all([
    fetchContactPage({ preview: false }),
    fetchSiteSettings({ preview: false }),
  ]);
  const availableFrom = siteSettings.fields.availableFrom || '';

  // Create modified SEO fields with dynamic description
  const modifiedSeoFields = entry.fields.seoFields
    ? {
        ...entry.fields.seoFields,
        fields: {
          ...entry.fields.seoFields.fields,
          description: entry.fields.seoFields.fields.pageDescription?.replace(
            '{availableFrom}',
            formatDate(availableFrom),
          ),
        },
      }
    : undefined;

  return generatePageMetadata(modifiedSeoFields, {
    title: 'Contact & Beschikbaarheid | Danny Arntz | Freelance Front-end Developer',
    description: `Beschikbaar vanaf ${formatDate(availableFrom)}. Freelance senior front-end developer voor React, Next.js en TypeScript projecten. Lead developer, team mentoring of lange termijn opdrachten. Utrecht, Amsterdam, Rotterdam en remote.`,
  });
}

export default async function Page() {
  const entry = await fetchContactPage({ preview: false });

  return <ContactPageComponent entry={entry} />;
}
