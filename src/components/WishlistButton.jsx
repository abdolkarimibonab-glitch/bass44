import { useStore } from '../context/StoreContext.jsx';
import { HeartIcon } from './Icons.jsx';

export default function WishlistButton({ product, withLabel = false }) {
  const { toggleWishlist, inWishlist, notify } = useStore();
  const wished = inWishlist(product.id);

  const toggle = () => {
    toggleWishlist(product.id);
    notify(wished ? 'از علاقه‌مندی‌ها حذف شد' : 'به علاقه‌مندی‌ها اضافه شد');
  };

  return (
    <button
      type="button"
      className={`btn ${wished ? 'btn-wish-active' : 'btn-outline'} btn-md wishlist-btn`}
      aria-pressed={wished}
      onClick={toggle}
    >
      <HeartIcon size={18} filled={wished} />
      {withLabel && <span>{wished ? 'در علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی'}</span>}
    </button>
  );
}
