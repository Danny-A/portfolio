import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="nl">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          {/* -- For IE 11, Chrome, Firefox, Safari, Opera -- */}
          <link rel="icon" href="/images/favicon/favicon-16.png" sizes="16x16" type="image/png" />
          <link rel="icon" href="/images/favicon/favicon-32.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="/images/favicon/favicon-48.png" sizes="48x48" type="image/png" />
          <link rel="icon" href="/images/favicon/favicon-62.png" sizes="62x62" type="image/png" />
          <link rel="icon" href="/favicon.ico" />

          <link rel="manifest" href="manifest.json" />
          <meta name="theme-color" content="#000000" />
          {/* -- Global site tag (gtag.js) - Google Analytics -- */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                  `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
