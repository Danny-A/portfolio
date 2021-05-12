
import Link from 'next/link'

export default function Header() {
  return (
    <header>
        <nav className="navigation" role="navigation">
        <Link href="/">
            About
        </Link>
        <Link href="/experience">
            Experience
        </Link>
        </nav>
    </header>
  )
}
