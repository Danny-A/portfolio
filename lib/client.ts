import { GraphQLClient } from 'graphql-request';
export { gql } from 'graphql-request';

export const client = new GraphQLClient(process.env.API_URL as string, {
  headers: {
    authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  },
  fetch,
});
