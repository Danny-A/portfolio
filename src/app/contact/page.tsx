import { toNextMetadata } from 'react-datocms/seo';

import { GetContactDocument } from '~/graphql/generated';
import queryDatoCMS from '~/lib/datocms';
import ContactPage from '~/pages/Contact';

export async function generateMetadata() {
  const data = await queryDatoCMS(GetContactDocument, {});
  return toNextMetadata(data.contact?.seo ?? []);
}

export default async function Page() {
  const data = await queryDatoCMS(GetContactDocument, {});

  return <ContactPage data={data} />;
}
