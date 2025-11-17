import type { MetadataRoute } from 'next';
import type { EntrySkeletonType } from 'contentful';

import type { BlogPostFields } from '~/types';
import contentfulClient from '~/lib/contentful/contentful';

type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, 'pageBlogPost'>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dannyarntz.nl';
  const client = contentfulClient({ preview: false });

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/werk`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/artikelen`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Fetch blog posts from both locales
  const blogPostPages: MetadataRoute.Sitemap = [];

  // Fetch Dutch blog posts
  try {
    const nlPosts = await client.getEntries<BlogPostSkeleton>({
      content_type: 'pageBlogPost',
      locale: 'nl',
      limit: 1000,
    });

    nlPosts.items.forEach((post) => {
      if (post.fields.slug) {
        blogPostPages.push({
          url: `${baseUrl}/artikelen/${post.fields.slug}`,
          lastModified: post.fields.publishedDate ? new Date(post.fields.publishedDate) : new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        });
      }
    });
  } catch {
    // nl locale might not exist
  }

  // Fetch English blog posts
  const enLocales = ['en-US', 'en', 'en-GB'];
  for (const locale of enLocales) {
    try {
      const enPosts = await client.getEntries<BlogPostSkeleton>({
        content_type: 'pageBlogPost',
        locale,
        limit: 1000,
      });

      enPosts.items.forEach((post) => {
        if (post.fields.slug) {
          blogPostPages.push({
            url: `${baseUrl}/artikelen/${post.fields.slug}`,
            lastModified: post.fields.publishedDate ? new Date(post.fields.publishedDate) : new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          });
        }
      });
      break; // Success, stop trying other locales
    } catch {
      continue;
    }
  }

  return [...staticPages, ...blogPostPages];
}
