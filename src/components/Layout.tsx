import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-lg px-4">
        <Header />
      </div>
      <div className="pt-8 pb-28">{children}</div>
    </main>
  );
}
