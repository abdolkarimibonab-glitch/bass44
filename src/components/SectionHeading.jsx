export default function SectionHeading({ title, subtitle, tone = 'light', id }) {
  return (
    <div className={`section-heading section-heading-${tone}`}>
      <h2 id={id}>{title}</h2>
      <span className="section-heading-divider" aria-hidden="true" />
      {subtitle && <p className="section-heading-sub">{subtitle}</p>}
    </div>
  );
}
