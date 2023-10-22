import React from 'react';
import { format } from 'date-fns';
import Text from '@/components/Text';
import Heading from '@/components/Heading';

const ExperienceBlock = ({ functionTitle, location, startdate, enddate, title, text }) => {
  return (
    <section>
      <Heading level="h1" size="text-3xl">
        {title}
      </Heading>
      <Heading level="h2" size="text-xl" color="text-primary-400">
        {functionTitle}
      </Heading>
      <div className="mt-4">
        <Text size="text-xs" color="text-gray-200">
          {location}
        </Text>
        <Text size="text-sm">
          {format(new Date(startdate), 'MMMM yyyy')} - {enddate ? format(new Date(enddate), 'MMMM yyyy') : 'nu'}
        </Text>
      </div>

      <div className="mt-4">
        <Text>{text}</Text>
      </div>
    </section>
  );
};

export default ExperienceBlock;
