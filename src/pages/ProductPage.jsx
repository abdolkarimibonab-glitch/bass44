import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ProductGallery from '../components/ProductGallery.jsx';
import ProductTabs from '../components/ProductTabs.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import WishlistButton from '../components/WishlistButton.jsx';
import { useStore } from '../context/StoreContext.jsx';
import { getProduct, getRelated } from '../data/products.js';
import { CATEGORY_LABELS } from '../data/site.js';
import { formatPrice, faNumber, discountPercent } from '../utils/format.js';
import { useSEO } from '../utils/seo.js';
import { CartIcon, TruckIcon, ShieldIcon, MinusIcon, PlusIcon } from '../components/Icons.jsx';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const { addToCart } = useStore();
  const [qty, setQty] = useState(1);

  useSEO({
    title: product ? `${product.seoTitle}` : 'محصول یافت نشد | آتریا الکترونیک',
    description: product ? product.seoDescription : '',
    path: product ? `/product/${product.slug}` : '',
    type: 'product',
    jsonLd: product ? {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      sku: product.sku,
      brand: { '@type': 'Brand', name: product.brand },
      description: product.short,
      image: `https://atryaelectronic.com${product.image}`,
      offers: {
        '@type': 'Offer',
        price: product.salePrice ?? product.price,
        priceCurrency: 'IRR',
        availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      },
    } : null,
  });

  if (!product) return <Navigate to="/404" replace />;

  const price = product.salePrice ?? product.price;
  const off = discountPercent(product.price, product.salePrice);
  const related = getRelated(product);

  const buyNow = () => {
    addToCart(product, qty);
    window.location.href = '/checkout';
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs items={[
            { label: 'خانه', to: '/' },
            { label: 'فروشگاه', to: '/shop' },
            ...(product.categories[0] ? [{ label: CATEGORY_LABELS[product.categories[0]], to: `/shop?cat=${product.categories[0]}` }] : []),
            { label: product.name },
          ]} />
        </div>
      </div>

      <div className="container product-layout">
        <ProductGallery product={product} />

        <div className="product-info">
          <span className="product-brand-chip">{product.brand}</span>
          <h1>{product.name}</h1>
          <p className="product-availability">
            <span className={`stock-dot ${product.inStock ? 'in' : 'out'}`} aria-hidden="true" />
            {product.inStock ? 'موجود در انبار' : 'ناموجود — به‌زودی'}
          </p>

          <div className="product-price-row">
            {product.salePrice && <del>{formatPrice(product.price)}</del>}
            <span className="product-price">{formatPrice(price)}</span>
            {off > 0 && <span className="badge badge-discount">٪{faNumber(off)} تخفیف</span>}
          </div>

          <div className="product-tech-chips">
            {product.voltage && <span>ولتاژ: {product.voltage} ولت</span>}
            {product.current && <span>جریان: {product.current} آمپر</span>}
            {product.wattage && <span>توان: {product.wattage} وات</span>}
            <span>ابعاد: {product.dimensions}</span>
          </div>

          <div className="product-buy-row">
            <div className="qty-selector" aria-label="تعداد">
              <button type="button" aria-label="افزایش تعداد" onClick={() => setQty((v) => Math.min(v + 1, 99))}><PlusIcon size={16} /></button>
              <span aria-live="polite">{faNumber(qty)}</span>
              <button type="button" aria-label="کاهش تعداد" onClick={() => setQty((v) => Math.max(v - 1, 1))}><MinusIcon size={16} /></button>
            </div>
            <button
              type="button"
              className="btn btn-gold btn-lg"
              disabled={!product.inStock}
              onClick={() => addToCart(product, qty)}
            >
              <CartIcon size={18} />
              افزودن به سبد خرید
            </button>
            <button
              type="button"
              className="btn btn-outline btn-lg"
              disabled={!product.inStock}
              onClick={buyNow}
            >
              خرید مستقیم
            </button>
            <WishlistButton product={product} />
          </div>

          <ul className="product-meta-list">
            <li><span>کد محصول:</span> <span dir="ltr">{product.sku}</span></li>
            <li><span>گارانتی:</span> {product.warranty}</li>
            <li><TruckIcon size={16} /> ارسال سریع پس از تأیید سفارش</li>
            <li><ShieldIcon size={16} /> تضمین اصالت کالا</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <ProductTabs product={product} />
      </div>

      <section className="section related-section" aria-labelledby="related-title">
        <div className="container">
          <SectionHeading id="related-title" title="محصولات مرتبط" />
          <ProductGrid products={related} />
        </div>
      </section>
    </>
  );
}
