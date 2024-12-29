import { useLoaderData } from '@remix-run/react';
import { toRemixMeta, useQuerySubscription } from 'react-datocms';
import Heading from '~/components/Heading';
import Layout from '~/components/Layout';
import Text from '~/components/Text';
import { performRequest } from '~/lib/datocms';
import * as gtag from '~/utils/gtags.client';
import { GetHomeDocument, GetHomeQuery } from '~/graphql/generated';

export const loader = async ({ request }: { request: Request }) => {
  // Get initial data for SSR
  const initialData = await performRequest<GetHomeQuery>({
    request,
    document: GetHomeDocument,
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
  return toRemixMeta(initialData.home.seo);
}

const Index = () => {
  const { initialData, datoQuerySubscription } = useLoaderData<{
    initialData: GetHomeQuery;
    datoQuerySubscription: any;
  }>();

  // Use useQuerySubscription with initial data for real-time updates
  const { data } = useQuerySubscription<GetHomeQuery>({
    ...datoQuerySubscription,
    initialData,
    enabled: true,
  });


  const formattedIntroduction = data?.home?.introduction
    ?.replace(/<p>/g, '')
    ?.split(/<\/p>|\n/)
    ?.filter(text => text.trim().length > 0)
    ?.map(text => text.trim());

  const handleCvDownload = (url?: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!url) return;

    gtag.event({
      action: 'download',
      category: 'home',
      label: 'download_cv',
    });
      
    requestAnimationFrame(() => {
      window.open(url, '_blank');
    });
  };

  return (
    <Layout>
      <section className="mx-auto max-w-xl px-4">
        <div className="flex flex-col gap-4 rounded-md bg-white p-8 shadow-elevation-high">
          {data?.home?.availability && (
            <div className="flex">
              <p className="rounded-sm bg-green-200 px-2 py-1 text-xs text-green-800">
                {data.home.availability}
              </p>
            </div>
          )}
          {data?.home?.title && (
            <Heading as="h1" size="3xl">
              {data.home.title}
            </Heading>
          )}
          {data?.home?.subtitle && (
            <Heading as="h2" size="2xl" color="secondary">
              {data.home.subtitle}
            </Heading>
          )}
          {formattedIntroduction && (
            formattedIntroduction.map((paragraph, index) => (
              <Text key={index}>
                {paragraph}
              </Text>
            ))        
          )}

          {data?.home?.currentStack && (
            <span>
              <Text color="secondary" size="sm">
                Huidige stack:
              </Text>
              <Text>{data.home.currentStack}</Text>
            </span>
          )}

          {data?.home?.cv?.url && (
            <Text>
              <a
                href={data.home.cv?.url}
                onClick={handleCvDownload(data.home.cv?.url)}
                className="underline hover:text-gray-200"
                target="_blank"
                rel="noreferrer"
              >
                Download CV ↓
              </a>
            </Text>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
