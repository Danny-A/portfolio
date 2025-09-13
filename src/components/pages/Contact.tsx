import Heading from '~/components/Heading';
import Layout from '~/components/Layout';
import Text from '~/components/Text';
import { GetContactQuery } from '~/graphql/generated';

type Props = {
  data: GetContactQuery;
};

export default function ContactPage({ data }: Props) {
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
                rel="noreferrer">
                LinkedIn
              </a>
            </Text>

            {data?.contact?.cv?.url && (
              <div className="mt-4">
                <Text>
                  <a
                    href={data?.contact?.cv?.url}
                    className="underline hover:text-gray-200"
                    target="_blank"
                    rel="noreferrer noopener">
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
}
