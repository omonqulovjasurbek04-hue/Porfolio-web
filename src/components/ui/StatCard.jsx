export default function StatCard({ icon: Icon, value, suffix = '', label }) {
  return (
    <div className="stat-card glass">
      {Icon && <Icon className="icon mx-auto mb-2" style={{ color: 'var(--primary)' }} />}
      <div className="value grad-text"><span data-counter={String(value)} data-suffix={suffix}>0</span></div>
      <div className="label">{label}</div>
    </div>
  );
}
