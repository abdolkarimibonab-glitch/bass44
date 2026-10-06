import { CATEGORIES } from '../data/site.js';

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="category-tabs" role="tablist" aria-label="دسته‌بندی محصولات">
      {CATEGORIES.map((c) => (
        <button
          key={c.key}
          type="button"
          role="tab"
          aria-selected={active === c.key}
          className={`category-tab ${active === c.key ? 'active' : ''}`}
          onClick={() => onChange(c.key)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
