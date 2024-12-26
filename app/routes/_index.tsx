import { useLoaderData } from '@remix-run/react';
import { toRemixMeta, useQuerySubscription } from 'react-datocms';
import Heading from '~/components/Heading';
import Page from '~/components/Page';
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

  const formattedIntroduction = data?.home?.introduction?.replace(
    /\n/g,
    '<br />'
  );

  const handleEvent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    gtag.event({
      action: 'download',
      category: 'home',
      label: 'download_cv',
    });

    // Small delay to ensure the event fires before navigation
    setTimeout(() => {
      window.open(data?.home?.cv?.url, '_blank');
    }, 100);
  };

  return (
    <Page>
      <section className="mx-auto max-w-xl px-4">
        <div className="flex flex-col gap-4 rounded-md bg-white p-8 shadow-elevation-high">
          {data?.home?.availability && (
            <div className="flex">
              <div className="rounded-sm bg-green-200 px-2 py-1 text-xs text-green-800">
                {data.home.availability}
              </div>
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
            <Text
              dangerouslySetInnerHTML={{
                __html: formattedIntroduction,
              }}
            />
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
                onClick={(e) => handleEvent(e)}
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
    </Page>
  );
};

export default Index;
