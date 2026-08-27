import { Link } from 'react-router-dom';
import { Briefcase, Code, Trophy, Atom, Hexagon, Database, HardDrive, Ship, GitBranch, Terminal, Bot, Cloud } from 'lucide-react';
import StatCard from '../ui/StatCard';
import TechItem from '../ui/TechItem';

export default function AboutPreview() {
  return (
    <section className="section" id="about">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title">Engineer at heart, <span className="grad-text">builder</span> by trade</h2>
            <p className="section-sub mb-6">I turn complex problems into elegant, high-performance products. Over the last decade I've led engineering teams, architected microservices, trained AI pipelines and built products used by millions.</p>
            <p className="section-sub mb-8">My philosophy: <span className="font-mono text-[var(--primary)]">simplicity &gt; complexity</span>, performance is a feature, and every pixel should earn its place.</p>
            <div className="grid grid-cols-3 gap-5 mb-10">
              <StatCard icon={Briefcase} value={10} suffix="+" label="Years Experience" />
              <StatCard icon={Code} value={35} suffix="+" label="Technologies" />
              <StatCard icon={Trophy} value={12} suffix="x" label="Awards Won" />
            </div>
            <Link to="/about" className="btn btn-outline">More About Me</Link>
          </div>
          <div>
            <div className="glass rounded-[24px] p-8" style={{ boxShadow: 'var(--shadow)' }}>
              <h3 className="text-xl font-extrabold mb-6">Core Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <TechItem icon={Atom} label="React" />
                <TechItem icon={Hexagon} label="Node.js" />
                <TechItem icon={Database} label="MongoDB" />
                <TechItem icon={HardDrive} label="PostgreSQL" />
                <TechItem icon={Ship} label="Docker" />
                <TechItem icon={GitBranch} label="Git" />
                <TechItem icon={Terminal} label="Linux" />
                <TechItem icon={Bot} label="AI / ML" />
                <TechItem icon={Cloud} label="AWS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
