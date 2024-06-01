import Contactpage from '@/components/Pages/Contactpage';
import { contactpageQueryDocument } from '@/graphql/queries/contactpageQuery';

import { performRequest } from '@/lib/performRequest';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Danny Arntz',
};

async function getData() {
  const data = await performRequest({
    query: contactpageQueryDocument,
    revalidate: 60,
    visualEditingBaseUrl: '',
  });

  return data;
}

export default async function Contact() {
  const { contact } = await getData();

  return <Contactpage contact={contact} />;
}
