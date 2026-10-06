import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Button from '../components/Button.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { useSEO } from '../utils/seo.js';
import {
  HeadsetIcon, ShieldIcon, CheckIcon, LayersIcon, CpuIcon, TruckIcon,
} from '../components/Icons.jsx';

const STATS = [
  { value: '+۱۰۰۰', label: 'سفارش تکمیل‌شده' },
  { value: '+۹۵٪', label: 'رضایت مشتریان' },
  { value: '+۱۰۰', label: 'مدل محصول فعال' },
  { value: '۱۸ ماه', label: 'حداکثر گارانتی محصولات' },
];

export default function AboutPage() {
  useSEO({
    title: 'درباره آتریا الکترونیک | فروشگاه تخصصی منابع تغذیه',
    description: 'آتریا الکترونیک فروشگاه تخصصی پاور سوئیچینگ صنعتی، آداپتور و محصولات LED است؛ با مشاوره فنی، ضمانت اصالت کالا و پشتیبانی تخصصی.',
    path: '/about',
  });

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'درباره ما' }]} />
          <h1>درباره آتریا الکترونیک</h1>
          <p>فروشگاه تخصصی و قابل اعتماد در زمینه تجهیزات الکترونیکی و منابع تغذیه</p>
        </div>
      </div>

      <section className="section">
        <div className="container about-intro">
          <h2>معرفی آتریا الکترونیک</h2>
          <p>
            آتریا الکترونیک یک فروشگاه تخصصی در حوزه تجهیزات الکترونیکی و منابع تغذیه است.
            تمرکز اصلی ما بر عرضه پاورهای سوئیچینگ صنعتی در ولتاژهای 12 و 24 ولت، پاورهای
            اسلیم، فن‌دار و ضد آب، آداپتورهای سوئیچینگ و محصولات روشنایی LED است. ما
            محصولات برند ONYX را با ضمانت اصالت کالا و گارانتی معتبر به مشتریان خود
            ارائه می‌دهیم.
          </p>
          <p>
            تجربه ما نشان داده است که انتخاب درست منبع تغذیه، مهم‌ترین عامل طول عمر
            تجهیزات و پایداری پروژه‌های الکترونیکی است؛ به همین دلیل مشاوره فنی قبل از
            خرید را جدی می‌گیریم و پیش از هر فروش، جریان و ولتاژ مناسب پروژه شما را
            با هم بررسی می‌کنیم.
          </p>
        </div>
      </section>

      <section className="section about-stats-section">
        <div className="container">
          <div className="about-stats">
            {STATS.map((s) => (
              <div key={s.label} className="about-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="تخصص ما" />
          <div className="why-grid why-grid-3">
            <div className="why-item">
              <span className="why-icon"><CpuIcon size={24} /></span>
              <h3>منابع تغذیه صنعتی</h3>
              <p>پاورهای سوئیچینگ 12 و 24 ولت در توان‌های مختلف برای تابلوها و تجهیزات صنعتی.</p>
            </div>
            <div className="why-item">
              <span className="why-icon"><LayersIcon size={24} /></span>
              <h3>آداپتور و تجهیزات جانبی</h3>
              <p>آداپتورهای سوئیچینگ مطمئن برای مودم، دوربین و تجهیزات 12 ولت.</p>
            </div>
            <div className="why-item">
              <span className="why-icon"><TruckIcon size={24} /></span>
              <h3>روشنایی LED</h3>
              <p>چراغ‌های LED اوال، کلاهی و آفتابی برای نور مخفی و تابلوهای تبلیغاتی.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="تعهد ما به کیفیت و خدمات" />
          <div className="about-commit">
            <ul className="list-check">
              <li>عرضه محصولات فقط با گارانتی معتبر و تضمین اصالت کالا</li>
              <li>مشاوره فنی تخصصی پیش از خرید، بدون هزینه</li>
              <li>پشتیبانی فنی پس از فروش در تمام ساعات کاری</li>
              <li>قیمت‌گذاری شفاف و رقابتی</li>
              <li>ارسال سریع و بسته‌بندی ایمن</li>
            </ul>
            <div className="about-commit-cta">
              <p>آماده ارائه مشاوره تخصصی به شما هستیم.</p>
              <Button to="/contact" variant="gold" size="md">تماس با ما</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
