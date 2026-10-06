// Minimal line-style icon set (24px, stroke-based) — keeps the design system consistent.
const I = ({ children, size = 20, className = '', ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

export const SearchIcon = (p) => <I {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></I>;
export const CartIcon = (p) => <I {...p}><path d="M6 6h15l-1.5 9h-12z" /><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M6 6 5 3H2" /></I>;
export const HeartIcon = ({ filled, ...p }) => <I {...p}><path d="M12 20s-7.5-4.7-9.3-9.4C1.3 6.9 3.6 4 6.7 4c2 0 3.7 1.2 5.3 3 1.6-1.8 3.3-3 5.3-3 3.1 0 5.4 2.9 4 6.6C19.5 15.3 12 20 12 20Z" fill={filled ? 'currentColor' : 'none'} /></I>;
export const MenuIcon = (p) => <I {...p}><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></I>;
export const CloseIcon = (p) => <I {...p}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></I>;
export const ChevronDown = (p) => <I {...p}><path d="m6 9 6 6 6-6" /></I>;
export const ChevronLeft = (p) => <I {...p}><path d="m15 18-6-6 6-6" /></I>;
export const ChevronRight = (p) => <I {...p}><path d="m9 18 6-6-6-6" /></I>;
export const PhoneIcon = (p) => <I {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.7 2Z" /></I>;
export const TruckIcon = (p) => <I {...p}><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7" /><circle cx="5.5" cy="18.5" r="2" /><circle cx="18.5" cy="18.5" r="2" /></I>;
export const ShieldIcon = (p) => <I {...p}><path d="M12 2 4 5v6c0 5.5 3.4 9.4 8 11 4.6-1.6 8-5.5 8-11V5Z" /><path d="m9 12 2 2 4-4" /></I>;
export const HeadsetIcon = (p) => <I {...p}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 13h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2Z" /><path d="M20 13h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a2 2 0 0 0 2-2Z" /></I>;
export const CheckIcon = (p) => <I {...p}><path d="m4 12 5 5L20 6" /></I>;
export const ClockIcon = (p) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></I>;
export const ZapIcon = (p) => <I {...p}><path d="M13 2 4 14h6l-1 8 9-12h-6Z" /></I>;
export const BoxIcon = (p) => <I {...p}><path d="M21 8 12 3 3 8v8l9 5 9-5Z" /><path d="M3 8l9 5 9-5" /><path d="M12 13v8" /></I>;
export const ChatIcon = (p) => <I {...p}><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5Z" /></I>;
export const StarIcon = (p) => <I {...p}><path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-3-5.4 3 1.1-6L3.2 9.4l6.1-.8Z" /></I>;
export const TagIcon = (p) => <I {...p}><path d="M3 12 12 3h9v9l-9 9Z" /><circle cx="16.5" cy="7.5" r="1.2" /></I>;
export const TrashIcon = (p) => <I {...p}><path d="M3 6h18" /><path d="M8 6V4h8v2" /><path d="M5 6l1 15h12l1-15" /><path d="M10 11v6M14 11v6" /></I>;
export const PlusIcon = (p) => <I {...p}><path d="M12 5v14" /><path d="M5 12h14" /></I>;
export const MinusIcon = (p) => <I {...p}><path d="M5 12h14" /></I>;
export const FilterIcon = (p) => <I {...p}><path d="M4 5h16" /><path d="M7 12h10" /><path d="M10 19h4" /></I>;
export const UserIcon = (p) => <I {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-5 8-5s6.5 1 8 5" /></I>;
export const SendIcon = (p) => <I {...p}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4Z" /></I>;
export const MailIcon = (p) => <I {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></I>;
export const MapIcon = (p) => <I {...p}><path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></I>;
export const ScaleIcon = (p) => <I {...p}><path d="M12 3v18" /><path d="M5 7h14" /><path d="m5 7-3 7h6Z" /><path d="m19 7-3 7h6Z" /><path d="M8 21h8" /></I>;
export const LayersIcon = (p) => <I {...p}><path d="M12 2 2 8l10 6 10-6Z" /><path d="m2 13 10 6 10-6" /></I>;
export const CpuIcon = (p) => <I {...p}><rect x="5" y="5" width="14" height="14" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></I>;
export const SparkIcon = (p) => <I {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></I>;
export const BookIcon = (p) => <I {...p}><path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z" /><path d="M4 19a2 2 0 0 0 2 2h13" /></I>;
export const CalendarIcon = (p) => <I {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></I>;
export const ShareIcon = (p) => <I {...p}><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8.3 10.8 7.4-3.6M8.3 13.2l7.4 3.6" /></I>;
export const WalletIcon = (p) => <I {...p}><rect x="2" y="6" width="20" height="14" rx="2" /><path d="M2 10h20" /><path d="M16 15h2" /></I>;
export const HomeIcon = (p) => <I {...p}><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1Z" /></I>;
export const InstagramIcon = (p) => <I {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" /></I>;
export const TelegramIcon = (p) => <I {...p}><path d="m21 4-3 15-5-4-3 4-1-5 11-10-14 5-4-2Z" /></I>;
export const WhatsappIcon = (p) => <I {...p}><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" /><path d="M9 8.5c0 4 2.5 6.5 6.5 6.5l.5-2-2-1-1 1c-1.2-.6-2-1.4-2.5-2.5l1-1-1-2Z" /></I>;
