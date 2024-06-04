import Werkpage from '@/components/Pages/Werkpage';
import { workpageQueryDocument } from '@/graphql/queries/workpageQuery';
import { performRequest } from '@/lib/performRequest';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Werk - Danny Arntz',
};

export const revalidate = 60;

async function getData() {
  const data = await performRequest({
    query: workpageQueryDocument,
    revalidate,
    visualEditingBaseUrl: '',
  });

  return data;
}

export default async function Werk() {
  const { allWorks } = await getData();

  return <Werkpage allWorks={allWorks} />;
}
