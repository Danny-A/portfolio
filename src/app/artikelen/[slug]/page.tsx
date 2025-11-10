import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BlogPostPage from '~/components/pages/BlogPost';
import { fetchAllBlogPostSlugsCached, fetchBlogPostBySlugCached } from '~/lib/contentful/blogPosts';
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
  const entry = await fetchBlogPostBySlugCached({ slug, preview: false });

  if (!entry) {
    return {};
  }  

  return generatePageMetadata(entry.fields.seoFields || undefined, {
    title: String(entry.fields.title || 'Blog Post'),
    description: entry.fields.shortDescription || 'Blog post',
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const entry = await fetchBlogPostBySlugCached({ slug, preview: false });

  if (!entry) {
    notFound();
  }

  return <BlogPostPage blogPostEntry={entry} />;
}

