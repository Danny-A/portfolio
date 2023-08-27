import { graphql } from '@/generated/gql';

export const workpageQueryDocument = graphql(`
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
`);
