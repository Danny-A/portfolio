import Contactpage from '@/components/Pages/Contactpage';
import { contactpageQueryDocument } from '@/graphql/queries/contactpageQuery';

import { performRequest } from '@/lib/performRequest';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Danny Arntz',
};

async function getData() {
  try {
    const data = await performRequest({
      query: contactpageQueryDocument,
      revalidate: 300,
      visualEditingBaseUrl: '',
    });

    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw new Error('Failed to fetch data');
  }
}

export default async function Contact() {
  const { contact } = await getData();

  return <Contactpage contact={contact} />;
}
