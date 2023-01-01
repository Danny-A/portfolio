import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <nav className="navigation" role="navigation">
        <Link href="/" className={router.pathname == '/' ? 'is-active' : ''}>
          Home
        </Link>
        <Link href="/werk" className={router.pathname == '/werk' ? 'is-active' : ''}>
          Werk
        </Link>
        <Link href="/contact" className={router.pathname == '/contact' ? 'is-active' : ''}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
