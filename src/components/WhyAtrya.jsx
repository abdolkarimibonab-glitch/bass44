import SectionHeading from './SectionHeading.jsx';
import {
  HeadsetIcon, ShieldIcon, LayersIcon, TruckIcon, CheckIcon, TagIcon,
} from './Icons.jsx';

const REASONS = [
  { icon: HeadsetIcon, title: 'مشاوره تخصصی', text: 'کارشناسان ما پیش از خرید، آمپر و ولتاژ مناسب پروژه شما را دقیق محاسبه می‌کنند.' },
  { icon: ShieldIcon, title: 'ضمانت اصالت کالا', text: 'تمام محصولات با گارانتی معتبر و تضمین اصالت عرضه می‌شوند.' },
  { icon: LayersIcon, title: 'تنوع محصولات', text: 'از پاور اسلیم تا مدل‌های صنعتی فن‌دار و ضد آب، در همه توان‌ها و ولتاژها.' },
  { icon: TruckIcon, title: 'ارسال سریع', text: 'سفارش‌ها در کوتاه‌ترین زمان بسته‌بندی و ارسال می‌شوند.' },
  { icon: CheckIcon, title: 'پشتیبانی فنی', text: 'پاسخ به سؤالات فنی شما قبل و بعد از خرید، چه تلفنی و چه حضوری.' },
  { icon: TagIcon, title: 'قیمت رقابتی', text: 'قیمت‌گذاری منصفانه و شفاف بدون واسطه‌های غیرضروری.' },
];

export default function WhyAtrya() {
  return (
    <section className="why-section" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading id="why-title" title="چرا آتریا الکترونیک؟" subtitle="انتخاب فروشنده‌ای که خودش کار فنی را می‌فهمد، تفاوت اصلی پروژه‌های موفق است." />
        <div className="why-grid">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="why-item">
              <span className="why-icon"><Icon size={24} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
