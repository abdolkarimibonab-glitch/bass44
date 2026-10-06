import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { PRODUCTS, searchProducts } from '../data/products.js';
import { VOLTS, AMPS, TYPES, SORT_OPTIONS, CATEGORY_LABELS } from '../data/site.js';
import { useSEO } from '../utils/seo.js';
import { faNumber } from '../utils/format.js';

function toggleIn(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export default function ShopPage() {
  const [params, setParams] = useSearchParams();
  useSEO({
    title: 'فروشگاه | آتریا الکترونیک',
    description: 'خرید انواع پاور سوئیچینگ صنعتی، اسلیم، فن‌دار و ضد آب 12 ولت و 24 ولت، آداپتور و محصولات LED با فیلتر پیشرفته از فروشگاه آتریا الکترونیک.',
    path: '/shop',
  });

  const q = params.get('q') || '';
  const cat = params.get('cat') || 'all';
  const brand = params.get('brand') || '';
  const sort = params.get('sort') || 'newest';
  const volts = params.getAll('volt');
  const amps = params.getAll('amp');
  const types = params.getAll('type');
  const stock = params.get('stock') || '';
  const min = params.get('min') || '';
  const max = params.get('max') || '';

  const update = (fn) => setParams((prev) => {
    const next = new URLSearchParams(prev);
    fn(next);
    return next;
  }, { replace: true });

  const setParam = (key, value) => update((next) => {
    if (value === '' || value === null) next.delete(key);
    else next.set(key, value);
  });
  const toggleParam = (key, value) => update((next) => {
    const list = next.getAll(key);
    next.delete(key);
    const nextList = toggleIn(list, value);
    nextList.forEach((v) => next.append(key, v));
  });
  const clearAll = () => setParams({}, { replace: true });

  const results = useMemo(() => {
    let list = PRODUCTS;
    if (q) list = searchProducts(list, q);
    if (cat !== 'all') list = list.filter((p) => p.categories.includes(cat) || p.type === cat);
    if (brand) list = list.filter((p) => p.brand === brand);
    if (volts.length) list = list.filter((p) => p.voltage && volts.includes(String(p.voltage)));
    if (amps.length) list = list.filter((p) => p.current && amps.includes(String(p.current)));
    if (types.length) list = list.filter((p) => types.includes(p.type));
    if (stock === 'in') list = list.filter((p) => p.inStock);
    if (stock === 'out') list = list.filter((p) => !p.inStock);
    if (min) list = list.filter((p) => (p.salePrice ?? p.price) >= Number(min));
    if (max) list = list.filter((p) => (p.salePrice ?? p.price) <= Number(max));
    const sorted = [...list];
    if (sort === 'cheap') sorted.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
    else if (sort === 'expensive') sorted.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
    else if (sort === 'popular') sorted.sort((a, b) => b.popularity - a.popularity);
    else sorted.sort((a, b) => b.id.localeCompare(a.id));
    return sorted;
  }, [q, cat, brand, sort, volts, amps, types, stock, min, max]);

  const activeFilters = [
    q && { key: 'q', label: `جستجو: ${q}` },
    cat !== 'all' && { key: 'cat', label: CATEGORY_LABELS[cat] || cat },
    brand && { key: 'brand', label: `برند: ${brand}` },
    stock && { key: 'stock', label: stock === 'in' ? 'موجود' : 'ناموجود' },
    ...volts.map((v) => ({ key: 'volt', value: v, label: `${v} ولت` })),
    ...amps.map((a) => ({ key: 'amp', value: a, label: `${a} آمپر` })),
    ...types.map((t) => ({ key: 'type', value: t, label: TYPES.find((x) => x.key === t)?.label || t })),
  ].filter(Boolean);

  const removeFilter = (f) => {
    if (f.key === 'volt' || f.key === 'amp' || f.key === 'type') toggleParam(f.key, String(f.value));
    else if (f.key === 'q') setParam('q', '');
    else if (f.key === 'cat') setParam('cat', 'all');
    else setParam(f.key, '');
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'فروشگاه' }]} />
          <h1>فروشگاه آتریا الکترونیک</h1>
          <p>انتخاب از میان {faNumber(PRODUCTS.length)} محصول تخصصی منابع تغذیه و تجهیزات الکترونیکی</p>
          <SearchBar className="shop-search" />
        </div>
      </div>

      <div className="container shop-layout">
        <aside className="shop-filters" aria-label="فیلتر محصولات">
          <details className="filter-group" open>
            <summary>ولتاژ</summary>
            <div className="filter-options">
              {VOLTS.map((v) => (
                <label key={v} className="filter-check">
                  <input type="checkbox" checked={volts.includes(String(v))} onChange={() => toggleParam('volt', String(v))} />
                  <span>{v} ولت</span>
                </label>
              ))}
            </div>
          </details>
          <details className="filter-group" open>
            <summary>جریان (آمپر)</summary>
            <div className="filter-options">
              {AMPS.map((a) => (
                <label key={a} className="filter-check">
                  <input type="checkbox" checked={amps.includes(String(a))} onChange={() => toggleParam('amp', String(a))} />
                  <span>{a} آمپر</span>
                </label>
              ))}
            </div>
          </details>
          <details className="filter-group" open>
            <summary>نوع محصول</summary>
            <div className="filter-options">
              {TYPES.map((t) => (
                <label key={t.key} className="filter-check">
                  <input type="checkbox" checked={types.includes(t.key)} onChange={() => toggleParam('type', t.key)} />
                  <span>{t.label}</span>
                </label>
              ))}
            </div>
          </details>
          <details className="filter-group" open>
            <summary>برند</summary>
            <div className="filter-options">
              <label className="filter-check">
                <input type="checkbox" checked={brand === 'ONYX'} onChange={() => setParam('brand', brand === 'ONYX' ? '' : 'ONYX')} />
                <span>ONYX</span>
              </label>
            </div>
          </details>
          <details className="filter-group" open>
            <summary>موجودی</summary>
            <div className="filter-options">
              <label className="filter-check">
                <input type="radio" name="stock" checked={stock === 'in'} onChange={() => setParam('stock', 'in')} />
                <span>موجود</span>
              </label>
              <label className="filter-check">
                <input type="radio" name="stock" checked={stock === 'out'} onChange={() => setParam('stock', 'out')} />
                <span>ناموجود</span>
              </label>
              <label className="filter-check">
                <input type="radio" name="stock" checked={!stock} onChange={() => setParam('stock', '')} />
                <span>همه</span>
              </label>
            </div>
          </details>
          <details className="filter-group" open>
            <summary>محدوده قیمت (تومان)</summary>
            <div className="filter-price">
              <input type="number" placeholder="از" min="0" value={min} onChange={(e) => setParam('min', e.target.value)} aria-label="حداقل قیمت" />
              <input type="number" placeholder="تا" min="0" value={max} onChange={(e) => setParam('max', e.target.value)} aria-label="حداکثر قیمت" />
            </div>
          </details>
          <button type="button" className="btn btn-outline btn-sm shop-filters-clear" onClick={clearAll}>حذف همه فیلترها</button>
        </aside>

        <div className="shop-results">
          <div className="shop-toolbar">
            <span className="shop-count">{faNumber(results.length)} محصول</span>
            <div className="shop-chips">
              {activeFilters.map((f) => (
                <button key={`${f.key}-${f.value ?? ''}`} type="button" className="filter-chip" onClick={() => removeFilter(f)}>
                  {f.label} ✕
                </button>
              ))}
            </div>
            <label className="shop-sort">
              <span className="sr-only">مرتب‌سازی</span>
              <select value={sort} onChange={(e) => setParam('sort', e.target.value)}>
                {SORT_OPTIONS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
              </select>
            </label>
          </div>
          <ProductGrid products={results} />
        </div>
      </div>
    </>
  );
}
