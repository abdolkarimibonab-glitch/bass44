import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext.jsx';
import { formatPrice, faNumber } from '../utils/format.js';
import { CloseIcon, TrashIcon, PlusIcon, MinusIcon, CartIcon } from './Icons.jsx';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, removeFromCart, cartTotal, cartCount } = useStore();

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cartOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setCartOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [setCartOpen]);

  return (
    <>
      {cartOpen && <div className="drawer-overlay" onClick={() => setCartOpen(false)} aria-hidden="true" />}
      <aside
        className={`cart-drawer ${cartOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="سبد خرید"
        aria-modal={cartOpen}
      >
        <div className="cart-drawer-header">
          <h2>
            <CartIcon size={20} />
            سبد خرید
            <span className="cart-drawer-count">{faNumber(cartCount)} کالا</span>
          </h2>
          <button type="button" aria-label="بستن سبد خرید" onClick={() => setCartOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-drawer-empty">
            <CartIcon size={44} />
            <p>سبد خرید شما خالی است</p>
            <button type="button" className="btn btn-gold" onClick={() => setCartOpen(false)}>
              ادامه خرید
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-drawer-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt="" loading="lazy" width="64" height="64" />
                  <div className="cart-item-info">
                    <Link to={`/product/${item.slug}`} onClick={() => setCartOpen(false)}>{item.name}</Link>
                    <span className="cart-item-price">{formatPrice(item.price)}</span>
                    <div className="cart-item-qty">
                      <button type="button" aria-label="افزایش تعداد" onClick={() => updateQty(item.id, item.qty + 1)}><PlusIcon size={14} /></button>
                      <span aria-live="polite">{faNumber(item.qty)}</span>
                      <button type="button" aria-label="کاهش تعداد" onClick={() => updateQty(item.id, item.qty - 1)}><MinusIcon size={14} /></button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="cart-item-remove"
                    aria-label={`حذف ${item.name} از سبد`}
                    onClick={() => removeFromCart(item.id)}
                  >
                    <TrashIcon size={16} />
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-drawer-footer">
              <div className="cart-drawer-total">
                <span>جمع کل</span>
                <strong>{formatPrice(cartTotal)}</strong>
              </div>
              <p className="cart-drawer-note">هزینه ارسال در مرحله تسویه‌حساب محاسبه می‌شود.</p>
              <Link to="/checkout" className="btn btn-gold btn-lg" onClick={() => setCartOpen(false)}>
                تسویه حساب
              </Link>
              <button type="button" className="btn btn-ghost-dark" onClick={() => setCartOpen(false)}>
                ادامه خرید
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
