import Contactpage from '@/components/Pages/Contactpage';
import { GetContactDocument } from '@/generated/gql/graphql';
import { client } from '@/lib/client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Danny Arntz',
};

async function getData() {
  const data = await client.request(GetContactDocument, {});

  return data;
}

export default async function Contact() {
  const { contact } = await getData();

  return <Contactpage contact={contact} />;
}
