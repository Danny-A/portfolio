import Link from 'next/link';
import DOMPurify from "isomorphic-dompurify";

import Heading from '~/components/Heading';
import Layout from '~/components/Layout';
import RichText from '~/components/RichText';
import type { BlogPostEntry } from '~/types';
import { formatDateFull } from '~/utils/formatDateFull';

type Props = {
  blogPostEntry: BlogPostEntry;
};

export default function BlogPostPage({ blogPostEntry }: Props) {
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
  
  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6">
          <Link
            href="/artikelen"
            className="inline-flex items-center text-sm text-primary hover:text-secondary hover:underline transition">
            ← Terug naar overzicht
          </Link>
        </div>
        <article className="flex flex-col gap-8">
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

