import { toNextMetadata } from 'react-datocms/seo';

import { GetWorkDocument } from '~/graphql/generated';
import queryDatoCMS from '~/lib/datocms';
import WerkPage from '~/pages/Werk';

export async function generateMetadata() {
  const data = await queryDatoCMS(GetWorkDocument, {});
  return toNextMetadata(data.workNew?.seo ?? []);
}

export default async function Page() {
  const data = await queryDatoCMS(GetWorkDocument, {});

  return <WerkPage data={data} />;
}
