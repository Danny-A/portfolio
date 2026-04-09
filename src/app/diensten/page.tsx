import { Metadata } from 'next';

import DienstenPageComponent from '~/components/pages/Diensten';

export const metadata: Metadata = {
  title: 'Diensten | Danny Arntz',
  description:
    'Freelance React & Next.js development, lead front-end development en design system development in Nederland.',
};

export default function Page() {
  return <DienstenPageComponent />;
}
