import Contactpage from '@/components/Pages/Contactpage';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Danny Arntz',
};

export default function Contact() {
  return <Contactpage />;
}
