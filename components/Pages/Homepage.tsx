'use client';

import Page from '@/components/Page';
import * as gtag from '@/lib/gtag';
import Text from '@/components/Text';
import Heading from '@/components/Heading';

export default function Homepage({ home }) {
  const formattedIntroduction = home?.introduction.replace(/\n/g, '<br />');

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
      <section className="mx-auto max-w-xl px-4">
        <div className="flex flex-col gap-4 rounded-md bg-white p-8 shadow-elevation-high">
          {home?.availability && (
            <div className="flex">
              <div className="rounded-sm bg-green-200 px-2 py-1 text-xs text-green-800">{home.availability}</div>
            </div>
          )}
          {home?.title && (
            <Heading as="h1" size="3xl">
              {home.title}
            </Heading>
          )}
          {home?.subtitle && (
            <Heading as="h2" size="2xl" color="secondary">
              {home.subtitle}
            </Heading>
          )}
          {home?.introduction && <Text dangerouslySetInnerHTML={{ __html: formattedIntroduction }} />}
          {home?.currentStack && (
            <span>
              <Text color="secondary" size="sm">
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
