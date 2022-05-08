

import Header from './Header';

export default function Page({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  )
}
