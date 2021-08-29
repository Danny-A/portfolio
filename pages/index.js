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
        <title>Front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz</title>
      </Head>
      <Page>
        <div className="section">
          <div className="grid">
            <div className="meta">
              <h2>
                Front-end developer
              </h2>
              <a href="/files/cv-danny-arntz.pdf" onClick={(e) => handleEvent(e)}>
                Resumé ↓
              </a>
            </div>
            <h1 className="title">
              Danny Arntz
            </h1>

            <p className="text">
              Hey! Ik ben Danny Arntz, een senior Front-end developer uit Utrecht. Sinds januari 2020 werk ik bij de start-up Adelee in Rotterdam. Als developer houd ik mij bezig met het ontwikkelen van snelle, slimme, gebruiksvriendelijke en mooie websites en web-applicaties. Dit doe ik door altijd op zoek te zijn naar nieuwe technieken om zo de prestaties van wat ik bouw optimaal te maken. Nieuwe technieken zijn erg leuk, maar ook voor gebruikers op oudere devices weet ik alles netjes en werkend te krijgen. Werken aan animaties en transities vind ik erg gaaf. Als creatieve Front-end developer denk ik dan ook graag mee in het proces.
              Wat ik belangrijk vind? Snelheid, kwaliteit, consistentie (van zowel code als visuele aspecten) en gebruiksgemak. De afgelopen jaren heb ik voor grote en kleine klanten en projecten gewerkt. Alles over meerdere devices, platforms en responsive. Hierdoor heb ik met allerlei technieken gewerkt, in een boel verschillende teams met eigen workflows. Ik werk snel, georganiseerd, consistent met BEM of andere methodes en weet tools als Webpack en Gulp goed in te zetten. Git, Gitflow en Scrummen zijn mij goed bekend. Waar ben ik goed in: JavaScript(ES6+), ReactJS, CSS3, HTML5, UX.
            </p>
          </div>
        </div>
      </Page>
    </>
  )
}
