'use client';

import Page from '@/components/Page';
import { GetHomeQuery } from '@/generated/gql/graphql';
import * as gtag from '@/lib/gtag';
import Text from '@/components/Text';
import Heading from '@/components/Heading';

export default function Homepage({ home }: GetHomeQuery) {
  const handleEvent = e => {
    e.preventDefault();

    gtag.event({
      action: 'file_download',
      params: {
        file_extension: '.pdf',
        file_name: home?.cv?.filename,
        link_url: home?.cv?.url,
        link_text: 'Download CV',
      },
    });

    window.setTimeout(() => {
      window.location.href = home?.cv?.url ?? '';
    }, 50);
  };

  return (
    <Page>
      <section>
        <div className="flex flex-col gap-4">
          {home?.availability && (
            <div className="flex">
              <div className="rounded-sm bg-green-950 px-2 py-1 text-xs text-green-400">{home.availability}</div>
            </div>
          )}
          {home?.title && (
            <Heading level="h1" size="text-4xl">
              {home.title}
            </Heading>
          )}
          {home?.subtitle && (
            <Heading level="h2" size="text-2xl" color="text-primary-400">
              {home.subtitle}
            </Heading>
          )}
          {home?.introduction && <Text>{home.introduction}</Text>}
          {home?.currentStack && (
            <span>
              <Text color="text-gray-200" size="text-sm">
                Huidige stack:
              </Text>
              <Text>{home.currentStack}</Text>
            </span>
          )}

          {home?.cv?.url && (
            <Text>
              <a
                href={home.cv?.url}
                onClick={e => handleEvent(e)}
                className="underline hover:text-gray-200"
                target="_blank"
                rel="noreferrer">
                Download CV ↓
              </a>
            </Text>
          )}
        </div>
      </section>
    </Page>
  );
}
