import Heading from '~/components/Heading';
import Layout from '~/components/Layout';
import Text from '~/components/Text';
import { GetHomeQuery } from '~/graphql/generated';
import { getParagraphs } from '~/utils/getParagraphs';

type Props = {
  data: GetHomeQuery;
};

export default function HomePage({ data }: Props) {
  const formattedIntroduction = getParagraphs(data?.home?.introduction);

  return (
    <Layout>
      <section className="mx-auto max-w-xl px-4">
        <div className="shadow-elevation-high flex flex-col gap-4 rounded-md bg-white p-8">
          {data?.home?.availability && (
            <div className="flex">
              <p className="rounded-sm bg-green-200 px-2 py-1 text-xs text-green-800">{data.home.availability}</p>
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
          {formattedIntroduction &&
            formattedIntroduction.map((paragraph, index) => (
              <Text key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}

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
                className="underline hover:text-gray-200"
                target="_blank"
                rel="noreferrer noopener">
                Download CV ↓
              </a>
            </Text>
          )}
        </div>
      </section>
    </Layout>
  );
}
