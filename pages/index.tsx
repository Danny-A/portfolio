import Head from 'next/head';
import Page from '../components/Page';
import * as gtag from '../lib/gtag';

import { gql, useQuery } from '@apollo/client';

const query = gql`
  query getHome {
    home {
      currentStack
      introduction
      subtitle
      title
      availability
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(query);

  const handleEvent = e => {
    e.preventDefault();

    gtag.event({
      action: 'file_download',
      params: {
        file_extension: '.pdf',
        file_name: 'cv-danny-arntz.pdf',
        link_url: '/files/cv-danny-arntz.pdf',
        link_text: 'Download CV',
      },
    });

    window.setTimeout(() => {
      window.location.href = '/files/cv-danny-arntz.pdf';
    }, 50);
  };

  return (
    <>
      <Head>
        <title>Freelance front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz</title>
      </Head>
      <Page>
        <div className="section">
          <div className="grid">
            <div className="meta">
              <div className="available-container">
                <div className="available-tag">{data?.home.availability}</div>
              </div>
              <h1>{data?.home.title}</h1>
              <h2 className="color--secondary">{data?.home.subtitle}</h2>
              <h3 className="meta__title meta__title--secondary">Huidige stack:</h3>
              <p>{data?.home.currentStack}</p>
              <a href="/files/cv-danny-arntz.pdf" onClick={e => handleEvent(e)} target="_blank" rel="noreferrer">
                Download CV ↓
              </a>
            </div>

            <div className="text">
              <p>{data?.home.introduction}</p>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}
