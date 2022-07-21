import Head from 'next/head';
import Page from '../components/Page';
import ExperienceBlock from '../components/ContentBlocks/Experience';

const Werk = () => {
  const experienceData = [
    {
      functionTitle: 'Freelance front-end developer',
      location: 'Remote',
      duration: 'November 2021 - nu',
      title: 'Eneco',
      text: 'Samen met een team verantwoordelijk voor de implementatie van de nieuwe multilabel (Eneco, Oxxio en WoonEnergie) en meertalige mijn-omgeving.',
    },
    {
      functionTitle: 'Software engineer',
      location: 'Remote',
      duration: 'Januari 2020 - November 2021',
      title: 'Adelee',
      text: 'Bij Adelee heb ik meegewerkt aan het ontwikkelen van tools om te helpen bij het ouderschap, iets wat voor mij heel dichtbij staat. Wat begon als een uitdaging in React Native met het bouwen van een instant messaging app, werd uiteindelijk een video messaging app in SwiftUI (iOS Native). Met de komst van personal media was ons team bezig een app te ontwikkelen om betekenisvolle communicatie met de mensen dicht om ons heen te maken. Ik was onderdeel van het product team en mede verantwoordelijk voor de bouw van functionaliteit in de app.',
    },
    {
      functionTitle: 'Senior Front-end developer',
      location: 'Rotterdam',
      duration: 'September 2016 - December 2019',
      title: 'Mangrove (later onderdeel van We are you.)',
      text: "Bij We are you. zorgde ik voor het waarborgen van de technische eisen waaraan een project moet voldoen om tot een succes te komen. Door de technische kansen en uitdagingen helder over te brengen in multidisciplinaire teams konden we gezamenlijk tot de beste oplossingen komen voor klanten als: Eneco, Unicef, StayOkay, DBF, Hartstichting, Operator Radio. Als lead front-end developer droeg ik verantwoordelijkheid voor het op tijd opleveren, opleveren wat er verwacht wordt door de klant en dat de kwaliteit op een niveau is waar we trots op zijn. Binnen We are you. droeg ik bij aan het overdragen van kennis. Niet alleen op het gebied van front-end, maar ook over onderwerpen die de verschillende disciplines raken, om zo de onderlinge samenwerking te verbeteren (bijvoorbeeld: 'Wat is de impact van een designkeuze op development?).",
    },
    {
      functionTitle: 'Junior - Medior Front-end developer',
      location: 'Amsterdam',
      duration: 'Januari 2012 - Augustus 2016',
      title: 'Bravoure',
      text: 'Als Front-end developer bij Bravoure heb ik gewerkt aan award winning websites zoals: Amsterdam Dance Event, CJP, Awakenings,Dekmantel Festival, Brunel. Daarnaast was ik verantwoordelijk voor alle e-mail marketing die Bravoure voor haar klanten deed. Ik bouwde de templates en verbeterde die continue om gebruik en impact te optimaliseren. Bij Bravoure ben ik in de loop der jaren onderdeel geweest van allerlei projecten; groot, klein, simpel maar ook hele complexe. Binnen die projecten werkte ik samen met het design- en back-end team en was ik verantwoordelijk voor de front-end van de website of applicatie. Ik heb altijd een duidelijk beeld van hoe iets kan of moet zijn en werkte samen met de designers aan een zo goed of mooi mogelijke oplossing. Ik werd steeds meer gedreven door oplossingen gebaseerd op feiten. Tracken van gebruikers events werd een vast onderdeel van het bouwtraject en zo verzamelde ik meer data over het gebruik van de website. Hiermee konden we samen met het team en de verzamelde data kijken naar optimalisaties voor conversie of performance. Gebruikerservaring (UX) is altijd een belangrijk aspect geweest. Gedurende de ontwikkeling van een project keek ik verder dan alleen het te bouwen onderdeel en daardoor kon ik in het hele proces sturen op de beste gebruikerservaring.',
    },
    {
      functionTitle: 'Front-end developer',
      location: 'Utrecht',
      duration: 'September 2010 - Januari 2012',
      title: 'Seventy Two',
      text: 'Met Seventy Two begon ik mijn eigen onderneming in het ontwerpen en bouwen van websites. Ik heb voor veel verschillende opdrachtgevers gewerkt, van kleine tot middelgrote projecten.',
    },
  ];
  return (
    <>
      <Head>
        <title>Werk - Freelance front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz</title>
      </Head>
      <Page>
        <div className="section">
          {experienceData.map(item => (
            <ExperienceBlock
              key={item.title}
              functionTitle={item.functionTitle}
              location={item.location}
              duration={item.duration}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </Page>
    </>
  );
};

export default Werk;
