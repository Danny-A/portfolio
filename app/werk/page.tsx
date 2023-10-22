import Werkpage from '@/components/Pages/Werkpage';
import { GetWorkDocument } from '@/generated/gql/graphql';
import { client } from '@/lib/client';

import { Metadata } from 'next';

export const revalidate = 3600; // revalidate the data at most every hour

export const metadata: Metadata = {
  title: 'Werk - Danny Arntz',
};

async function getData() {
  const data = await client.request(GetWorkDocument, {});

  return data;
}

export default async function Werk() {
  const { allWorks } = await getData();

  return <Werkpage allWorks={allWorks} />;
}
