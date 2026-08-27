export default function SectionHeader({ label, title, subtitle, centered = false }) {
  return (
    <div className={centered ? 'text-center mb-16' : 'mb-16'}>
      <span className={`section-label ${centered ? 'justify-center' : ''}`}>{label}</span>
      <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && <p className={`section-sub ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  );
}
