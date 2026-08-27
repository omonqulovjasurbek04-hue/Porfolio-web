import { useEffect } from 'react';
export default function Ring({ percent, label }) {
  useEffect(() => {
    const el = document.querySelector(`[data-ring="${percent}"] .ring-fg`);
    // handled via observer in parent, but fallback
  }, [percent]);
  return (
    <div className="text-center">
      <div className="ring-wrap mx-auto" data-ring={String(percent)}>
        <svg width="130" height="130" viewBox="0 0 120 120">
          <circle className="ring-bg" cx="60" cy="60" r="50" strokeWidth="9" fill="none"></circle>
          <circle className="ring-fg" cx="60" cy="60" r="50" strokeWidth="9" strokeDasharray="314.16" strokeDashoffset="314.16"></circle>
        </svg>
        <div className="ring-center grad-text">{percent}%</div>
      </div>
      <p className="font-bold mt-4">{label}</p>
    </div>
  );
}
