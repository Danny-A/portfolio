import Heading from '~/components/Heading';
import Layout from '~/components/Layout';
import Text from '~/components/Text';
import { getAssetUrl } from '~/lib/contentful/contentful';
import type { ContactPageEntry } from '~/types';

import CalEmbed from '../CalEmbed';
import RichText from '../RichText';

type Props = {
  entry: ContactPageEntry;
};

export default function ContactPage({ entry }: Props) {
  const { fields } = entry;

  return (
    <Layout>
      <section className="mx-auto max-w-xl px-4">
        <div className="shadow-elevation-high rounded-md bg-white p-8">
          <Heading as="h1" size="3xl">
            {fields.description && <RichText document={fields.description} />}
          </Heading>

          <div className="mt-4">
            {fields.emailAddress && (
              <>
                <Text size="sm" color="secondary">
                  Kom in contact
                </Text>
                <Text>{fields.emailAddress}</Text>
              </>
            )}
          </div>
          <div className="mt-8">
            <Text size="sm" color="secondary">
              Plan een gesprek
            </Text>
            <div className="mt-2">
              <CalEmbed />
            </div>
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

            {fields.cv && (
              <div className="mt-4">
                <Text>
                  <a
                    href={getAssetUrl(fields.cv)}
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
