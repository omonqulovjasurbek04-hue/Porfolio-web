import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const doc = document.documentElement.scrollHeight - window.innerHeight;
      setPct(doc > 0 ? top / doc : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress" id="scroll-progress" style={{ transform: `scaleX(${pct})` }}></div>;
}
