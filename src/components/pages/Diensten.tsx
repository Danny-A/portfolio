import Link from 'next/link';

import Heading from '~/components/Heading';
import Layout from '~/components/Layout';
import Text from '~/components/Text';

const services = [
  {
    title: 'Freelance React & Next.js development',
    description:
      'Bouwen van snelle, toegankelijke webapplicaties. Van greenfield projecten tot het uitbreiden van bestaande projecten met React en Next.js.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Lead frontend development',
    description:
      'Technische leiding over frontend teams. Architectuurkeuzes, code reviews, standaarden opzetten en junior, medior en senior developers begeleiden.',
    tags: ['Team leadership', 'Architecture', 'Code review', 'Mentoring'],
  },
  {
    title: 'Design System development',
    description:
      'Opzetten of doorontwikkelen van component libraries en design systems. Van tokens en varianten tot documentatie en adoptie.',
    tags: ['Component libraries', 'Variants', 'Storybook', 'Tokens'],
  },
  {
    title: 'Codebase migratie & refactoring',
    description:
      'Snel gebouwde codebases omzetten naar onderhoudbare, schaalbare frontends. Van vibe-coded prototypes tot productie-waardige applicaties met de juiste structuur, typing en tooling.',
    tags: ['TypeScript', 'Refactoring', 'Code quality', 'Migration'],
  },
];

export default function DienstenPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-xl px-4">
        <div className="flex flex-col gap-8">
          <div className="shadow-elevation-high rounded-md bg-white p-8">
            <Heading as="h1" size="3xl">
              Diensten
            </Heading>
            <div className="mt-4">
              <Text>
                Ik ben een freelance lead front-end developer gevestigd in regio Utrecht. Ik bouw snelle, toegankelijke webapplicaties
                met React en Next.js, begeleid front-end teams en ontwikkel component libraries en design systems.
              </Text>
            </div>
          </div>

          {services.map(service => (
            <section key={service.title} className="shadow-elevation-high rounded-md bg-white p-8">
              <Heading as="h2" size="2xl">
                {service.title}
              </Heading>
              <Text className="mt-4">{service.description}</Text>              
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="rounded-sm bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          ))}

          <div className="shadow-elevation-high rounded-md bg-white p-8">
            <span>
              <Text color="secondary" size="sm">
                Beschikbaar voor
              </Text>
              <Text>Freelance opdrachten · Interim lead posities · Langlopende projecten</Text>
            </span>
            <div className="mt-6">
              <Link href="/contact" className="underline hover:text-gray-500">
                Plan een gesprek →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
