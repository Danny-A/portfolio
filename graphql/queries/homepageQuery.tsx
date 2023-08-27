import { graphql } from '@/generated/gql';

export const homepageQueryDocument = graphql(`
  query getHome {
    home {
      currentStack
      introduction
      subtitle
      title
      availability
      cv {
        filename
        url
        id
      }
    }
  }
`);
