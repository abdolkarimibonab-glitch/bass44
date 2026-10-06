export const SITE = {
  name: 'آتریا الکترونیک',
  nameEn: 'ATRYA ELECTRONIC',
  tagline: 'فروشگاه تخصصی منابع تغذیه و تجهیزات الکترونیکی',
  url: 'https://atryaelectronic.com',
  phone: '09126709618',
  phoneDisplay: '۰۹۱۲ ۶۷۰ ۹۶۱۸',
  hours: [
    { days: 'شنبه تا چهارشنبه', time: 'ساعت ۹ الی ۱۷' },
    { days: 'پنجشنبه', time: 'ساعت ۹ الی ۱۳' },
    { days: 'جمعه', time: 'تعطیل' },
  ],
};

export const NAV_LINKS = [
  { label: 'صفحه اصلی', to: '/' },
  { label: 'فروشگاه', to: '/shop' },
  { label: 'محصولات', to: '/shop', dropdown: true },
  { label: 'برندها', to: '/brands' },
  { label: 'مقالات آموزشی', to: '/articles' },
  { label: 'درباره ما', to: '/about' },
  { label: 'تماس با ما', to: '/contact' },
];

export const TOPBAR_ITEMS = [
  { icon: 'truck', label: 'ارسال سریع' },
  { icon: 'shield', label: 'تضمین اصالت کالا' },
  { icon: 'headset', label: 'پشتیبانی تخصصی' },
];

export const CATEGORIES = [
  { key: 'all', label: 'همه محصولات' },
  { key: 'power-12', label: 'پاور 12 ولت' },
  { key: 'power-24', label: 'پاور 24 ولت' },
  { key: 'adapter', label: 'آداپتور' },
  { key: 'slim', label: 'پاور اسلیم' },
  { key: 'fan', label: 'پاور فن‌دار' },
  { key: 'waterproof', label: 'پاور ضد آب' },
  { key: 'led', label: 'محصولات LED' },
];

export const CATEGORY_LABELS = Object.fromEntries(CATEGORIES.map((c) => [c.key, c.label]));

export const TYPES = [
  { key: 'industrial', label: 'صنعتی' },
  { key: 'slim', label: 'اسلیم' },
  { key: 'fan', label: 'فن‌دار' },
  { key: 'waterproof', label: 'ضد آب' },
  { key: 'adapter', label: 'آداپتور' },
  { key: 'led', label: 'LED' },
];

export const TYPE_LABELS = Object.fromEntries(TYPES.map((t) => [t.key, t.label]));

export const AMPS = [5, 6, 10, 15, 20, 30];
export const VOLTS = [12, 24];

export const SORT_OPTIONS = [
  { key: 'newest', label: 'جدیدترین' },
  { key: 'cheap', label: 'ارزان‌ترین' },
  { key: 'expensive', label: 'گران‌ترین' },
  { key: 'popular', label: 'پرفروش‌ترین' },
];
