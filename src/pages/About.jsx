import { useEffect } from 'react';
import { Sparkles, CircleCheck, CalendarCheck, Network, Coffee, GitBranch, BadgeCheck, Award, Medal, Trophy, FileCode, Palette, Wind, Braces, Atom, Box, Hexagon, Zap, Database, HardDrive, Ship, Terminal, Bot, Cloud, Layers, Phone, Code } from 'lucide-react';
import BrandIcon from '../components/BrandIcon';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import StatCard from '../components/ui/StatCard';
import TechItem from '../components/ui/TechItem';
import Ring from '../components/ui/Ring';
import useCounter from '../hooks/useCounter';

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
  useCounter();
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
      <PageHero label="About Me" title='The developer behind <span class="grad-text">the code</span>' subtitle="10+ years turning ambitious ideas into fast, reliable and beautiful software." />

      <section className="section pt-4">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            <StatCard icon={CalendarCheck} value={10} suffix="+" label="Years Experience" />
            <StatCard icon={Network} value={85} suffix="+" label="Projects Shipped" />
            <StatCard icon={Coffee} value={12000} suffix="+" label="Cups of Coffee" />
            <StatCard icon={GitBranch} value={9000} suffix="+" label="Commits" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader centered label="Tech Stack" title='Technologies & <span class="grad-text">Tools</span>' />
          <div className="tech-grid">
            {techs.map((t) => <TechItem key={t.label} icon={t.icon} label={t.label} />)}
            <div className="tech-item"><BrandIcon name="github" size={18} /> GitHub</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader centered label="Expertise" title='Areas of <span class="grad-text">Expertise</span>' />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
            <Ring percent={98} label="Frontend" />
            <Ring percent={95} label="Backend" />
            <Ring percent={90} label="DevOps" />
            <Ring percent={85} label="AI / ML" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader centered label="Credentials" title='Certificates & <span class="grad-text">Awards</span>' />
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
