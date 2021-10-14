
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header>
      <nav className="navigation" role="navigation">
        <Link href="/">
          <a className={router.pathname == '/' ? "is-active" : ""}>
            Home
          </a>
        </Link>
        <Link href="/werk">
          <a className={router.pathname == '/werk' ? "is-active" : ""}>
            Werk
          </a>
        </Link>
        <Link href="/contact">
          <a className={router.pathname == '/contact' ? "is-active" : ""}>
            Contact
          </a>
        </Link>
      </nav>
    </header>
  )
}
