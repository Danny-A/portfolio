import { graphql } from '@/generated/gql';

export const contactpageQueryDocument = graphql(`
  query getContact {
    contact {
      emailaddress
      introduction
      cv {
        filename
        url
        id
      }
    }
  }
`);
