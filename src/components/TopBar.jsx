import { Link } from 'react-router-dom';
import { SITE, TOPBAR_ITEMS } from '../data/site.js';
import { TruckIcon, ShieldIcon, HeadsetIcon, PhoneIcon } from './Icons.jsx';

const ICONS = { truck: TruckIcon, shield: ShieldIcon, headset: HeadsetIcon };

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span className="topbar-slogan">{SITE.tagline}</span>
        <ul className="topbar-items">
          {TOPBAR_ITEMS.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.label}>
                <Icon size={14} />
                <span>{item.label}</span>
              </li>
            );
          })}
          <li>
            <a href={`tel:${SITE.phone}`} dir="ltr" className="topbar-phone">
              <PhoneIcon size={14} />
              <span>{SITE.phoneDisplay}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
