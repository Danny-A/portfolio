import ExperienceBlock from '~/components/Experience';
import Heading from '~/components/Heading';
import Layout from '~/components/Layout';
import RichText from '~/components/RichText';
import type { WorkPageEntry, WorkItemEntry } from '~/types';

type Props = {
  workPageEntry: WorkPageEntry;
  workItemEntries: WorkItemEntry[];
};

export default function WerkPage({ workPageEntry, workItemEntries }: Props) {
  return (
    <Layout>
      <div className="mx-auto max-w-xl px-4">
        <div className="flex flex-col gap-8">
          {workPageEntry.fields.title && (
            <Heading as="h1" size="3xl">
              {workPageEntry.fields.title}
            </Heading>
          )}

          {workPageEntry.fields.description && (
            <div className="shadow-elevation-high rounded-md bg-white p-8">
              <RichText document={workPageEntry.fields.description} />
            </div>
          )}

          {workItemEntries.map(entry => (
            <ExperienceBlock
              key={entry.sys.id}
              role={entry.fields.role}
              location={entry.fields.location}
              startdate={entry.fields.startDate}
              enddate={entry.fields.endDate}
              title={entry.fields.title}
              description={entry.fields.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
