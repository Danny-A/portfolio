import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import BlogPostPage from '~/components/pages/BlogPost';
import {
  fetchAllBlogPostSlugsCached,
  fetchBlogPostBySlugCached,
  fetchSEOFieldsInLocale,
  findAlternativeLocales,
  parseSlug,
} from '~/lib/contentful/blogPosts';
import { generatePageMetadata } from '~/lib/seo';

export async function generateStaticParams() {
  const slugs = await fetchAllBlogPostSlugsCached({ preview: false });

  return slugs.map(slug => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { locale } = parseSlug(slug);
  const entry = await fetchBlogPostBySlugCached({ slug, preview: false, locale });

  if (!entry) {
    return {};
  }

  // Fetch SEO fields in the correct locale if they exist
  let seoFields = entry.fields.seoFields;
  if (seoFields?.sys?.id) {
    // Check if seoFields is in the correct locale
    const seoFieldsLocale = seoFields.sys.locale;
    if (seoFieldsLocale !== locale) {
      // Fetch seoFields in the correct locale
      const localizedSeoFields = await fetchSEOFieldsInLocale(seoFields.sys.id, locale, false);
      if (localizedSeoFields) {
        seoFields = localizedSeoFields;
      }
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dannyarntz.nl';
  const metadata = generatePageMetadata(seoFields || undefined, {
    title: String(entry.fields.title || 'Blog Post'),
    description: entry.fields.shortDescription || 'Blog post',
  });

  // Find alternative locales using entry ID
  const alternatives = await findAlternativeLocales(entry, false);

  if (alternatives.length > 1) {
    const languages: Record<string, string> = {};
    alternatives.forEach(alt => {
      languages[alt.locale] = `${baseUrl}/artikelen/${alt.slug}`;
    });
    languages['x-default'] = `${baseUrl}/artikelen/${alternatives.find(a => a.locale === 'nl')?.slug || slug}`;

    metadata.alternates = {
      ...metadata.alternates,
      languages,
    };
  }

  return metadata;
}

export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<BlogPostSkeleton />}>
      <Post params={params} />
    </Suspense>
  );
}

async function Post({ params }: Props) {
  const { slug } = await params;
  const { locale } = parseSlug(slug);
  const entry = await fetchBlogPostBySlugCached({ slug, preview: false, locale });

  if (!entry) {
    notFound();
  }

  const alternatives = await findAlternativeLocales(entry, false);

  return <BlogPostPage blogPostEntry={entry} alternatives={alternatives} currentLocale={locale} />;
}

function BlogPostSkeleton() {
  return (
    <div className="mx-auto max-w-2xl px-4" aria-busy="true">
      <div className="mb-6">
        <Link
          href="/artikelen"
          className="inline-flex items-center text-sm text-primary transition hover:text-secondary hover:underline">
          ← Terug naar overzicht
        </Link>
      </div>
      <div className="flex animate-pulse flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="h-10 w-3/4 rounded-md bg-gray-200" />
          <div className="h-6 w-full rounded-md bg-gray-200" />
          <div className="h-4 w-1/3 rounded-md bg-gray-200" />
        </div>
        <div className="h-96 rounded-md bg-white shadow-elevation-high" />
      </div>
    </div>
  );
}
