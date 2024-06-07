import Werkpage from '@/components/Pages/Werkpage';
import { workpageQueryDocument } from '@/graphql/queries/workpageQuery';
import { performRequest } from '@/lib/performRequest';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Werk - Danny Arntz',
};

async function getData() {
  try {
    const data = await performRequest({
      query: workpageQueryDocument,
      revalidate: 300,
      visualEditingBaseUrl: '',
    });

    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw new Error('Failed to fetch data');
  }
}

export default async function Werk() {
  const { allWorks } = await getData();

  return <Werkpage allWorks={allWorks} />;
}
