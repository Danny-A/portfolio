import Homepage from '@/components/Pages/Homepage';
import { homepageQueryDocument } from '@/graphql/queries/homepageQuery';
import { performRequest } from '@/lib/performRequest';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz',
  description:
    'Senior front-end developer met 10+ jaar ervaring om jouw business of project tot een succes te brengen. Werk met TypeScript, React, NextJS, GraphQL, testing',
};

async function getData() {
  try {
    const data = await performRequest({
      query: homepageQueryDocument,
      revalidate: 300,
      visualEditingBaseUrl: '',
    });

    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw new Error('Failed to fetch data');
  }
}

export default async function Home() {
  const { home } = await getData();

  return <Homepage home={home} />;
}
