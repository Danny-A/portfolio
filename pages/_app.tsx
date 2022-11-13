import Head from 'next/head';
import Script from 'next/script';
import * as gtag from '../lib/gtag';

import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
  const metaTitle = 'Freelance front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz';
  const metaDescription = 'Freelance front-end developer met ruim 10 jaar ervaring in de digitale industrie.';

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <base href="/" />
        <title>{metaTitle}</title>

        {/* -- Standard SEO -- */}

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="description" content={metaTitle} />
        <link rel="alternate" href="/" hrefLang="x-default" />
        <meta name="geo.placename" content="Danny Arntz" />

        {/* -- Dublin Core basic info -- */}

        <meta name="dcterms.Identifier" content="/" />
        <meta name="dcterms.Format" content="text/html" />
        <meta name="dcterms.Relation" content="Danny Arntz" />
        <meta name="dcterms.Language" content="en" />
        <meta name="dcterms.Publisher" content="Danny Arntz" />
        <meta name="dcterms.Type" content="text/html" />
        <meta name="dcterms.Coverage" content="/" />
        <meta name="dcterms.Rights" content="Copyright &copy;2021 Danny Arntz." />
        <meta name="dcterms.Title" content={metaTitle} />
        <meta name="dcterms.Subject" content="" />
        <meta name="dcterms.Contributor" content="Danny Arntz" />
        <meta name="dcterms.Date" content="2020-11-01" />
        <meta name="dcterms.Description" content={metaDescription} />

        {/* -- Facebook OpenGraph -- */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_us" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/images/share/share-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Danny Arntz" />
        <meta property="og:see_also" content="https://twitter.com/wildestbunch" />
        <meta property="og:see_also" content="https://github.com/Danny-A" />

        {/* -- Twitter Card -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wildestbunch" />
        <meta name="twitter:creator" content="@wildestbunch" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="/images/share/share-image.png" />

        {/* -- For IE 11, Chrome, Firefox, Safari, Opera -- */}
        <link rel="icon" href="/images/favicon/favicon-16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/images/favicon/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/images/favicon/favicon-48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/images/favicon/favicon-62.png" sizes="62x62" type="image/png" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}');
          `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default App;
