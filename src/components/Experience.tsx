import Heading from '~/components/Heading';
import Text from '~/components/Text';
import { formatDate } from '~/utils/formatDate';
import { getParagraphs } from '~/utils/getParagraphs';

interface ExperienceBlockProps {
  role: string;
  location?: string | null;
  startdate: string;
  enddate?: string | null;
  title: string;
  description?: string | null;
}

const ExperienceBlock = ({ role, location, startdate, enddate, title, description }: ExperienceBlockProps) => {
  const paragraphs = getParagraphs(description);

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
