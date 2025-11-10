import { Metadata } from 'next';

import BlogOverviewPage from '~/components/pages/BlogOverview';
import { fetchBlogOverviewCached } from '~/lib/contentful/blogOverview';
import { fetchBlogPostsCached } from '~/lib/contentful/blogPosts';
import { generatePageMetadata } from '~/lib/seo';

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const entry = await fetchBlogOverviewCached({ preview: false });

  return generatePageMetadata(entry.fields.seoFields || undefined, {
    title: String(entry.fields.title || 'Blog'),
    description: 'Blog posts and articles',
  });
}

export default async function Page() {
  const [blogOverviewEntry, blogPostEntries] = await Promise.all([
    fetchBlogOverviewCached({ preview: false }),
    fetchBlogPostsCached({ preview: false }),
  ]);

  return <BlogOverviewPage blogOverviewEntry={blogOverviewEntry} blogPostEntries={blogPostEntries} />;
}

