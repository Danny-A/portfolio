import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="navigation" role="navigation">
        <Link href="/" className={pathname == '/' ? 'is-active' : ''}>
          Home
        </Link>
        <Link href="/werk" className={pathname == '/werk' ? 'is-active' : ''}>
          Werk
        </Link>
        <Link href="/contact" className={pathname == '/contact' ? 'is-active' : ''}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
