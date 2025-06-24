import ExperienceBlock from '~/components/Experience';
import Layout from '~/components/Layout';
import { GetWorkQuery } from '~/graphql/generated';

type Props = {
  data: GetWorkQuery;
};

export default function WerkPage({ data }: Props) {
  return (
    <Layout>
      <div className="mx-auto max-w-xl px-4">
        <div className="flex flex-col gap-8">
          {data?.workNew?.work?.map(item => (
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
}
