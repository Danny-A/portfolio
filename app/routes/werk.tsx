import { useLoaderData } from '@remix-run/react';
import { toRemixMeta, useQuerySubscription } from 'react-datocms';
import ExperienceBlock from '~/components/Experience';
import Layout from '~/components/Layout';
import { WorkNewDocument, WorkNewQuery } from '~/graphql/generated';
import { performRequest } from '~/lib/datocms';

export const loader = async ({ request }: { request: Request }) => {
  // Get initial data for SSR
  const initialData = await performRequest<WorkNewQuery>({
    request,
    document: WorkNewDocument,
  });

  // Return both the initial data and the request params
  return {
    initialData,
    datoQuerySubscription: {
      enabled: true,
      document: WorkNewDocument,
    },
  };
};

export function meta({ data: { initialData } }) {
  return toRemixMeta(initialData.workNew.seo);
}

const Work = () => {
  const { initialData, datoQuerySubscription } = useLoaderData<{
    initialData: WorkNewQuery;
    datoQuerySubscription: any;
  }>();

  // Use useQuerySubscription with initial data for real-time updates
  const { data } = useQuerySubscription<WorkNewQuery>({
    ...datoQuerySubscription,
    initialData,
    enabled: true,
  });

  return (
    <Layout>
      <div className="mx-auto max-w-xl px-4">
        <div className="flex flex-col gap-8">
          {data?.workNew?.work?.map((item) => (
            <ExperienceBlock
              key={item.id}
              role={item.role}
              location={item.location}
              startdate={item.startdate}
              enddate={item.enddate}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Work;
