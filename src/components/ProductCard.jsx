import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext.jsx';
import { formatPrice, faNumber, discountPercent } from '../utils/format.js';
import { CartIcon, HeartIcon } from './Icons.jsx';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, inWishlist } = useStore();
  const price = product.salePrice ?? product.price;
  const off = discountPercent(product.price, product.salePrice);
  const wished = inWishlist(product.id);

  return (
    <article className="product-card">
      <div className="product-card-media">
        <Link to={`/product/${product.slug}`} aria-label={product.name}>
          <img src={product.image} alt={product.alt} loading="lazy" width="300" height="225" />
        </Link>
        {off > 0 && <span className="badge badge-discount">٪{faNumber(off)} تخفیف</span>}
        {!product.inStock && <span className="badge badge-out">ناموجود</span>}
        <button
          type="button"
          className={`product-card-wishlist ${wished ? 'active' : ''}`}
          aria-label={wished ? 'حذف از علاقه‌مندی' : 'افزودن به علاقه‌مندی'}
          aria-pressed={wished}
          onClick={() => toggleWishlist(product.id)}
        >
          <HeartIcon size={18} filled={wished} />
        </button>
      </div>

      <div className="product-card-body">
        <span className="product-card-brand">{product.brand}</span>
        <h3 className="product-card-title">
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="product-card-spec">{product.short}</p>

        <div className="product-card-footer">
          <div className="product-card-price">
            {product.salePrice && <del>{formatPrice(product.price)}</del>}
            <strong>{formatPrice(price)}</strong>
          </div>
          <button
            type="button"
            className="btn btn-gold btn-sm product-card-cart"
            disabled={!product.inStock}
            onClick={() => addToCart(product)}
          >
            <CartIcon size={16} />
            <span>{product.inStock ? 'افزودن' : 'ناموجود'}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
