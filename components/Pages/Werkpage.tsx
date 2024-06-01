'use client';

import Page from '@/components/Page';
import ExperienceBlock from '@/components/ContentBlocks/Experience';

const Werkpage = ({ allWorks }) => {
  return (
    <Page>
      <div className="mx-auto max-w-xl px-4">
        <div className="flex flex-col gap-8">
          {allWorks.map(item => (
            <ExperienceBlock
              key={item.id}
              functionTitle={item.role}
              location={item.location}
              startdate={item.startdate}
              enddate={item.enddate}
              title={item.title}
              text={item.description}
            />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Werkpage;
