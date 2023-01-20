import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { API_URL, AUTH_TOKEN } from './constants';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
