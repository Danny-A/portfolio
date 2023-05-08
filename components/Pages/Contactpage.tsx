'use client';

import Page from '@/components/Page';
import * as gtag from '@/lib/gtag';

import { gql, useQuery } from '@apollo/client';

const query = gql`
  query getContact {
    contact {
      emailaddress
      introduction
      cv {
        filename
        url
        id
      }
    }
  }
`;

const Contactpage = () => {
  const { loading, error, data } = useQuery(query);

  const handleEvent = e => {
    e.preventDefault();

    gtag.event({
      action: 'file_download',
      params: {
        file_extension: '.pdf',
        file_name: data?.contact.cv.filename,
        link_url: data?.contact.cv.url,
        link_text: 'Download CV',
      },
    });

    window.setTimeout(() => {
      window.location.href = data?.contact.cv.url;
    }, 50);
  };
  return (
    <Page>
      <div className="section">
        <h2 className="subtitle subtitle--secondary">{data?.contact.introduction}</h2>
        {data?.contact.emailaddress && (
          <>
            <h3 className="meta__title meta__title--secondary">Kom in contact</h3>
            <p>{data?.contact.emailaddress}</p>
          </>
        )}
        <h3 className="meta__title meta__title--secondary">Online</h3>
        <p>
          <a href="https://www.linkedin.com/in/darntz/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <br />
          {data?.contact.cv.url && (
            <a href={data?.contact.cv.url} onClick={e => handleEvent(e)} target="_blank" rel="noreferrer">
              Download CV ↓
            </a>
          )}
        </p>
      </div>
    </Page>
  );
};

export default Contactpage;
