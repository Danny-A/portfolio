import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed bottom-6 left-1/2 flex h-16 -translate-x-1/2 rounded-lg bg-[#000000]/50 backdrop-blur-md">
      <nav className="flex items-center gap-8 px-8" role="navigation">
        <Link
          href="/"
          className={`text-gray-100 hover:underline ${pathname == '/' ? 'text-primary-700 underline' : ''}`}>
          Home
        </Link>
        <Link
          href="/werk"
          className={`text-gray-100 hover:underline ${pathname == '/werk' ? 'text-primary-700 underline' : ''}`}>
          Werk
        </Link>
        <Link
          href="/contact"
          className={`text-gray-100  hover:underline ${pathname == '/contact' ? 'text-primary-700 underline' : ''}`}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
