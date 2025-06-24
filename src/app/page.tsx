import { toNextMetadata } from 'react-datocms/seo';

import HomePage from '~/components/pages/HomePage';
import { GetHomeDocument } from '~/graphql/generated';
import queryDatoCMS from '~/lib/datocms';

export async function generateMetadata() {
  const data = await queryDatoCMS(GetHomeDocument, {});
  return toNextMetadata(data.home?.seo ?? []);
}

export default async function Page() {
  const data = await queryDatoCMS(GetHomeDocument, {});

  return <HomePage data={data} />;
}
