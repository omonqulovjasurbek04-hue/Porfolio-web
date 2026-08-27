export default function ContactInfoItem({ icon: Icon, label, value, href }) {
  return (
    <div className="contact-info-item">
      <div className="icon">{Icon && <Icon size={18} />}</div>
      <div>
        <div className="label">{label}</div>
        <div className="value">{href ? <a href={href}>{value}</a> : value}</div>
      </div>
    </div>
  );
}
