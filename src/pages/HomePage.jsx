import { useState } from 'react';
import Button from '../components/Button.jsx';
import HeroBanner from '../components/HeroBanner.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CategoryTabs from '../components/CategoryTabs.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import OnyxSection from '../components/OnyxSection.jsx';
import WhyAtrya from '../components/WhyAtrya.jsx';
import ContactHours from '../components/ContactHours.jsx';
import { ArticlesSection } from '../components/ArticleCard.jsx';
import { PRODUCTS } from '../data/products.js';
import { useSEO } from '../utils/seo.js';

export default function HomePage() {
  const [category, setCategory] = useState('all');
  useSEO({
    title: 'آتریا الکترونیک | فروشگاه تخصصی پاور سوئیچینگ و منابع تغذیه صنعتی',
    description: 'خرید پاور سوئیچینگ صنعتی 12 ولت و 24 ولت، پاور اسلیم، فن‌دار، ضد آب، آداپتور و محصولات LED برند ONYX با ضمانت اصالت کالا از آتریا الکترونیک.',
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'آتریا الکترونیک',
      url: 'https://atryaelectronic.com',
    },
  });

  const filtered = category === 'all'
    ? PRODUCTS.filter((p) => p.featured).slice(0, 8)
    : PRODUCTS.filter((p) => p.categories.includes(category) || p.type === category).slice(0, 8);

  return (
    <>
      <HeroBanner />

      <section className="section featured-section" aria-labelledby="featured-title">
        <div className="container">
          <SectionHeading id="featured-title" title="محصولات منتخب" subtitle="پرفروش‌ترین پاورها و تجهیزات الکترونیکی آتریا" />
          <CategoryTabs active={category} onChange={setCategory} />
          <ProductGrid products={filtered} emptyMessage="محصولی در این دسته‌بندی یافت نشد." />
          <div className="featured-more">
            <Button to="/shop" variant="gold" size="md">مشاهده همه محصولات</Button>
          </div>
        </div>
      </section>

      <OnyxSection />
      <WhyAtrya />
      <ArticlesSection />
      <ContactHours />
    </>
  );
}
