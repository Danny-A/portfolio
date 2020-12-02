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
        <base href="https://www.dannyarntz.nl/" />

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
        <meta property="og:image" content="https://www.dannyarntz.nl/images/share-image.png" />
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
        <meta name="twitter:image" content="https://www.dannyarntz.nl/images/share-image.png" />

        {/* -- For IE 11, Chrome, Firefox, Safari, Opera -- */}
        <link rel="icon" href="images/favicon/favicon-16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="images/favicon/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="images/favicon/favicon-48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="images/favicon/favicon-62.png" sizes="62x62" type="image/png" />

        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-6896893-6', 'auto');
        ga('send', 'pageview');
      </script>
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
