import { Link } from 'react-router-dom';
import { ChevronLeft } from './Icons.jsx';
import { useSEO } from '../utils/seo.js';

export default function Breadcrumbs({ items }) {
  useSEO({ jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.to ? { item: `https://atryaelectronic.com${item.to}` } : {}),
    })),
  } });

  return (
    <nav className="breadcrumbs" aria-label="مسیر صفحه">
      <ol>
        {items.map((item, i) => (
          <li key={i}>
            {item.to ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
            {i < items.length - 1 && <ChevronLeft size={14} className="breadcrumb-sep" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
