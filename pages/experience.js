import { Head } from 'next/head'
import Page from '../components/Page'
import ExperienceBlock from '../components/ContentBlocks/Experience'

const Experience = () => {
    const experienceData = [
      {
        functionTitle: 'Software engineer',
        location: 'Remote',
        duration: 'January 2020 - Present',
        title: "Adelee",
        text: "Adelee is voor mij een nieuwe uitdaging, en niet enkel een technische. Bij Adelee ontwikkelen we tools om te helpen bij het ouderschap, iets wat voor mij heel dichtbij staat. Wat begon als een uitdaging in React Native, werd bij deze start-up (zoals je kan verwachten) het roer omgegooid en zijn we als team overgestapt om de app in Swift te ontwikkelen.",
      },
      {
        functionTitle: 'Senior Front-end developer',
        location: 'Rotterdam',
        duration: 'September 2016 - December 2019',
        title: "Mangrove (onderdeel van We are you.)",
        text: "Bij Mangrove ben ik me onder andere ook bezig gaan houden met de technische eisen waaraan een project moet voldoen om tot een succes te komen. Daarnaast begeleid ik andere afdelingen met mijn technische kennis om mee te denken aan oplossingen voor klanten als: Eneco, Unicef, StayOkay, DBF, Hartstichting, Operator Radio. Als lead front-end developer ben ik verantwoordelijk er voor te zorgen dat we op tijd opleveren, dat we opleveren wat er verwacht wordt door onze klanten en dat de kwaliteit op een niveau is waar we trots op zijn. Ik geloof dat je leert door dingen te doen met hier en daar een duw in de juiste richting. Ik zit regelmatig met een team om de beste opties te onderzoeken. Bij het oplossen van een uitdaging leg ik uit wat het probleem was en hoe we deze in de toekomst kunnen voorkomen. Het delen van kennis door deze te presenteren doe ik ook, dit doe ik niet alleen op het gebied van front-end, maar ook over de samenwerking tussen de verschillende afdelingen. Bijvoorbeeld: 'Hoe een design keuze impact heeft op development'. Ik probeer me op zoveel mogelijk vlakken te bevinden om een optimale samenwerking te bevorderen.",
      },
      {
        functionTitle: 'Junior - Medior Front-end developer',
        location: 'Amsterdam',
        duration: 'January 2012 - August 2016',
        title: "Bravoure",
        text: "Als Front-end developer bij Bravoure heb ik gewerkt aan award winning websites zoals: Amsterdam Dance Event, CJP, Awakenings,Dekmantel Festival, Brunel. Daarnaast was ik verantwoordelijk voor alle e-mail marketing die wij voor onze klanten deden. Ik bouwde de templates en verbeterde die continue om gebruik en impact hiervan te optimaliseren. Bij Bravoure ben ik in de loop der jaren onderdeel geweest van allerlei projecten, groot, klein, simpel maar ook hele complexe. Binnen die projecten werkte ik samen met het design en back-end team en was ik verantwoordelijk voor de front-end van de website of applicatie. Ik heb altijd een duidelijk beeld van hoe iets kan of moet zijn en werkte samen met de designers aan een zo goed of mooi mogelijke oplossing. Ik werd steeds meer gedreven door oplossingen gebaseerd op feiten. Tracken van gebruikers events werd een vast onderdeel van het bouwtraject en zo verzamelde ik meer data over het gebruik van de website. Hiermee konden we samen met het team en de verzamelde data kijken naar optimalisaties voor conversie of performance. \r\rGebruikerservaring(UX) is altijd een belangrijk aspect geweest. Gedurende de ontwikkeling van een project keek ik verder dan alleen het te bouwen onderdeel en daardoor kon ik in het hele proces sturen op de beste ervaring.",
      },
      {
        functionTitle: 'Front-end developer',
        location: 'Utrecht',
        duration: 'September 2010 - January 2012',
        title: "Seventy Two",
        text: "Als Seventy Two begon ik mijn eigen online identiteit in het ontwerpen en bouwen van websites. Ik heb voor veel verschillende opdrachtgevers gewerkt, van kleine tot middelgrote projecten. * Identiteit * Design en development van websites en e-commerce * Adviseren klanten",
      }
    ]
    return (
      <>
        <Head>
          <title>Experience - Front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz</title>
        </Head>
        <Page>
          <div className="section">          
          {experienceData.map(item => (
            <ExperienceBlock key={item.title} functionTitle={item.functionTitle} location={item.location} duration={item.duration} title={item.title} text={item.text} />
          ))}
          </div>
        </Page>
      </>
    )
}

export default Experience
