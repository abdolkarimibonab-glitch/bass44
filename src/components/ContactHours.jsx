import Button from './Button.jsx';
import { SITE } from '../data/site.js';
import { PhoneIcon, ClockIcon } from './Icons.jsx';

export default function ContactHours() {
  return (
    <section className="contact-hours" aria-labelledby="hours-title">
      <div className="container">
        <div className="contact-hours-inner">
          <div className="contact-hours-card">
            <h2 id="hours-title">کنار شما هستیم</h2>
            <p>
              برای مشاوره فنی، استعلام موجودی و ثبت سفارش تلفنی، در ساعات کاری
              پاسخگوی شما هستیم.
            </p>
            <ul className="hours-list">
              <li>
                <ClockIcon size={18} />
                <span>شنبه تا چهارشنبه: <strong>ساعت ۹ الی ۱۷</strong></span>
              </li>
              <li>
                <ClockIcon size={18} />
                <span>پنجشنبه: <strong>ساعت ۹ الی ۱۳</strong></span>
              </li>
              <li>
                <ClockIcon size={18} />
                <span>جمعه: <strong>تعطیل</strong></span>
              </li>
            </ul>
          </div>
          <div className="contact-hours-cta">
            <span className="contact-hours-cta-icon"><PhoneIcon size={28} /></span>
            <span className="contact-hours-cta-label">تماس مستقیم با پشتیبانی</span>
            <a href={`tel:${SITE.phone}`} dir="ltr" className="contact-hours-phone">{SITE.phoneDisplay}</a>
            <Button to="/contact" variant="gold" size="md">تماس با ما</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
