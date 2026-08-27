export default function TechItem({ icon: Icon, label, brand }) {
  return (
    <div className="tech-item">
      {Icon ? <Icon size={18} /> : brand}
      {label}
    </div>
  );
}
