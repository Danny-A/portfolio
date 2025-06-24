import localFont from 'next/font/local';
import Script from 'next/script';

import '~/app/globals.css';

const moderatRegular = localFont({ src: '../public/fonts/Moderat-Regular.woff2', variable: '--font-moderat-regular' });
const moderatMedium = localFont({ src: '../public/fonts/Moderat-Medium.woff2', variable: '--font-moderat-medium' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_TRACKING_ID}');
            `,
          }}
        />
      </head>
      <body className={`${moderatRegular.variable} ${moderatMedium.variable}`}>{children}</body>
    </html>
  );
}
