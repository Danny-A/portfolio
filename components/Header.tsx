import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-navigation fixed bottom-6 left-1/2 z-10 flex h-16 -translate-x-1/2 rounded-lg backdrop-blur-lg">
      <nav className="flex items-center gap-8 px-8" role="navigation">
        <Link href="/" className={`hover:underline ${pathname == '/' ? 'text-secondary underline' : 'text-primary'}`}>
          Home
        </Link>
        <Link
          href="/werk"
          className={`hover:underline ${pathname == '/werk' ? 'text-secondary underline' : 'text-primary'}`}>
          Werk
        </Link>
        <Link
          href="/contact"
          className={`hover:underline ${pathname == '/contact' ? 'text-secondary underline' : 'text-primary'}`}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
