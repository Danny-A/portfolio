
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className="navigation" role="navigation">
        <Link href="/">
          Danny Arntz
        </Link>
        <Link href="/experience">
          Experience
        </Link>
      </nav>
    </header>
  )
}
