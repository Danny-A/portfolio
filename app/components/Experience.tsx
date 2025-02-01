import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
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

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  // Just ensure consistent formatting with explicit locale
  return isNaN(date.getTime()) 
    ? '' 
    : format(date, 'MMMM yyyy', {
        locale: nl,
      });
};

const ExperienceBlock = ({
  role,
  location,
  startdate,
  enddate,
  title,
  description,
}: ExperienceBlockProps) => {
  const paragraphs = description
    ?.replace(/<p>/g, '')
    ?.split(/<\/p>|\n/)
    ?.filter(text => text.trim().length > 0)
    ?.map(text => text.trim());

  const formattedStartDate = formatDate(startdate);
  const formattedEndDate = enddate ? formatDate(enddate) : 'Nu';

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
          {formattedStartDate}
          {formattedStartDate && formattedEndDate && ' - '}
          {formattedEndDate}
        </Text>
      </div>

      {paragraphs && (
        <div className="mt-4">
          {paragraphs.map((paragraph, index) => (
            <Text key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      )}
    </section>
  );  
};

export default ExperienceBlock;
