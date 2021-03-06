import Page from '../components/Page'
import EducationBlock from '../components/ContentBlocks/Education'

const Education = () => {
  const educationData = [
    {
      functionTitle: 'Grafisch Lyceum',
      location: 'Utrecht',
      duration: '2006 - 2010',
      title: "Interactief Vormgeven",
    },
    {
      functionTitle: 'Comenius College',
      location: 'Hilversum',
      duration: '2001 - 2005',
      title: "MAVO",
    },
  ]

  return (
    <Page>
      <div className="section">
        <div className="intro">
          <h1 className="intro__title">
            Education
          </h1>
        </div>

        {educationData.map(item => (
          <EducationBlock key={item.title} functionTitle={item.functionTitle} location={item.location} duration={item.duration} title={item.title} text={item.text} />
        ))}
      </div>
    </Page>
  )
}

export default Education
