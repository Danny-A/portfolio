import Head from 'next/head'
import Page from '../components/Page'
import * as gtag from '../lib/gtag'

export default function Home() {
  const handleEvent = (e) => {
    e.preventDefault()

    gtag.event({
      action: 'Download',
      category: 'CV',
      label: 'CV downloaded'
    });

    window.setTimeout(() => {
      window.location.href = '/files/cv-danny-arntz.pdf'
    }, 50)
  }

  return (
    <>
      <Head>
        <title>Freelance front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz</title>
      </Head>
      <Page>
        <div className="section">
          <div className="grid">
            <div className="meta">
              <h1>
                Danny Arntz
              </h1>
              <h2 className="color--secondary">
                Freelance front-end developer
              </h2>
              <h3 className="meta__title meta__title--secondary">Huidige stack:</h3>
              <p>
                ES6+, React (Native), Apollo, GraphQL, Swift
              </p>  
              <a href="/files/cv-danny-arntz.pdf" onClick={(e) => handleEvent(e)}>
                Resumé ↓
              </a>
            </div>

            <div className="text">
              <p>
                Hey! Ik ben Danny Arntz, een freelance front-end developer uit Utrecht.<br/>
                Met meer dan 10 jaar ervaring in de digitale industrie help ik grote en kleinere bedrijven in hun digitale transitie. Ik een expert in het leiden van development teams en het bouwen van applicaties voor web en app.<br/>
                <br/>
                Ik heb een sterke visuele focus, maar ben altijd geïnteresseerd in complexe uitdagingen.<br/>
              </p>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}
