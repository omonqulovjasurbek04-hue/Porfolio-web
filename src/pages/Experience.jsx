import { ChartNoAxesColumn, Coins, Gauge, Users, GraduationCap, Laptop, Brain } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/sections/Timeline';

export default function Experience() {
  return (
    <>
      <PageHero label="Career" title='My <span class="grad-text">Journey</span>' subtitle="A decade of engineering leadership, shipped products and career milestones." />
      <section className="section pt-4">
        <div className="container mx-auto max-w-7xl px-6"><Timeline /></div>
      </section>
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader centered label="Milestones" title='Key <span class="grad-text">Achievements</span>' />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-[20px] p-7"><ChartNoAxesColumn size={32} className="mb-4" style={{ color: 'var(--primary)' }} /><h3 className="font-extrabold text-lg mb-2">2B+ Events/Day</h3><p className="text-sm" style={{ color: 'var(--text-muted)' }}>Real-time platform processing two billion events daily with sub-100ms p95 latency.</p></div>
            <div className="glass rounded-[20px] p-7"><Coins size={32} className="mb-4" style={{ color: 'var(--primary)' }} /><h3 className="font-extrabold text-lg mb-2">$12M+ Revenue</h3><p className="text-sm" style={{ color: 'var(--text-muted)' }}>E-commerce platform I architected now processes over $12M in annual transactions.</p></div>
            <div className="glass rounded-[20px] p-7"><Gauge size={32} className="mb-4" style={{ color: 'var(--primary)' }} /><h3 className="font-extrabold text-lg mb-2">99.9% Uptime</h3><p className="text-sm" style={{ color: 'var(--text-muted)' }}>Built and maintained systems with enterprise-grade availability SLAs.</p></div>
            <div className="glass rounded-[20px] p-7"><Users size={32} className="mb-4" style={{ color: 'var(--primary)' }} /><h3 className="font-extrabold text-lg mb-2">40+ Engineers</h3><p className="text-sm" style={{ color: 'var(--text-muted)' }}>Mentored and leveled-up more than forty developers across my career.</p></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader centered label="Education" title='Education & <span class="grad-text">Training</span>' />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-[20px] p-7 text-center"><GraduationCap size={32} className="mx-auto mb-4" style={{ color: 'var(--primary)' }} /><h3 className="font-extrabold">B.Sc. Computer Science</h3><p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Tashkent University of Information Technologies · 2011—2015</p></div>
            <div className="glass rounded-[20px] p-7 text-center"><Laptop size={32} className="mx-auto mb-4" style={{ color: 'var(--primary)' }} /><h3 className="font-extrabold">Full Stack Nanodegree</h3><p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Udacity · 2016</p></div>
            <div className="glass rounded-[20px] p-7 text-center"><Brain size={32} className="mx-auto mb-4" style={{ color: 'var(--primary)' }} /><h3 className="font-extrabold">AI & Machine Learning</h3><p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Coursera · Stanford · 2021</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
