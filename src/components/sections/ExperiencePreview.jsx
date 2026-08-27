import { Link } from 'react-router-dom';
import { Rocket, Users, Globe, ListTree } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

export default function ExperiencePreview() {
  return (
    <section className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader centered label="Career" title='A Decade of <span class="grad-text">Impact</span>' subtitle="From startup engineer to leading platform teams." />
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          <div className="glass rounded-[24px] p-7 text-center"><Rocket className="mx-auto mb-4" style={{ color: 'var(--primary)' }} /><div className="value text-4xl font-black grad-text"><span data-counter="25" data-suffix="+">0</span></div><div className="mt-2" style={{ color: 'var(--text-muted)' }}>Products Launched</div></div>
          <div className="glass rounded-[24px] p-7 text-center"><Users className="mx-auto mb-4" style={{ color: 'var(--primary)' }} /><div className="value text-4xl font-black grad-text"><span data-counter="40" data-suffix="+">0</span></div><div className="mt-2" style={{ color: 'var(--text-muted)' }}>Developers Mentored</div></div>
          <div className="glass rounded-[24px] p-7 text-center"><Globe className="mx-auto mb-4" style={{ color: 'var(--primary)' }} /><div className="value text-4xl font-black grad-text"><span data-counter="15" data-suffix="+">0</span></div><div className="mt-2" style={{ color: 'var(--text-muted)' }}>Countries Served</div></div>
        </div>
        <div className="text-center"><Link to="/experience" className="btn btn-outline"><ListTree size={18} /> View My Journey</Link></div>
      </div>
    </section>
  );
}
