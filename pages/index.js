import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Danny Arntz: Front-end developer, Utrecht en Amsterdam</title>
        <meta name="description" content="Senior Front-end developer uit Utrecht. JavaScript(ES6+), ReactJS, HTML en CSS ervaring. Focus op kwaliteit en breng projecten en teams naar een hoger niveau." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="section">
          <div className="intro">
              <h2 className="intro__subtitle">
                  Front-end developer
              </h2>
              <h1 className="intro__title">
                  Danny Arntz
              </h1>

              <div className="intro__title--secondary">
                  Curriculum Vitae
              </div>

              <div className="seperator--yellow" />

              <div className="intro__body">
                  Hey! Ik ben Danny Arntz, een senior Front-end developer uit Utrecht. Sinds september 2016 werk ik bij Mangrove(onderdeel van WeAreYou) in Rotterdam.Als developer houd ik mij bezig met het ontwikkelen van snelle, slimme, gebruiksvriendelijke en mooie websites en web-applicaties. Dit doe ik door  altijd op zoek te zijn naar nieuwe technieken om zo de prestaties van wat ik bouw optimaal te maken. Nieuwe technieken zijn erg leuk, maar ook voor gebruikers op oudere devices weet ik alles netjes en werkend te krijgen.Werken aan animaties en transities vind ik erg gaaf. Als creatieve Front-end developer denk ik dan ook graag mee in het proces. 
                  Wat ik belangrijk vind? Snelheid, kwaliteit, consistentie(van zowel code als visuele aspecten) en gebruiksgemak.De afgelopen jaren heb ik voor grote en kleine klanten en projecten gewerkt. Alles over meerdere devices, platforms en responsive. Hierdoor heb ik met allerlei technieken gewerkt, in een boel verschillende teams met eigen workflows. Ik werk snel, georganiseerd, consistent met BEM of andere methodes en weet tools als Webpack en Gulp goed in te zetten. Git, Gitflow en Scrummen zijn mij goed bekend.Waar ben ik goed in: JavaScript(ES6+), ReactJS, CSS3, HTML5, UX.
              </div>
          </div>
      </div>
    </>
  )
}
