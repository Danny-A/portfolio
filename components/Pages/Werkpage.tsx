'use client';

import Page from '@/components/Page';
import ExperienceBlock from '@/components/ContentBlocks/Experience';
import { GetWorkQuery } from '@/generated/gql/graphql';

const Werkpage = ({ allWorks }: GetWorkQuery) => {
  return (
    <Page>
      <div className="section">
        {allWorks.map(item => (
          <ExperienceBlock
            key={item.title}
            functionTitle={item.role}
            location={item.location}
            startdate={item.startdate}
            enddate={item.enddate}
            title={item.title}
            text={item.description}
          />
        ))}
      </div>
    </Page>
  );
};

export default Werkpage;
