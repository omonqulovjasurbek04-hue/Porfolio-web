export default function PageHero({ label, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <span className="section-label justify-center">{label}</span>
        <h1 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className="section-sub mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
