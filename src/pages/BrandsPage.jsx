import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import Button from '../components/Button.jsx';
import { PRODUCTS } from '../data/products.js';
import { useSEO } from '../utils/seo.js';
import { ShieldIcon, LayersIcon, CheckIcon } from '../components/Icons.jsx';

export default function BrandsPage() {
  useSEO({
    title: 'برندها | آتریا الکترونیک',
    description: 'معرفی برند ONYX — منابع تغذیه سوئیچینگ صنعتی، آداپتور و محصولات LED؛ عرضه‌شده از فروشگاه آتریا الکترونیک.',
    path: '/brands',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Brand',
      name: 'ONYX',
    },
  });

  const onyxProducts = PRODUCTS.filter((p) => p.brand === 'ONYX');

  return (
    <>
      <section className="page-hero brands-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'برندها' }]} />
          <span className="onyx-wordmark-inline">ONYX</span>
          <h1>برند ONYX در آتریا الکترونیک</h1>
          <p>
            آتریا الکترونیک فروشگاه تخصصی عرضه محصولات برند ONYX است؛ از پاورهای
            سوئیچینگ صنعتی و آداپتورها تا محصولات LED، همه با ضمانت اصالت کالا.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="why-grid why-grid-3">
            <div className="why-item">
              <span className="why-icon"><ShieldIcon size={24} /></span>
              <h3>تضمین اصالت</h3>
              <p>تمام محصولات ONYX مستقیماً و با گارانتی معتبر عرضه می‌شوند.</p>
            </div>
            <div className="why-item">
              <span className="why-icon"><LayersIcon size={24} /></span>
              <h3>تنوع کامل</h3>
              <p>پاور صنعتی، آداپتور و محصولات LED در ولتاژها و توان‌های مختلف.</p>
            </div>
            <div className="why-item">
              <span className="why-icon"><CheckIcon size={24} /></span>
              <h3>کیفیت صنعتی</h3>
              <p>طراحی‌شده برای کارکرد پیوسته در محیط‌های صنعتی و تجاری.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-section" aria-labelledby="onyx-products-title">
        <div className="container">
          <SectionHeading id="onyx-products-title" title="محصولات برند ONYX" />
          <ProductGrid products={onyxProducts} />
          <div className="featured-more">
            <Button to="/shop?brand=ONYX" variant="gold" size="md">مشاهده در فروشگاه</Button>
          </div>
        </div>
      </section>
    </>
  );
}
