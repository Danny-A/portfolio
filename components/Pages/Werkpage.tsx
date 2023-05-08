'use client';

import Page from '@/components/Page';
import ExperienceBlock from '@/components/ContentBlocks/Experience';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query getWork {
    allWorks(orderBy: startdate_DESC) {
      id
      title
      location
      role
      startdate
      enddate
      description
    }
  }
`;

const Werkpage = () => {
  const { loading, error, data } = useQuery(query);

  return (
    <Page>
      <div className="section">
        {data?.allWorks.map(item => (
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
