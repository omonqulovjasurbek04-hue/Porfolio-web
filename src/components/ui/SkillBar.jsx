export default function SkillBar({ name, percent }) {
  return (
    <div className="skill-row">
      <div className="skill-head"><span>{name}</span><span className="pct">{percent}%</span></div>
      <div className="skill-track"><div className="skill-fill" data-progress={String(percent)}></div></div>
    </div>
  );
}
