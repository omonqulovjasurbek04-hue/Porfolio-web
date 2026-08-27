import { ChartNoAxesColumn, Coins, Gauge, Users, GraduationCap, Laptop, Brain } from 'lucide-react';

export default function Experience() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <span className="section-label justify-center">Career</span>
          <h1 className="section-title">My <span className="grad-text">Journey</span></h1>
          <p className="section-sub mx-auto">A decade of engineering leadership, shipped products and career milestones.</p>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-num">01</span><div className="timeline-date">2023 — Present</div>
                <div className="timeline-role">Lead Full Stack Developer</div>
                <div className="timeline-company">NovaTech Solutions</div>
                <div className="timeline-desc"><ul><li>Leading a 12-engineer team shipping a SaaS platform for 300+ enterprise clients.</li><li>Architected a micro-frontend system that cut release cycles from weeks to hours.</li><li>Drove infrastructure costs down 40% through containerization and autoscaling.</li><li>Mentored 6 mid-level developers into senior roles.</li></ul></div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-num">02</span><div className="timeline-date">2020 — 2023</div>
                <div className="timeline-role">Senior Full Stack Engineer</div>
                <div className="timeline-company">CloudScale Systems</div>
                <div className="timeline-desc"><ul><li>Built a real-time analytics platform processing 2B+ events daily.</li><li>Designed the AI recommendation pipeline powering 35% of conversion lift.</li><li>Owned the migration from monolith to event-driven microservices.</li></ul></div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-num">03</span><div className="timeline-date">2017 — 2020</div>
                <div className="timeline-role">Full Stack Developer</div>
                <div className="timeline-company">PayFlow Fintech</div>
                <div className="timeline-desc"><ul><li>Delivered payment gateway integrations for 5 major banks.</li><li>Cut payment processing latency by 60% with a Node.js + Redis pipeline.</li><li>Achieved PCI-DSS compliance for the core platform.</li></ul></div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-num">04</span><div className="timeline-date">2015 — 2017</div>
                <div className="timeline-role">Junior → Mid-Level Developer</div>
                <div className="timeline-company">WebCraft Agency</div>
                <div className="timeline-desc"><ul><li>Shipped 40+ client websites and web applications end-to-end.</li><li>Introduced the agency's first automated CI/CD workflow.</li><li>Won "Best Developer of the Year" award (2016).</li></ul></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16"><span className="section-label justify-center">Milestones</span><h2 className="section-title">Key <span className="grad-text">Achievements</span></h2></div>
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
          <div className="text-center mb-16"><span className="section-label justify-center">Education</span><h2 className="section-title">Education & <span className="grad-text">Training</span></h2></div>
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
