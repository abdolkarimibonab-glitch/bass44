import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';
import { PRODUCTS } from '../data/products.js';
import ProductCard from './ProductCard.jsx';
import { useSEO } from '../utils/seo.js';

export default function OnyxSection() {
  useSEO({});
  const onyxProducts = PRODUCTS.filter((p) => p.brand === 'ONYX').slice(0, 3);

  return (
    <section className="onyx-section" aria-labelledby="onyx-title">
      <div className="container">
        <div className="onyx-inner">
          <div className="onyx-content">
            <span className="onyx-wordmark" aria-hidden="true">ONYX</span>
            <SectionHeading id="onyx-title" tone="dark" title="محصولات برند ONYX" />
            <p>
              ONYX برند تخصصی منابع تغذیه و تجهیزات الکترونیکی است که آتریا الکترونیک
              به‌عنوان فروشگاه عرضه‌کننده، پاورهای سوئیچینگ صنعتی، آداپتورها و محصولات
              LED این برند را با ضمانت اصالت کالا ارائه می‌دهد.
            </p>
            <ul className="onyx-points">
              <li>کیفیت صنعتی و کارکرد پیوسته</li>
              <li>گارانتی معتبر و خدمات پس از فروش</li>
              <li>تنوع کامل در ولتاژ، آمپر و توان</li>
            </ul>
            <Button to="/brands" variant="gold" size="md">مشاهده محصولات ONYX</Button>
          </div>
          <div className="onyx-products">
            {onyxProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="onyx-product-card" aria-label={p.name}>
                <img src={p.image} alt="" loading="lazy" width="180" height="135" />
                <span>{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
