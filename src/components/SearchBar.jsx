import { useMemo, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS, searchProducts } from '../data/products.js';
import { SearchIcon } from './Icons.jsx';
import { formatPrice } from '../utils/format.js';

export default function SearchBar({ onNavigate, autoFocus = false, className = '' }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const boxRef = useRef(null);

  const results = useMemo(() => searchProducts(PRODUCTS, query).slice(0, 6), [query]);

  useEffect(() => {
    const onClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const go = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
    setQuery('');
    onNavigate?.();
  };

  return (
    <div className={`searchbar ${className}`} ref={boxRef}>
      <form role="search" onSubmit={go}>
        <label className="sr-only" htmlFor="site-search">جستجوی محصولات</label>
        <SearchIcon size={18} className="searchbar-icon" />
        <input
          id="site-search"
          type="search"
          value={query}
          autoFocus={autoFocus}
          placeholder="جستجوی محصول… مثلاً 24 ولت"
          aria-label="جستجوی محصولات"
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
        />
      </form>
      {open && query.trim() && (
        <div className="searchbar-suggestions" role="listbox" aria-label="نتایج جستجو">
          {results.length === 0 && <div className="searchbar-empty">نتیجه‌ای یافت نشد</div>}
          {results.map((p) => (
            <button
              key={p.id}
              type="button"
              className="searchbar-item"
              onClick={() => {
                setOpen(false);
                navigate(`/product/${p.slug}`);
                setQuery('');
                onNavigate?.();
              }}
            >
              <img src={p.image} alt="" loading="lazy" />
              <span className="searchbar-item-name">{p.name}</span>
              <span className="searchbar-item-price">{formatPrice(p.salePrice ?? p.price)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
