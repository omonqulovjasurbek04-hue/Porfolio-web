import { useState } from 'react';
import { Bot, Send, Globe, Smartphone, Monitor } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'AI', icon: Bot },
  { key: 'bots', label: 'Bots', icon: Send },
  { key: 'web', label: 'Web', icon: Globe },
  { key: 'mobile', label: 'Mobile', icon: Smartphone },
  { key: 'desktop', label: 'Desktop', icon: Monitor },
];

export default function Projects() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <span className="section-label justify-center">Portfolio</span>
          <h1 className="section-title">Projects that <span className="grad-text">speak</span></h1>
          <p className="section-sub mx-auto">85+ products shipped across AI, bots, web, mobile and desktop. Here are the highlights.</p>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`filter-btn ${active === f.key ? 'active' : ''}`}
              >
                {f.icon ? <f.icon size={16} className="inline mr-2" /> : null}{f.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
