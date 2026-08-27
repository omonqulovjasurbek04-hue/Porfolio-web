export default function TimelineItem({ num, date, role, company, points }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <span className="timeline-num">{num}</span>
        <div className="timeline-date">{date}</div>
        <div className="timeline-role">{role}</div>
        <div className="timeline-company">{company}</div>
        <div className="timeline-desc"><ul>{points.map((p, i) => <li key={i}>{p}</li>)}</ul></div>
      </div>
    </div>
  );
}
