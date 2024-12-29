import { useLoaderData } from '@remix-run/react';
import { toRemixMeta } from 'react-datocms';
import { useQuerySubscription } from 'react-datocms/use-query-subscription';
import Heading from '~/components/Heading';
import Layout from '~/components/Layout';
import Text from '~/components/Text';
import {
  GetHomeDocument,
  GetContactDocument,
  GetContactQuery,
} from '~/graphql/generated';
import { performRequest } from '~/lib/datocms';
import * as gtag from '~/utils/gtags.client';

export const loader = async ({ request }: { request: Request }) => {
  // Get initial data for SSR
  const initialData = await performRequest<GetContactQuery>({
    request,
    document: GetContactDocument,
  });

  // Return both the initial data and the request params
  return {
    initialData,
    datoQuerySubscription: {
      enabled: true,
      document: GetHomeDocument,
    },
  };
};

export function meta({ data: { initialData } }) {
  return toRemixMeta(initialData.contact.seo);
}

const Contact = () => {
  const { initialData, datoQuerySubscription } = useLoaderData<{
    initialData: GetContactQuery;
    datoQuerySubscription: any;
  }>();

  // Use useQuerySubscription with initial data for real-time updates
  const { data } = useQuerySubscription<GetContactQuery>({
    ...datoQuerySubscription,
    initialData,
    enabled: true,
  });

  const handleCvDownload = (url?: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!url) return;

    if (typeof window !== 'undefined') {
      gtag.event({
        action: 'download',
        category: 'contact',
        label: 'download_cv',
      });
        
      requestAnimationFrame(() => {
        window.open(url, '_blank');
      });
    }
  };

  return (
    <Layout>
      <section className="mx-auto max-w-xl px-4">
        <div className="shadow-elevation-high rounded-md bg-white p-8">
          <Heading as="h1" size="3xl">
            {data?.contact?.introduction}
          </Heading>

          <div className="mt-4">
            {data?.contact?.emailaddress && (
              <>
                <Text size="sm" color="secondary">
                  Kom in contact
                </Text>
                <Text>{data?.contact?.emailaddress}</Text>
              </>
            )}
          </div>
          <div className="mt-4">
            <Text size="sm" color="secondary">
              Online
            </Text>

            <Text>
              <a
                href="https://www.linkedin.com/in/darntz/"
                className="underline hover:text-gray-200"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Text>

            {data?.contact?.cv?.url && (
              <div className="mt-4">
                <Text>
                  <a
                    href={data?.contact?.cv?.url}
                    onClick={handleCvDownload(data?.contact?.cv?.url)}
                    className="underline hover:text-gray-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download CV ↓
                  </a>
                </Text>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
