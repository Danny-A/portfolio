import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BlogPostPage from '~/components/pages/BlogPost';
import {
  fetchAllBlogPostSlugsCached,
  fetchBlogPostBySlugCached,
  fetchSEOFieldsInLocale,
  findAlternativeLocales,
  parseSlug,
} from '~/lib/contentful/blogPosts';
import { generatePageMetadata } from '~/lib/seo';

export const revalidate = 3600; // Revalidate every hour

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

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { locale } = parseSlug(slug);
  const entry = await fetchBlogPostBySlugCached({ slug, preview: false, locale });

  if (!entry) {
    notFound();
  }

  // Find alternative locales for language switcher
  const alternatives = await findAlternativeLocales(entry, false);

  return <BlogPostPage blogPostEntry={entry} alternatives={alternatives} currentLocale={locale} />;
}

