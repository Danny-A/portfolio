import { format } from 'date-fns';
import Heading from './Heading';
import Text from './Text';

interface ExperienceBlockProps {
  role: string;
  location?: string | null;
  startdate: string;
  enddate?: string | null;
  title: string;
  description?: string | null;
}

const ExperienceBlock = ({
  role,
  location,
  startdate,
  enddate,
  title,
  description,
}: ExperienceBlockProps) => {
  const formattedText = description?.replace(/\n/g, '<br />');

  return (
    <section className="rounded-md bg-white p-8 shadow-elevation-high">
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
          {format(new Date(startdate), 'MMMM yyyy')} -{' '}
          {enddate ? format(new Date(enddate), 'MMMM yyyy') : 'nu'}
        </Text>
      </div>

      {formattedText && (
        <div className="mt-4">
          <Text dangerouslySetInnerHTML={{ __html: formattedText }} />
        </div>
      )}
    </section>
  );
};

export default ExperienceBlock;
