import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import { useEffect } from 'react';
import * as gtag from '~/utils/gtags.client';

import './tailwind.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Moderat-Regular.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Moderat-Medium.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preconnect',
      href: 'https://www.googletagmanager.com',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://www.googletagmanager.com',
    },
  ];
};

export const gaTrackingId = 'G-G9RW3D6T9K';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    gtag.pageview(location.pathname, gaTrackingId);
  }, [location]);

  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaTrackingId}');
                `,
              }}
            />
          </>
        
      </head>
      <body className="bg-zinc-50">   
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
