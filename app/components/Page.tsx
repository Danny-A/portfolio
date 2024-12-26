import Header from './Header';

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-lg px-4">
        <Header />
      </div>
      <div className="pb-28 pt-8">{children}</div>
    </>
  );
}
