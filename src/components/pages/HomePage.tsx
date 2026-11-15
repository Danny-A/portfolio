import AvailabilityBadge from '~/components/AvailabilityBadge';
import Heading from '~/components/Heading';
import RichText from '~/components/RichText';
import Text from '~/components/Text';
import type { HomePageEntry, SiteSettingsEntry } from '~/types';

type Props = {
  entry: HomePageEntry;
  siteSettings: SiteSettingsEntry;
};

export default function HomePage({ entry, siteSettings }: Props) {
  const { fields } = entry;

  return (
    <section className="mx-auto max-w-xl px-4">
      <div className="flex flex-col gap-4 rounded-md bg-white p-8 shadow-elevation-high">
        {siteSettings.fields.availableFrom && <AvailabilityBadge availableFrom={siteSettings.fields.availableFrom} />}
        {fields.title && (
          <Heading as="h1" size="3xl">
            {fields.title}
          </Heading>
        )}
        {fields.subtitle && (
          <Heading as="h2" size="2xl" color="secondary">
            {fields.subtitle}
          </Heading>
        )}

        {fields.description && <RichText document={fields.description} />}

        {fields.stack && (
          <span>
            <Text color="secondary" size="sm">
              Huidige stack:
            </Text>
            <Text>{fields.stack}</Text>
          </span>
        )}

        {fields.workArea && (
          <span>
            <Text color="secondary" size="sm">
              Werkgebied:
            </Text>
            <Text>{fields.workArea}</Text>
          </span>
        )}

        {fields.availableFor && (
          <span>
            <Text color="secondary" size="sm">
              Beschikbaar voor:
            </Text>
            <Text>{fields.availableFor}</Text>
          </span>
        )}
      </div>
    </section>
  );
}
