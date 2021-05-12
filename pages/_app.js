import { useEffect } from "react";
import { useRouter } from "next/router";
import { Link } from 'next/link'
import '../styles/globals.scss'

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
        <div className="container">
          <nav className="navigation" role="navigation">
            <Link href="/">
              About
            </Link>
            <Link href="/experience">
              Experience
            </Link>
          </nav>
          <Component {...pageProps} />
        </div>
     </> 
  )
}

export default App
