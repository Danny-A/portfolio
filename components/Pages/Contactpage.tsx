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
      <section>
        {contact?.introduction && (
          <Heading level="h1" size="text-3xl">
            {contact.introduction}
          </Heading>
        )}
        <div className="mt-4">
          {contact?.emailaddress && (
            <>
              <Text size="text-sm" color="text-gray-200">
                Kom in contact
              </Text>
              <Text>{contact.emailaddress}</Text>
            </>
          )}
        </div>
        <div className="mt-4">
          <Text size="text-sm" color="text-gray-200">
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
      </section>
    </Page>
  );
};

export default Contactpage;
