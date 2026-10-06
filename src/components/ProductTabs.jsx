import { useState } from 'react';
import ProductSpecifications from './ProductSpecifications.jsx';

const DEFAULT_FAQS = [
  { q: 'محصول با گارانتی عرضه می‌شود؟', a: 'بله، تمام محصولات آتریا الکترونیک با گارانتی معتبر و تضمین اصالت کالا ارسال می‌شوند.' },
  { q: 'هزینه و زمان ارسال چقدر است؟', a: 'سفارش‌ها در کوتاه‌ترین زمان بسته‌بندی می‌شوند؛ هزینه ارسال پس از تأیید آدرس در مرحله تسویه‌حساب مشخص می‌گردد.' },
  { q: 'برای انتخاب مدل مناسب راهنمایی می‌کنید؟', a: 'بله، کارشناسان فنی ما پیش از خرید، جریان و ولتاژ مناسب پروژه شما را محاسبه و پیشنهاد می‌دهند.' },
];

const TABS = [
  { key: 'intro', label: 'معرفی محصول' },
  { key: 'specs', label: 'مشخصات فنی' },
  { key: 'apps', label: 'کاربردها' },
  { key: 'pros', label: 'مزایا' },
  { key: 'guide', label: 'راهنمای خرید' },
  { key: 'faq', label: 'سوالات متداول' },
];

export default function ProductTabs({ product }) {
  const [tab, setTab] = useState('intro');
  const faqs = product.faqs || DEFAULT_FAQS;

  return (
    <div className="product-tabs">
      <div className="product-tabs-list" role="tablist" aria-label="اطلاعات محصول">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            aria-controls={`panel-${t.key}`}
            id={`tab-${t.key}`}
            className={tab === t.key ? 'active' : ''}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'intro' && (
        <div id="panel-intro" role="tabpanel" aria-labelledby="tab-intro" className="product-tab-panel">
          <p>{product.description}</p>
        </div>
      )}
      {tab === 'specs' && (
        <div id="panel-specs" role="tabpanel" aria-labelledby="tab-specs" className="product-tab-panel">
          <ProductSpecifications specs={product.specs} />
        </div>
      )}
      {tab === 'apps' && (
        <div id="panel-apps" role="tabpanel" aria-labelledby="tab-apps" className="product-tab-panel">
          <ul className="list-check">
            {product.applications.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      )}
      {tab === 'pros' && (
        <div id="panel-pros" role="tabpanel" aria-labelledby="tab-pros" className="product-tab-panel">
          <ul className="list-check">
            {product.advantages.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      )}
      {tab === 'guide' && (
        <div id="panel-guide" role="tabpanel" aria-labelledby="tab-guide" className="product-tab-panel">
          <p>{product.buyGuide}</p>
        </div>
      )}
      {tab === 'faq' && (
        <div id="panel-faq" role="tabpanel" aria-labelledby="tab-faq" className="product-tab-panel">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
