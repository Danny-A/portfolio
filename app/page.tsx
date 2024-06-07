import Homepage from '@/components/Pages/Homepage';
import { homepageQueryDocument } from '@/graphql/queries/homepageQuery';
import { performRequest } from '@/lib/performRequest';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz',
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
