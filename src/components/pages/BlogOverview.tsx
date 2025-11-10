import Link from 'next/link';

import Heading from '~/components/Heading';
import Layout from '~/components/Layout';
import RichText from '~/components/RichText';
import type { BlogOverviewEntry, BlogPostEntry } from '~/types';
import { formatDate } from '~/utils/formatDate';

type Props = {
  blogOverviewEntry: BlogOverviewEntry;
  blogPostEntries: BlogPostEntry[];
};

export default function BlogOverviewPage({ blogOverviewEntry, blogPostEntries }: Props) {
  return (
    <Layout>
      <div className="mx-auto max-w-xl px-4">
        <div className="flex flex-col gap-8">
          {blogOverviewEntry.fields.title && (
            <Heading as="h1" size="3xl">
              {blogOverviewEntry.fields.title}
            </Heading>
          )}

          {blogOverviewEntry.fields.description && (            
            <RichText document={blogOverviewEntry.fields.description} /> 
          )}

          <div className="flex flex-col gap-0 ">
            {blogPostEntries.map((entry, index) => (
              <div key={entry.sys.id}>
                <Link
                  href={`/artikelen/${entry.fields.slug}`}
                  className="block py-3 transition-colors hover:text-secondary">
                  <span className="flex items-baseline gap-2">
                    <span className="flex-1 font-medium pr-4">{entry.fields.title}</span>
                    <time className="text-sm text-gray-600">{formatDate(entry.fields.publishedDate, 'd/MM/yy')}</time>
                  </span>
                </Link>
                {index < blogPostEntries.length - 1 && <hr className="border-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

