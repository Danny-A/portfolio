import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md">
        Skip to main content
      </a>
      <main id="main-content">
        <div className="mx-auto max-w-lg px-4">
          <Header />
        </div>
        <div className="pb-28 pt-8">{children}</div>
      </main>
    </>
  );
}
