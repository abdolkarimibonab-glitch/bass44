import Button from './Button.jsx';
import { SITE } from '../data/site.js';
import {
  TruckIcon, ShieldIcon, HeadsetIcon, CheckIcon, WalletIcon, SparkIcon,
} from './Icons.jsx';

const BENEFITS = [
  { icon: TruckIcon, label: 'ارسال سریع' },
  { icon: ShieldIcon, label: 'ضمانت اصالت کالا' },
  { icon: HeadsetIcon, label: 'مشاوره تخصصی' },
  { icon: CheckIcon, label: 'پشتیبانی فنی' },
  { icon: SparkIcon, label: 'تضمین کیفیت' },
  { icon: WalletIcon, label: 'پرداخت امن' },
];

export default function HeroBanner() {
  return (
    <section className="hero" aria-label="معرفی محصولات منتخب">
      <div className="container hero-inner">
        <div className="hero-content">
          <img className="hero-brand" src="/images/atrya-logo-white.png" alt="" width="143" height="40" loading="eager" />
          <span className="hero-eyebrow">پاور سوئیچینگ صنعتی</span>
          <h1>خرید پاور 24 ولت صنعتی</h1>
          <p className="hero-sub">
            انواع پاور 24 ولت صنعتی، اسلیم و فن‌دار
            <br />
            مناسب برای تجهیزات الکترونیکی، تابلوها و سیستم‌های LED
          </p>
          <div className="hero-actions">
            <Button to="/shop" variant="gold" size="lg">مشاهده محصولات</Button>
            <Button to="/contact" variant="ghost" size="lg">مشاوره تخصصی</Button>
          </div>
          <a className="hero-phone" href={`tel:${SITE.phone}`}>
            <span dir="ltr">{SITE.phoneDisplay}</span>
            <small>پشتیبانی و سفارش تلفنی</small>
          </a>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-glow" />
          <div className="hero-product hero-product-main">
            <img src="/images/products/psu-industrial.svg" alt="" width="300" height="225" loading="eager" />
          </div>
          <div className="hero-product hero-product-slim">
            <img src="/images/products/psu-slim.svg" alt="" width="220" height="165" loading="eager" />
          </div>
          <div className="hero-product hero-product-adapter">
            <img src="/images/products/adapter.svg" alt="" width="160" height="120" loading="eager" />
          </div>
          <div className="hero-chips">
            <span>12V</span>
            <span>24V</span>
            <span>AC/DC</span>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="hero-benefits">
          {BENEFITS.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon size={22} className="hero-benefit-icon" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
