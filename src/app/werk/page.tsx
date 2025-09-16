import { Metadata } from 'next';
import { toNextMetadata } from 'react-datocms/seo';

import WerkPage from '~/components/pages/Werk';
import { GetWorkDocument } from '~/graphql/generated';
import queryDatoCMS from '~/lib/datocms';

export async function generateMetadata(): Promise<Metadata> {
  const data = await queryDatoCMS(GetWorkDocument, {});
  return toNextMetadata(data.workNew?.seo ?? []);
}

export default async function Page() {
  const data = await queryDatoCMS(GetWorkDocument, {});

  return <WerkPage data={data} />;
}
