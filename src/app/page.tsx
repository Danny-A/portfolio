import { toNextMetadata } from 'react-datocms/seo';

import { GetHomeDocument } from '~/graphql/generated';
import queryDatoCMS from '~/lib/datocms';
import HomePage from '~/pages/HomePage';

export async function generateMetadata() {
  const data = await queryDatoCMS(GetHomeDocument, {});
  return toNextMetadata(data.home?.seo ?? []);
}

export default async function Page() {
  const data = await queryDatoCMS(GetHomeDocument, {});

  return <HomePage data={data} />;
}
