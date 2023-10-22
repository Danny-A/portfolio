import Homepage from '@/components/Pages/Homepage';
import { GetHomeDocument } from '@/generated/gql/graphql';
import { client } from '@/lib/client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz',
};

export const revalidate = 3600; // revalidate the data at most every hour

async function getData() {
  const data = await client.request(GetHomeDocument, {});

  return data;
}

export default async function Home() {
  const { home } = await getData();

  return <Homepage home={home} />;
}
