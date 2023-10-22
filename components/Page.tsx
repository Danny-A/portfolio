import Header from '@/components/Header';

export default function Page({ children }) {
  return (
    <div className="mx-auto max-w-lg px-4 pb-28 pt-8">
      <Header />
      {children}
    </div>
  );
}
