import { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { useStore } from '../context/StoreContext.jsx';
import { formatPrice, faNumber } from '../utils/format.js';
import { useSEO } from '../utils/seo.js';
import { CartIcon, CheckIcon, TruckIcon } from '../components/Icons.jsx';

const PROVINCES = ['تهران', 'البرز', 'اصفهان', 'خراسان رضوی', 'فارس', 'آذربایجان شرقی', 'آذربایجان غربی', 'گیلان', 'مازندران', 'خوزستان', 'یزد', 'کرمان', 'قم', 'سایر استان‌ها'];

const FIELDS = [
  { name: 'firstName', label: 'نام', required: true },
  { name: 'lastName', label: 'نام خانوادگی', required: true },
  { name: 'mobile', label: 'شماره موبایل', required: true, ltr: true },
  { name: 'postalCode', label: 'کد پستی', required: true, ltr: true },
];

export default function CheckoutPage() {
  const { cart, cartTotal, updateQty, removeFromCart, clearCart, notify } = useStore();
  const [values, setValues] = useState({ firstName: '', lastName: '', mobile: '', province: 'تهران', city: '', address: '', postalCode: '', note: '' });
  const [error, setError] = useState(null);
  const [placed, setPlaced] = useState(false);

  useSEO({
    title: 'تسویه حساب | آتریا الکترونیک',
    description: 'تکمیل اطلاعات ارسال و ثبت سفارش در فروشگاه آتریا الکترونیک.',
    path: '/checkout',
  });

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!values.firstName.trim() || !values.lastName.trim() || !values.city.trim() || !values.address.trim()) {
      setError('لطفاً فیلدهای ستاره‌دار را تکمیل کنید.');
      return;
    }
    if (!/^09\d{9}$/.test(values.mobile.trim())) {
      setError('شماره موبایل باید ۱۱ رقم و با 09 شروع شود.');
      return;
    }
    if (!/^\d{10}$/.test(values.postalCode.trim())) {
      setError('کد پستی باید ۱۰ رقم باشد.');
      return;
    }
    try {
      const orders = JSON.parse(localStorage.getItem('atrya_orders') || '[]');
      orders.push({
        id: Date.now(),
        items: cart,
        total: cartTotal,
        customer: { ...values },
        status: 'pending-payment',
        at: new Date().toISOString(),
      });
      localStorage.setItem('atrya_orders', JSON.stringify(orders));
    } catch { /* storage unavailable */ }
    clearCart();
    setPlaced(true);
    setError(null);
    notify('سفارش شما ثبت شد');
  };

  if (placed) {
    return (
      <div className="container checkout-success" role="status">
        <span className="checkout-success-icon"><CheckIcon size={32} /></span>
        <h1>سفارش شما ثبت شد</h1>
        <p>
          اطلاعات ارسال شما دریافت شد. اتصال به درگاه پرداخت اینترنتی در حال حاضر
          فعال نیست؛ کارشناسان آتریا الکترونیک برای هماهنگی پرداخت و ارسال با شما
          تماس می‌گیرند.
        </p>
        <Link to="/shop" className="btn btn-gold btn-md">بازگشت به فروشگاه</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container checkout-empty">
        <CartIcon size={44} />
        <h1>سبد خرید شما خالی است</h1>
        <Link to="/shop" className="btn btn-gold btn-md">مشاهده محصولات</Link>
      </div>
    );
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'تسویه حساب' }]} />
          <h1>تسویه حساب</h1>
          <p>اطلاعات ارسال را تکمیل و سفارش خود را نهایی کنید</p>
        </div>
      </div>

      <div className="container checkout-layout">
        <form className="checkout-form" onSubmit={submit} noValidate>
          <h2>اطلاعات خریدار</h2>
          <div className="form-grid">
            {FIELDS.map((f) => (
              <div className="form-field" key={f.name}>
                <label htmlFor={`ck-${f.name}`}>{f.label}<span aria-hidden="true"> *</span></label>
                <input
                  id={`ck-${f.name}`}
                  name={f.name}
                  type={f.ltr ? 'text' : 'text'}
                  dir={f.ltr ? 'ltr' : undefined}
                  value={values[f.name]}
                  onChange={onChange}
                />
              </div>
            ))}
            <div className="form-field">
              <label htmlFor="ck-province">استان<span aria-hidden="true"> *</span></label>
              <select id="ck-province" name="province" value={values.province} onChange={onChange}>
                {PROVINCES.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="ck-city">شهر<span aria-hidden="true"> *</span></label>
              <input id="ck-city" name="city" type="text" value={values.city} onChange={onChange} />
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="ck-address">آدرس<span aria-hidden="true"> *</span></label>
              <textarea id="ck-address" name="address" rows="3" value={values.address} onChange={onChange} />
            </div>
            <div className="form-field form-field-full">
              <label htmlFor="ck-note">توضیحات سفارش</label>
              <textarea id="ck-note" name="note" rows="2" value={values.note} onChange={onChange} />
            </div>
          </div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button type="submit" className="btn btn-gold btn-lg">ثبت سفارش</button>
          <p className="checkout-note"><TruckIcon size={16} /> پس از ثبت سفارش، کارشناسان ما برای هماهنگی پرداخت و ارسال با شما تماس می‌گیرند.</p>
        </form>

        <aside className="checkout-summary" aria-label="خلاصه سفارش">
          <h2>خلاصه سفارش</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt="" loading="lazy" width="48" height="36" />
                <div className="checkout-summary-info">
                  <Link to={`/product/${item.slug}`}>{item.name}</Link>
                  <div className="cart-item-qty">
                    <button type="button" aria-label="افزایش تعداد" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    <span>{faNumber(item.qty)}</span>
                    <button type="button" aria-label="کاهش تعداد" onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <button type="button" className="checkout-remove" aria-label="حذف" onClick={() => removeFromCart(item.id)}>حذف</button>
                  </div>
                </div>
                <span className="checkout-summary-price">{formatPrice(item.price * item.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="checkout-totals">
            <div><span>جمع سبد خرید</span><strong>{formatPrice(cartTotal)}</strong></div>
            <div><span>هزینه ارسال</span><strong>پس از تأیید آدرس</strong></div>
            <div className="checkout-grand"><span>مبلغ قابل پرداخت</span><strong>{formatPrice(cartTotal)}</strong></div>
          </div>
          <p className="checkout-summary-note">اتصال به درگاه پرداخت اینترنتی به‌زودی فعال می‌شود؛ در حال حاضر پرداخت پس از تماس کارشناسان هماهنگ می‌گردد.</p>
        </aside>
      </div>
    </>
  );
}
