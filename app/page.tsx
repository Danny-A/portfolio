import Homepage from '@/components/Pages/Homepage';
import { homepageQueryDocument } from '@/graphql/queries/homepageQuery';
import { performRequest } from '@/lib/performRequest';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz',
};

async function getData() {
  const data = await performRequest({
    query: homepageQueryDocument,
    revalidate: 60,
    visualEditingBaseUrl: '',
  });

  return data;
}

export default async function Home() {
  const { home } = await getData();

  return <Homepage home={home} />;
}
