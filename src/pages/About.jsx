import { useEffect } from 'react';
import { Sparkles, CircleCheck, CalendarCheck, Network, Coffee, GitBranch, BadgeCheck, Award, Medal, Trophy, FileCode, Palette, Wind, Braces, Atom, Box, Hexagon, Zap, Database, HardDrive, Ship, Terminal, Bot, Cloud, Layers, Phone, Code } from 'lucide-react';
import BrandIcon from '../components/BrandIcon';

const techs = [
  { icon: FileCode, label: 'HTML5' }, { icon: Palette, label: 'CSS3' }, { icon: Wind, label: 'Tailwind' },
  { icon: Braces, label: 'JavaScript' }, { icon: Braces, label: 'TypeScript' }, { icon: Atom, label: 'React' },
  { icon: Box, label: 'Next.js' }, { icon: Hexagon, label: 'Node.js' }, { icon: Zap, label: 'Express.js' },
  { icon: Database, label: 'MongoDB' }, { icon: HardDrive, label: 'PostgreSQL' }, { icon: Ship, label: 'Docker' },
  { icon: GitBranch, label: 'Git' }, { icon: Terminal, label: 'Linux' },
  { icon: Bot, label: 'AI / LLM' }, { icon: Cloud, label: 'AWS' }, { icon: Layers, label: 'Redis' },
  { icon: Phone, label: 'React Native' }, { icon: Code, label: 'Python' },
];

export default function About() {
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

  useEffect(() => {
    const rings = document.querySelectorAll('[data-ring]');
    const C = 2 * Math.PI * 50;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const fg = e.target.querySelector('.ring-fg');
          const pct = parseFloat(e.target.getAttribute('data-ring'));
          if (fg) fg.style.strokeDashoffset = C * (1 - pct / 100);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    rings.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <span className="section-label justify-center">About Me</span>
          <h1 className="section-title">The developer behind <span className="grad-text">the code</span></h1>
          <p className="section-sub mx-auto">10+ years turning ambitious ideas into fast, reliable and beautiful software.</p>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="glass rounded-[28px] p-10 text-center" style={{ boxShadow: 'var(--shadow)' }}>
                <div className="mx-auto w-40 h-40 rounded-full grid place-items-center mb-6" style={{ background: 'var(--grad-primary)', boxShadow: '0 20px 60px -15px var(--primary)' }}>
                  <Sparkles size={56} color="white" />
                </div>
                <h3 className="text-2xl font-black">Jasurbek Omonqulov</h3>
                <p className="mt-1 mb-4" style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>Full Stack Developer</p>
                <div className="flex justify-center gap-3">
                  <a className="social-btn" href="#"><BrandIcon name="github" /></a>
                  <a className="social-btn" href="#"><BrandIcon name="linkedin" /></a>
                  <a className="social-btn" href="#"><Phone size={18} /></a>
                  <a className="social-btn" href="#"><BrandIcon name="x" /></a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="section-title">My Story</h2>
              <p className="section-sub mb-5">I started writing code at 14, built my first product at 18, and have spent the last decade shipping software used by millions. I've worked with startups, agencies and enterprise teams across 15+ countries.</p>
              <p className="section-sub mb-5">Today I specialize in full-stack architecture, AI integrations, real-time systems and cloud-native deployments — with a designer's eye for detail and an engineer's obsession with performance.</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3"><CircleCheck size={20} style={{ color: '#22c55e' }} /><span className="font-semibold">Clean Architecture</span></div>
                <div className="flex items-center gap-3"><CircleCheck size={20} style={{ color: '#22c55e' }} /><span className="font-semibold">Test-Driven Development</span></div>
                <div className="flex items-center gap-3"><CircleCheck size={20} style={{ color: '#22c55e' }} /><span className="font-semibold">CI/CD & DevOps</span></div>
                <div className="flex items-center gap-3"><CircleCheck size={20} style={{ color: '#22c55e' }} /><span className="font-semibold">UX-First Development</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card glass"><CalendarCheck className="icon mx-auto mb-2" style={{ color: 'var(--primary)' }} /><div className="value grad-text"><span data-counter="10" data-suffix="+">0</span></div><div className="label">Years Experience</div></div>
            <div className="stat-card glass"><Network className="icon mx-auto mb-2" style={{ color: 'var(--primary)' }} /><div className="value grad-text"><span data-counter="85" data-suffix="+">0</span></div><div className="label">Projects Shipped</div></div>
            <div className="stat-card glass"><Coffee className="icon mx-auto mb-2" style={{ color: 'var(--primary)' }} /><div className="value grad-text"><span data-counter="12000" data-suffix="+">0</span></div><div className="label">Cups of Coffee</div></div>
            <div className="stat-card glass"><GitBranch className="icon mx-auto mb-2" style={{ color: 'var(--primary)' }} /><div className="value grad-text"><span data-counter="9000" data-suffix="+">0</span></div><div className="label">Commits</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16"><span className="section-label justify-center">Tech Stack</span><h2 className="section-title">Technologies & <span className="grad-text">Tools</span></h2></div>
          <div className="tech-grid">
            {techs.map((t) => (
              <div key={t.label} className="tech-item"><t.icon size={18} /> {t.label}</div>
            ))}
            <div className="tech-item"><BrandIcon name="github" size={18} /> GitHub</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16"><span className="section-label justify-center">Expertise</span><h2 className="section-title">Areas of <span className="grad-text">Expertise</span></h2></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
            {[
              { pct: 98, label: 'Frontend' },
              { pct: 95, label: 'Backend' },
              { pct: 90, label: 'DevOps' },
              { pct: 85, label: 'AI / ML' },
            ].map((r) => (
              <div key={r.label} className="text-center">
                <div className="ring-wrap mx-auto" data-ring={r.pct}>
                  <svg width="130" height="130" viewBox="0 0 120 120"><circle className="ring-bg" cx="60" cy="60" r="50" strokeWidth="9" fill="none"></circle><circle className="ring-fg" cx="60" cy="60" r="50" strokeWidth="9" strokeDasharray="314.16" strokeDashoffset="314.16"></circle></svg>
                  <div className="ring-center grad-text">{r.pct}%</div>
                </div>
                <p className="font-bold mt-4">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16"><span className="section-label justify-center">Credentials</span><h2 className="section-title">Certificates & <span className="grad-text">Awards</span></h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-[20px] p-6 text-center"><BadgeCheck className="mx-auto mb-4" style={{ color: 'var(--primary)' }} size={36} /><h3 className="font-extrabold">AWS Solutions Architect</h3><p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Amazon Web Services · 2023</p></div>
            <div className="glass rounded-[20px] p-6 text-center"><Award className="mx-auto mb-4" style={{ color: 'var(--primary)' }} size={36} /><h3 className="font-extrabold">Google Cloud Engineer</h3><p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Google Cloud · 2022</p></div>
            <div className="glass rounded-[20px] p-6 text-center"><Medal className="mx-auto mb-4" style={{ color: 'var(--primary)' }} size={36} /><h3 className="font-extrabold">MongoDB Developer</h3><p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>MongoDB University · 2021</p></div>
            <div className="glass rounded-[20px] p-6 text-center"><Trophy className="mx-auto mb-4" style={{ color: 'var(--primary)' }} size={36} /><h3 className="font-extrabold">Hackathon Champion</h3><p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Startup Weekend · 2019</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
