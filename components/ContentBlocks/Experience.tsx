import React from 'react';
import { format } from 'date-fns';
import Text from '@/components/Text';
import Heading from '@/components/Heading';

const ExperienceBlock = ({ functionTitle, location, startdate, enddate, title, text }) => {
  const formattedText = text.replace(/\n/g, '<br />');
  return (
    <section className="rounded-md bg-white p-8 shadow-elevation-high">
      <Heading as="h1" size="3xl">
        {title}
      </Heading>
      <Heading as="h2" size="xl" color="secondary">
        {functionTitle}
      </Heading>
      <div className="mt-4">
        <Text size="xs" color="secondary">
          {location}
        </Text>
        <Text size="sm">
          {format(new Date(startdate), 'MMMM yyyy')} - {enddate ? format(new Date(enddate), 'MMMM yyyy') : 'nu'}
        </Text>
      </div>

      <div className="mt-4">
        <Text dangerouslySetInnerHTML={{ __html: formattedText }} />
      </div>
    </section>
  );
};

export default ExperienceBlock;
