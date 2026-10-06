import { Link } from 'react-router-dom';
import { SITE } from '../data/site.js';
import { PhoneIcon, MapIcon, SendIcon, InstagramIcon, TelegramIcon, WhatsappIcon } from './Icons.jsx';

const SHOP_LINKS = [
  { label: 'صفحه اصلی', to: '/' },
  { label: 'فروشگاه', to: '/shop' },
  { label: 'محصولات', to: '/shop' },
  { label: 'برندها', to: '/brands' },
  { label: 'مقالات آموزشی', to: '/articles' },
  { label: 'درباره ما', to: '/about' },
  { label: 'تماس با ما', to: '/contact' },
];

const SERVICE_LINKS = [
  { label: 'پیگیری سفارش', to: '/contact' },
  { label: 'شرایط ارسال', to: '/about' },
  { label: 'قوانین و مقررات', to: '/about' },
  { label: 'حریم خصوصی', to: '/about' },
  { label: 'سوالات متداول', to: '/articles' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img src="/images/logo-white.svg" alt={SITE.nameEn} width="160" height="42" loading="lazy" />
          <p>
            آتریا الکترونیک، فروشگاه تخصصی منابع تغذیه و تجهیزات الکترونیکی؛
            عرضه‌کننده پاور سوئیچینگ صنعتی، اسلیم، فن‌دار، ضد آب، آداپتور و
            محصولات LED برند ONYX.
          </p>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" aria-label="اینستاگرام آتریا الکترونیک"><InstagramIcon /></a>
            <a href="https://t.me" target="_blank" rel="noreferrer noopener" aria-label="تلگرام آتریا الکترونیک"><TelegramIcon /></a>
            <a href="https://wa.me/989126709618" target="_blank" rel="noreferrer noopener" aria-label="واتساپ آتریا الکترونیک"><WhatsappIcon /></a>
          </div>
        </div>

        <nav className="footer-col" aria-label="دسترسی سریع">
          <h3>دسترسی سریع</h3>
          <ul>
            {SHOP_LINKS.map((l) => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}
          </ul>
        </nav>

        <nav className="footer-col" aria-label="خدمات مشتریان">
          <h3>خدمات مشتریان</h3>
          <ul>
            {SERVICE_LINKS.map((l) => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}
          </ul>
        </nav>

        <div className="footer-col footer-contact">
          <h3>اطلاعات تماس</h3>
          <ul>
            <li>
              <PhoneIcon size={16} />
              <a href={`tel:${SITE.phone}`} dir="ltr">{SITE.phoneDisplay}</a>
            </li>
            <li>
              <MapIcon size={16} />
              <span>نشانی فروشگاه: به‌زودی تکمیل می‌شود</span>
            </li>
            <li>
              <SendIcon size={16} />
              <span>ساعات کاری: شنبه تا چهارشنبه ۹ الی ۱۷</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© تمامی حقوق برای آتریا الکترونیک محفوظ است.</span>
          <span className="footer-bottom-note">{SITE.nameEn}</span>
        </div>
      </div>
    </footer>
  );
}
