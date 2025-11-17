import Link from 'next/link';
import DOMPurify from "isomorphic-dompurify";

import Heading from '~/components/Heading';
import Layout from '~/components/Layout';
import RichText from '~/components/RichText';
import type { BlogPostEntry } from '~/types';
import { formatDateFull } from '~/utils/formatDateFull';

type Props = {
  blogPostEntry: BlogPostEntry;
  alternatives: { locale: string; slug: string }[];
  currentLocale: string;
};

export default function BlogPostPage({ blogPostEntry, alternatives, currentLocale }: Props) {
  const { fields } = blogPostEntry;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": fields.title,
    "datePublished": fields.publishedDate,
    "author": {
      "@type": "Person",
      "name": fields.author?.fields?.name,
    },
  };

  // Filter out current locale and prepare language switcher
  const otherLocales = alternatives.filter(alt => {
    if (currentLocale === 'en-US' || currentLocale === 'en' || currentLocale === 'en-GB') {
      return alt.locale === 'nl';
    }
    return alt.locale === 'en-US';
  });
  
  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/artikelen"
            className="inline-flex items-center text-sm text-primary hover:text-secondary hover:underline transition">
            ← Terug naar overzicht
          </Link>
          
          {otherLocales.length > 0 && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Language:</span>
              {otherLocales.map((alt) => (
                <Link
                  key={alt.locale}
                  href={`/artikelen/${alt.slug}`}
                  className="text-primary hover:text-secondary hover:underline transition"
                >
                  {alt.locale === 'nl' ? 'Nederlands' : 'English'}
                </Link>
              ))}
            </div>
          )}
        </div>
        <article lang={currentLocale === 'en-US' || currentLocale === 'en' || currentLocale === 'en-GB' ? 'en' : 'nl'} className="flex flex-col gap-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(jsonLd)) }} />
          {fields.title && (
            <div className="flex flex-col gap-4">
              <Heading as="h1" size="3xl">
                {fields.title}
              </Heading>

              {fields.shortDescription && (
                <p className="text-lg text-gray-700">{fields.shortDescription}</p>
              )}

              <div className="flex items-center gap-4 text-sm text-gray-600">
                {fields.publishedDate && <time>{formatDateFull(fields.publishedDate)}</time>}
                {fields.author?.fields?.name && (
                  <>
                    <span>•</span>
                    <span>{fields.author.fields.name}</span>
                  </>
                )}
              </div>
            </div>
          )}

          {fields.content && (
            <div className="shadow-elevation-high rounded-md bg-white p-8">
              <RichText document={fields.content} />
            </div>
          )}
        </article>
      </div>
    </Layout>
  );
}

