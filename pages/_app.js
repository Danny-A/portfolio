import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Front-end developer, Utrecht en Amsterdam - Danny Arntz</title>

        {/* -- Standard SEO -- */}

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="description" content="Senior Front-end developer uit Utrecht. JavaScript(ES6+), ReactJS, HTML en CSS ervaring. Focus op kwaliteit en breng projecten en teams naar een hoger niveau." />
        <meta name="generator" content="SEOmatic" />
        <link rel="alternate" href="https://www.dannyarntz.nl" hreflang="x-default" />
        <meta name="geo.placename" content="Danny Arntz" />

        {/* -- Dublin Core basic info -- */}

        <meta name="dcterms.Identifier" content="https://www.dannyarntz.nl" />
        <meta name="dcterms.Format" content="text/html" />
        <meta name="dcterms.Relation" content="Danny Arntz" />
        <meta name="dcterms.Language" content="en" />
        <meta name="dcterms.Publisher" content="Danny Arntz" />
        <meta name="dcterms.Type" content="text/html" />
        <meta name="dcterms.Coverage" content="https://www.dannyarntz.nl/" />
        <meta name="dcterms.Rights" content="Copyright &copy;2020 Danny Arntz." />
        <meta name="dcterms.Title" content="Front-end developer, Utrecht en Amsterdam" />
        <meta name="dcterms.Subject" content="" />
        <meta name="dcterms.Contributor" content="Danny Arntz" />
        <meta name="dcterms.Date" content="2020-11-01" />
        <meta name="dcterms.Description" content="Senior Front-end developer uit Utrecht. JavaScript(ES6+), ReactJS, HTML en CSS ervaring. Focus op kwaliteit en breng projecten en teams naar een hoger niveau." />

        {/* -- Facebook OpenGraph -- */}

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_us" />
        <meta property="og:url" content="https://www.dannyarntz.nl" />
        <meta property="og:title" content="Front-end developer, Utrecht en Amsterdam - Danny Arntz" />
        <meta property="og:description" content="Senior Front-end developer uit Utrecht. JavaScript(ES6+), ReactJS, HTML en CSS ervaring. Focus op kwaliteit en breng projecten en teams naar een hoger niveau." />
        {/* <meta property="og:image" content="https://www.dannyarntz.nl/images/share-image.png" /> */}
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
        {/* <meta name="twitter:image" content="https://www.dannyarntz.nl/images/share-image.png" /> */}
      </Head>
      <nav className="navigation" role="navigation">
        <Link href="/">
          About
        </Link>
        <Link href="/experience">
          Experience
        </Link>
        <Link href="/education">
          Education
        </Link>
      </nav>
      <Component {...pageProps} />
     </> 
  )
}

export default MyApp
