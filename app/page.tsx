import Homepage from '@/components/Pages/Homepage';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance front-end developer, Utrecht, Rotterdam en Amsterdam - Danny Arntz',
};

export default function Home() {
  return <Homepage />;
}
