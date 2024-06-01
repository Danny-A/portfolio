import Werkpage from '@/components/Pages/Werkpage';
import { workpageQueryDocument } from '@/graphql/queries/workpageQuery';
import { performRequest } from '@/lib/performRequest';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Werk - Danny Arntz',
};

async function getData() {
  const data = await performRequest({
    query: workpageQueryDocument,
    revalidate: 60,
    visualEditingBaseUrl: '',
  });

  return data;
}

export default async function Werk() {
  const { allWorks } = await getData();

  return <Werkpage allWorks={allWorks} />;
}
