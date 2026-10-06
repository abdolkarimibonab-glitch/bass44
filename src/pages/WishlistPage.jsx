import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Button from '../components/Button.jsx';
import { useStore } from '../context/StoreContext.jsx';
import { PRODUCTS } from '../data/products.js';
import { useSEO } from '../utils/seo.js';
import { HeartIcon } from '../components/Icons.jsx';

export default function WishlistPage() {
  const { wishlist } = useStore();
  useSEO({
    title: 'علاقه‌مندی‌ها | آتریا الکترونیک',
    description: 'محصولات نشان‌شده شما در آتریا الکترونیک.',
    path: '/wishlist',
  });

  const items = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="page-hero">
      <div className="container">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'علاقه‌مندی‌ها' }]} />
        <h1>علاقه‌مندی‌ها</h1>
        {items.length === 0 ? (
          <div className="wishlist-empty">
            <HeartIcon size={44} />
            <p>هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید.</p>
            <Button to="/shop" variant="gold" size="md">مشاهده محصولات</Button>
          </div>
        ) : (
          <div className="product-grid wishlist-grid">
            {items.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
        <Link to="/shop" className="wishlist-back">بازگشت به فروشگاه ←</Link>
      </div>
    </div>
  );
}
