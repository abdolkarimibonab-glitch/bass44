import { Outlet } from 'react-router-dom';
import TopBar from './TopBar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CartDrawer from './CartDrawer.jsx';
import { useStore } from '../context/StoreContext.jsx';
import { SITE } from '../data/site.js';

function Toast() {
  const { toast } = useStore();
  if (!toast) return null;
  return (
    <div className="toast" role="status" key={toast.id}>
      {toast.message}
    </div>
  );
}

// Organization structured data — registered once, on first layout mount.
let organizationDone = false;
function ensureOrganizationLd() {
  if (organizationDone) return;
  organizationDone = true;
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'ld-org';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'آتریا الکترونیک',
    alternateName: 'ATRYA ELECTRONIC',
    url: SITE.url,
    telephone: SITE.phone,
  });
  document.head.appendChild(script);
}

export default function Layout() {
  ensureOrganizationLd();
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
    </>
  );
}
