import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { SITE } from '../data/site.js';
import { useSEO } from '../utils/seo.js';
import { PhoneIcon, ClockIcon, MapIcon, MailIcon } from '../components/Icons.jsx';

export default function ContactPage() {
  useSEO({
    title: 'تماس با ما | آتریا الکترونیک',
    description: 'راه‌های ارتباط با آتریا الکترونیک: تلفن 09126709618، فرم تماس و ساعات کاری فروشگاه.',
    path: '/contact',
  });

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'تماس با ما' }]} />
          <h1>تماس با ما</h1>
          <p>پاسخگوی سؤالات فنی و سفارش‌های شما در تمام ساعات کاری</p>
        </div>
      </div>

      <section className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-info">
            <div className="contact-info-card">
              <span className="contact-info-icon"><PhoneIcon size={22} /></span>
              <div>
                <h2>تلفن تماس</h2>
                <a href={`tel:${SITE.phone}`} dir="ltr">{SITE.phoneDisplay}</a>
              </div>
            </div>
            <div className="contact-info-card">
              <span className="contact-info-icon"><ClockIcon size={22} /></span>
              <div>
                <h2>ساعات کاری</h2>
                <p>شنبه تا چهارشنبه: ساعت ۹ الی ۱۷</p>
                <p>پنجشنبه: ساعت ۹ الی ۱۳ — جمعه: تعطیل</p>
              </div>
            </div>
            <div className="contact-info-card">
              <span className="contact-info-icon"><MapIcon size={22} /></span>
              <div>
                <h2>نشانی فروشگاه</h2>
                <p className="contact-placeholder">به‌زودی تکمیل می‌شود</p>
              </div>
            </div>
            <div className="contact-info-card">
              <span className="contact-info-icon"><MailIcon size={22} /></span>
              <div>
                <h2>ایمیل</h2>
                <p className="contact-placeholder">به‌زودی تکمیل می‌شود</p>
              </div>
            </div>
            <div className="contact-map-placeholder" role="img" aria-label="محل نقشه فروشگاه — به‌زودی">
              نقشه موقعیت فروشگاه — به‌زودی تکمیل می‌شود
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2>ارسال پیام</h2>
            <p>فرم زیر را تکمیل کنید؛ در اولین فرصت ساعات کاری پاسخ می‌دهیم.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
