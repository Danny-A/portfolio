import Script from 'next/script';
import { LayoutProviders } from '@/components/LayoutProviders';
import * as gtag from '../lib/gtag';
import '@/styles/globals.css';

import localFont from 'next/font/local';

const moderat = localFont({
  src: [
    {
      path: '../fonts/Moderat-Regular.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Moderat-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-moderat',
});

export const revalidate = 300;

export default async function RootLayout({ children }) {
  const metaTitle = 'Freelance front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz';
  const metaDescription =
    'Senior front-end developer met 10+ jaar ervaring om jouw business of project tot een succes te brengen. Werk met TypeScript, React, NextJS, GraphQL, testing';

  return (
    <html lang="nl" className={`${moderat.variable}`}>
      <head>
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
        <meta name="dcterms.Rights" content="Copyright &copy;2024 Danny Arntz." />
        <meta name="dcterms.Title" content={metaTitle} />
        <meta name="dcterms.Subject" content="" />
        <meta name="dcterms.Contributor" content="Danny Arntz" />
        <meta name="dcterms.Date" content="2023-05-07" />
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
        <meta name="theme-color" content="#ffffff" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className="bg-zinc-50">
        <LayoutProviders>
          <main>{children}</main>
        </LayoutProviders>
      </body>
    </html>
  );
}
