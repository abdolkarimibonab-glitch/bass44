import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { SITE, NAV_LINKS, CATEGORIES } from '../data/site.js';
import { useStore } from '../context/StoreContext.jsx';
import SearchBar from './SearchBar.jsx';
import {
  CartIcon, HeartIcon, MenuIcon, CloseIcon, ChevronDown, PhoneIcon, SearchIcon,
} from './Icons.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { cartCount, wishlist, setCartOpen } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="header-logo" aria-label={`${SITE.name} — صفحه اصلی`}>
          <img src="/images/logo.svg" alt={SITE.nameEn} width="176" height="46" />
        </Link>

        <nav className="header-nav" aria-label="منوی اصلی">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label} className={link.dropdown ? 'nav-dropdown' : ''}>
                {link.dropdown ? (
                  <div
                    className="nav-dropdown-wrap"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <NavLink to={link.to} className={() => 'nav-link'}>
                      {link.label}
                      <ChevronDown size={14} />
                    </NavLink>
                    <div className={`nav-dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                      {CATEGORIES.filter((c) => c.key !== 'all').map((c) => (
                        <Link key={c.key} to={`/shop?cat=${c.key}`}>{c.label}</Link>
                      ))}
                      <Link to="/shop" className="nav-dropdown-all">همه محصولات</Link>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="header-icon-btn header-search-toggle"
            aria-label="باز کردن جستجو"
            onClick={() => setMobileSearch((v) => !v)}
          >
            <SearchIcon />
          </button>
          <Link to="/wishlist" className="header-icon-btn" aria-label={`علاقه‌مندی‌ها (${wishlist.length} محصول)`}>
            <HeartIcon />
            {wishlist.length > 0 && <span className="header-badge">{wishlist.length.toLocaleString('fa-IR')}</span>}
          </Link>
          <button
            type="button"
            className="header-icon-btn"
            aria-label={`سبد خرید (${cartCount} کالا)`}
            onClick={() => setCartOpen(true)}
          >
            <CartIcon />
            {cartCount > 0 && <span className="header-badge">{cartCount.toLocaleString('fa-IR')}</span>}
          </button>
          <button
            type="button"
            className="header-icon-btn header-menu-toggle"
            aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`header-search-mobile ${mobileSearch ? 'open' : ''}`}>
        <div className="container">
          <SearchBar autoFocus onNavigate={() => setMobileSearch(false)} />
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="منوی موبایل">
          <div className="container mobile-menu-inner">
            <nav aria-label="منوی موبایل">
              <ul className="mobile-menu-links">
                {NAV_LINKS.filter((l) => !l.dropdown).map((link) => (
                  <li key={link.label}><Link to={link.to} onClick={closeMenu}>{link.label}</Link></li>
                ))}
              </ul>
            </nav>
            <div className="mobile-menu-cats">
              <span className="mobile-menu-title">دسته‌بندی محصولات</span>
              <div className="mobile-menu-cats-grid">
                {CATEGORIES.filter((c) => c.key !== 'all').map((c) => (
                  <Link key={c.key} to={`/shop?cat=${c.key}`} onClick={closeMenu}>{c.label}</Link>
                ))}
              </div>
            </div>
            <a href={`tel:${SITE.phone}`} className="mobile-menu-phone" onClick={closeMenu}>
              <PhoneIcon size={18} />
              <span dir="ltr">{SITE.phone}</span>
            </a>
          </div>
        </div>
      )}
      {menuOpen && <div className="mobile-menu-overlay" onClick={closeMenu} aria-hidden="true" />}
    </header>
  );
}
