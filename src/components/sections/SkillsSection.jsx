import { LayoutDashboard, Server } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import SkillBar from '../ui/SkillBar';
import { useEffect } from 'react';

export default function SkillsSection() {
  useEffect(() => {
    const fills = document.querySelectorAll('.skill-fill');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.style.width = e.target.getAttribute('data-progress') + '%'; io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    fills.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container mx-auto max-w-7xl px-6 relative">
        <SectionHeader centered label="Skills" title='Technologies I <span class="grad-text">Master</span>' subtitle="Continuous learning since 2016 — these are the tools I use to ship production-grade software." />
        <div className="grid lg:grid-cols-2 gap-14">
          <div className="glass rounded-[24px] p-8">
            <h3 className="text-lg font-extrabold mb-6 flex items-center"><LayoutDashboard className="mr-3" style={{ color: 'var(--primary)' }} />Frontend</h3>
            <SkillBar name="HTML / CSS / Tailwind" percent={98} />
            <SkillBar name="JavaScript / TypeScript" percent={96} />
            <SkillBar name="React / Next.js" percent={94} />
            <SkillBar name="Three.js / WebGL" percent={82} />
          </div>
          <div className="glass rounded-[24px] p-8">
            <h3 className="text-lg font-extrabold mb-6 flex items-center"><Server className="mr-3" style={{ color: 'var(--primary)' }} />Backend & DevOps</h3>
            <SkillBar name="Node.js / Express.js" percent={95} />
            <SkillBar name="Python / FastAPI" percent={90} />
            <SkillBar name="MongoDB / PostgreSQL" percent={93} />
            <SkillBar name="Docker / CI/CD / Linux" percent={89} />
          </div>
        </div>
      </div>
    </section>
  );
}
