'use client';

import React from 'react';
import client from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

export const LayoutProviders = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
