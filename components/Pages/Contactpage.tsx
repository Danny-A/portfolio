'use client';

import Page from '@/components/Page';
import { GetContactQuery } from '@/generated/gql/graphql';
import * as gtag from '@/lib/gtag';

const Contactpage = ({ contact }: GetContactQuery) => {
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
      <div className="section">
        {contact?.introduction && <h2 className="subtitle subtitle--secondary">{contact.introduction}</h2>}
        {contact?.emailaddress && (
          <>
            <h3 className="meta__title meta__title--secondary">Kom in contact</h3>
            <p>{contact.emailaddress}</p>
          </>
        )}
        <h3 className="meta__title meta__title--secondary">Online</h3>
        <p>
          <a href="https://www.linkedin.com/in/darntz/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <br />
          {contact?.cv?.url && (
            <a href={contact.cv.url} onClick={e => handleEvent(e)} target="_blank" rel="noreferrer">
              Download CV ↓
            </a>
          )}
        </p>
      </div>
    </Page>
  );
};

export default Contactpage;
