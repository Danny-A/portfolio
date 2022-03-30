import Head from 'next/head'
import Page from '../components/Page'
import * as gtag from '../lib/gtag'

const Contact = () => {
  const handleEvent = (e) => {
    e.preventDefault()

    gtag.event({
      action: 'file_download',
      file_extension: '.pdf',
      file_name: 'cv-danny-arntz.pdf',
      link_url: '/files/cv-danny-arntz.pdf',
      link_text: 'Download CV',
    });

    window.setTimeout(() => {
      window.location.href = '/files/cv-danny-arntz.pdf'
    }, 50)
  }
    return (
      <>
        <Head>
            <title>Contact - Freelance front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz</title>
        </Head>
        <Page>
          <div className="section">
            <div class="grid">
              <div class="meta">
                <h2 className="subtitle subtitle--secondary">Wil je graag met mij samenwerken of gewoon even kennismaken? Dan hoor ik graag van je!</h2>
                <h3 className="meta__title meta__title--secondary">
                  Kom in contact
                </h3>
                <p>
                  hi[at]dannyarntz.nl
                </p>
                <h3 className="meta__title meta__title--secondary">
                  Online
                </h3>
                <p>
                  <a href="https://www.linkedin.com/in/darntz/" target="_blank">LinkedIn</a><br/>
                  <a href="/files/cv-danny-arntz.pdf" onClick={(e) => handleEvent(e)}>
                    Download CV ↓
                  </a>
                </p>
              </div>
            </div>  
          </div>
        </Page>
      </>
    )
}

export default Contact
