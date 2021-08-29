import { useEffect } from "react";
import Head from 'next/head'
import { useRouter } from "next/router";
import * as gtag from '../lib/gtag'

import '../styles/globals.scss'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <base href="/" />
          <title>Front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz</title>

          {/* -- Standard SEO -- */}

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="description" content="Senior Front-end developer uit Utrecht. JavaScript(ES6+), ReactJS, HTML en CSS ervaring. Focus op kwaliteit en breng projecten en teams naar een hoger niveau." />
          <meta name="generator" content="SEOmatic" />
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
          <meta name="dcterms.Title" content="Front-end developer, Utrecht en Amsterdam" />
          <meta name="dcterms.Subject" content="" />
          <meta name="dcterms.Contributor" content="Danny Arntz" />
          <meta name="dcterms.Date" content="2020-11-01" />
          <meta name="dcterms.Description" content="Senior Front-end developer uit Utrecht. JavaScript(ES6+), ReactJS, HTML en CSS ervaring. Focus op kwaliteit en breng projecten en teams naar een hoger niveau." />

          {/* -- Facebook OpenGraph -- */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_us" />
          <meta property="og:url" content="/" />
          <meta property="og:title" content="Front-end developer, Utrecht en Amsterdam - Danny Arntz" />
          <meta property="og:description" content="Senior Front-end developer uit Utrecht. JavaScript(ES6+), ReactJS, HTML en CSS ervaring. Focus op kwaliteit en breng projecten en teams naar een hoger niveau." />
          <meta property="og:image" content="/images/share-image.png" />
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
          <meta name="twitter:title" content="Front-end developer, Utrecht en Amsterdam - Danny Arntz" />
          <meta name="twitter:description" content="Senior Front-end developer uit Utrecht. JavaScript(ES6+), ReactJS, HTML en CSS ervaring. Focus op kwaliteit en breng projecten en teams naar een hoger niveau." />
          <meta name="twitter:image" content="/images/share-image.png" />

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
