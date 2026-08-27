import { useEffect } from 'react';
export default function useCounter() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-counter]');
    const animate = (el) => {
      const target = parseFloat(el.getAttribute('data-counter'));
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1800;
      const start = performance.now();
      const tick = (now) => {
        const prog = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - prog, 4);
        el.textContent = Math.round(target * eased) + suffix;
        if (prog < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
