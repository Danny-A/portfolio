'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '~/utils/tailwindmerge';

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="bg-navigation fixed bottom-6 left-1/2 z-10 flex h-16 -translate-x-1/2 rounded-lg backdrop-blur-lg"
      role="banner">
      <nav className="flex items-center gap-8 px-8" role="navigation" aria-label="Main navigation">
        <Link
          href="/"
          className={cn('hover:underline', {
            'text-secondary underline': pathname === '/',
            'text-primary': pathname !== '/',
          })}
          aria-current={pathname === '/' ? 'page' : undefined}>
          Home
        </Link>
        <Link
          href="/werk"
          className={cn('hover:underline', {
            'text-secondary underline': pathname === '/werk',
            'text-primary': pathname !== '/werk',
          })}
          aria-current={pathname === '/werk' ? 'page' : undefined}>
          Werk
        </Link>
        <Link
          href="/contact"
          className={cn('hover:underline', {
            'text-secondary underline': pathname === '/contact',
            'text-primary': pathname !== '/contact',
          })}
          aria-current={pathname === '/contact' ? 'page' : undefined}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
