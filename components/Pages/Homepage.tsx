'use client';

import Page from '@/components/Page';
import { GetHomeQuery } from '@/generated/gql/graphql';
import * as gtag from '@/lib/gtag';

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
      <div className="section">
        <div className="meta">
          {home?.availability && (
            <div className="available-container">
              <div className="available-tag">{home.availability}</div>
            </div>
          )}
          {home?.title && <h1>{home.title}</h1>}
          {home?.subtitle && <h2 className="color--secondary">{home.subtitle}</h2>}
          {home?.currentStack && (
            <>
              <h3 className="meta__title meta__title--secondary">Huidige stack:</h3>
              <p>{home.currentStack}</p>
            </>
          )}

          {home?.cv?.url && (
            <a href={home.cv?.url} onClick={e => handleEvent(e)} target="_blank" rel="noreferrer">
              Download CV ↓
            </a>
          )}
        </div>
        {home?.introduction && (
          <div className="text">
            <p>{home.introduction}</p>
          </div>
        )}
      </div>
    </Page>
  );
}
