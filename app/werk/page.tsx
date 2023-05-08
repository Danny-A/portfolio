import Werkpage from '@/components/Pages/Werkpage';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Werk - Danny Arntz',
};

export default function Werk() {
  return <Werkpage />;
}
