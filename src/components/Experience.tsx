import { Document } from '@contentful/rich-text-types';

import Heading from '~/components/Heading';
import RichText from '~/components/RichText';
import Text from '~/components/Text';
import { formatDate } from '~/utils/formatDate';

interface ExperienceBlockProps {
  role: string;
  location?: string | null;
  startdate: string;
  enddate?: string | null;
  title: string;
  description?: Document;
}

const ExperienceBlock = ({ role, location, startdate, enddate, title, description }: ExperienceBlockProps) => {
  const formattedStartDate = formatDate(startdate);
  const formattedEndDate = enddate ? formatDate(enddate) : 'Nu';

  return (
    <section className="shadow-elevation-high rounded-md bg-white p-8">
      <Heading as="h1" size="3xl">
        {title}
      </Heading>
      <Heading as="h2" size="xl" color="secondary">
        {role}
      </Heading>
      <div className="mt-4">
        {location && (
          <Text size="xs" color="secondary">
            {location}
          </Text>
        )}
        <Text size="sm">
          {formattedStartDate}
          {formattedStartDate && formattedEndDate && ' - '}
          {formattedEndDate}
        </Text>
      </div>

      {description && (
        <div className="mt-4">
          <RichText document={description} />
        </div>
      )}
    </section>
  );
};

export default ExperienceBlock;
