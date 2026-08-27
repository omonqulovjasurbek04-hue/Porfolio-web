import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => setHidden(true), 350);
      } else {
        setProgress(Math.round(p));
      }
    }, 90);
    document.body.style.overflow = 'hidden';
    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (hidden) document.body.style.overflow = '';
  }, [hidden]);

  if (hidden) return null;

  return (
    <div className="loader" id="loader">
      <div className="loader-inner">
        <div className="loader-logo grad-text">Jasurbek.dev</div>
        <div className="loader-bar"><div className="loader-bar-fill" style={{ width: `${progress}%` }}></div></div>
        <div className="loader-percent">{progress}%</div>
      </div>
    </div>
  );
}
