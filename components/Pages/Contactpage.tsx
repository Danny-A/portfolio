'use client';

import Page from '@/components/Page';
import * as gtag from '@/lib/gtag';
import Text from '@/components/Text';
import Heading from '@/components/Heading';

const Contactpage = ({ contact }) => {
  const handleEvent = e => {
    e.preventDefault();

    gtag.event({
      action: 'file_download',
      params: {
        file_extension: '.pdf',
        file_name: contact?.cv?.filename,
        link_url: contact?.cv?.url,
        link_text: 'Download CV',
      },
    });

    window.setTimeout(() => {
      window.location.href = contact?.cv?.url ?? '';
    }, 50);
  };

  return (
    <Page>
      <section className="mx-auto max-w-xl px-4">
        <div className="shadow-elevation-high rounded-md bg-white p-8">
          {contact?.introduction && (
            <Heading as="h1" size="3xl">
              {contact.introduction}
            </Heading>
          )}
          <div className="mt-4">
            {contact?.emailaddress && (
              <>
                <Text size="sm" color="secondary">
                  Kom in contact
                </Text>
                <Text>{contact.emailaddress}</Text>
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

            {contact?.cv?.url && (
              <div className="mt-4">
                <Text>
                  <a
                    href={contact.cv.url}
                    onClick={e => handleEvent(e)}
                    className="underline hover:text-gray-200"
                    target="_blank"
                    rel="noreferrer">
                    Download CV ↓
                  </a>
                </Text>
              </div>
            )}
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Contactpage;
