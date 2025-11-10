import { Document } from '@contentful/rich-text-types';

// Base Contentful types
export interface ContentfulSys {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  locale?: string;
  contentType?: {
    sys: {
      id: string;
      linkType: string;
      type: string;
    };
  };
}

export interface ContentfulAsset {
  sys: ContentfulSys;
  fields: {
    title?: string;
    description?: string;
    file?: {
      url: string;
      fileName: string;
      contentType: string;
      details?: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
    };
  };
}

export interface ContentfulEntry<T = any> {
  sys: ContentfulSys;
  fields: T;
}

// SEO Component
export interface SEOFields {
  pageTitle?: string;
  pageDescription?: string;
  canonicalUrl?: string;
  nofollow?: boolean;
  noindex?: boolean;
  shareImages?: ContentfulAsset[];
}

export type SEOEntry = ContentfulEntry<SEOFields>;

// Site Settings
export interface SiteSettingsFields {
  availableFrom?: string;
}

export type SiteSettingsEntry = ContentfulEntry<SiteSettingsFields>;

// Page Landing (Homepage)
export interface HomePageFields {
  title?: string;
  subtitle?: string;
  availability?: string;
  stack?: string;
  description?: Document;
  workArea?: string;
  availableFor?: string;
  seoFields?: SEOEntry;
}

export type HomePageEntry = ContentfulEntry<HomePageFields>;

// Page Work Overview
export interface WorkPageFields {
  title: string;
  description?: Document;
  seoFields: SEOEntry;
}

export type WorkPageEntry = ContentfulEntry<WorkPageFields>;

// Page Work (Individual work items)
export interface WorkItemFields {
  title: string;
  slug: string;
  role: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description?: Document;
  seoFields?: SEOEntry;
}

export type WorkItemEntry = ContentfulEntry<WorkItemFields>;

// Page Contact
export interface ContactPageFields {
  title: string;
  emailAddress?: string;
  description?: Document;
  cv?: ContentfulAsset;
  seoFields?: SEOEntry;
}

export type ContactPageEntry = ContentfulEntry<ContactPageFields>;

// Page Blog Overview
export interface BlogOverviewFields {
  internalName: string;
  title: string;
  description?: Document;
  seoFields: SEOEntry;
}

export type BlogOverviewEntry = ContentfulEntry<BlogOverviewFields>;

// Page Blog Post
export interface BlogPostFields {
  internalName: string;
  slug: string;
  title: string;
  shortDescription?: string;
  publishedDate: string;
  featuredImage: ContentfulAsset;
  content: Document;
  author?: ContentfulEntry<{
    name?: string;
    bio?: Document;
    avatar?: ContentfulAsset;
  }>;
  relatedBlogPosts?: BlogPostEntry[];
  seoFields?: SEOEntry;
}

export type BlogPostEntry = ContentfulEntry<BlogPostFields>;

// Contentful Collection Response
export interface ContentfulCollection<T> {
  total: number;
  skip: number;
  limit: number;
  items: T[];
}
