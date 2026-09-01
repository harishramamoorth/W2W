import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default function MainLayout() {
  const { pathname, hash } = useLocation();

  // Scroll to top automatically on route changes
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, [pathname, hash]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8faf8', color: '#111827', fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <main style={{ flexGrow: 1, paddingTop: 80 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
