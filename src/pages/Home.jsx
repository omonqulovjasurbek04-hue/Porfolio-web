import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Send, Briefcase, Code, Trophy, Atom, Hexagon, Database, HardDrive, Ship, GitBranch, Terminal, Bot, Cloud, LayoutDashboard, Server, Users, Globe, ListTree, Mail, Phone, MapPin } from 'lucide-react';
import BrandIcon from '../components/BrandIcon';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import Typed from 'typed.js';

function useCounter() {
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
      entries.forEach((e) => {
        if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  const typedRef = useRef(null);
  useCounter();

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: ['Full Stack Developer', 'Senior Software Engineer', 'Node.js & React Specialist', 'Cloud & DevOps Architect', '10+ Years of Experience'],
      typeSpeed: 55, backSpeed: 32, backDelay: 1500, loop: true
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const fills = document.querySelectorAll('.skill-fill');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.style.width = e.target.getAttribute('data-progress') + '%'; io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    fills.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero">
        <canvas id="hero-canvas"></canvas>
        <div className="hero-glow g1"></div>
        <div className="hero-glow g2"></div>
        <div className="hero-content w-full flex flex-col md:flex-row items-center justify-between gap-14 max-w-7xl mx-auto">
          <div className="flex-1 min-w-0" style={{ maxWidth: 640 }}>
            <div className="hero-badge"><span className="dot"></span> Available for freelance & full-time roles</div>
            <h1 className="hero-title">Hi, I'm <span className="grad-text">Jasurbek</span><br />Omonqulov</h1>
            <div className="typed-wrap">I'm a <span ref={typedRef} className="typed"></span></div>
            <p className="hero-desc">Senior Full Stack Developer with 10+ years of experience designing and shipping scalable web, mobile, AI and cloud products — from first commit to production at global scale.</p>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary"><Rocket size={18} /> View My Work</Link>
              <Link to="/contact" className="btn btn-outline"><Send size={18} /> Let's Talk</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><div className="num grad-text"><span data-counter="10" data-suffix="+">0</span></div><div className="lbl">Years Experience</div></div>
              <div className="hero-stat"><div className="num grad-text"><span data-counter="85" data-suffix="+">0</span></div><div className="lbl">Projects Shipped</div></div>
              <div className="hero-stat"><div className="num grad-text"><span data-counter="120" data-suffix="+">0</span></div><div className="lbl">Happy Clients</div></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator"><div className="scroll-mouse"></div><span>Scroll</span></div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section" id="about">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">About Me</span>
              <h2 className="section-title">Engineer at heart, <span className="grad-text">builder</span> by trade</h2>
              <p className="section-sub mb-6">I turn complex problems into elegant, high-performance products. Over the last decade I've led engineering teams, architected microservices, trained AI pipelines and built products used by millions.</p>
              <p className="section-sub mb-8">My philosophy: <span className="font-mono text-[var(--primary)]">simplicity &gt; complexity</span>, performance is a feature, and every pixel should earn its place.</p>
              <div className="grid grid-cols-3 gap-5 mb-10">
                <div className="stat-card glass"><Briefcase className="icon mx-auto mb-2" style={{ color: 'var(--primary)' }} /><div className="value grad-text"><span data-counter="10" data-suffix="+">0</span></div><div className="label">Years Experience</div></div>
                <div className="stat-card glass"><Code className="icon mx-auto mb-2" style={{ color: 'var(--primary)' }} /><div className="value grad-text"><span data-counter="35" data-suffix="+">0</span></div><div className="label">Technologies</div></div>
                <div className="stat-card glass"><Trophy className="icon mx-auto mb-2" style={{ color: 'var(--primary)' }} /><div className="value grad-text"><span data-counter="12" data-suffix="x">0</span></div><div className="label">Awards Won</div></div>
              </div>
              <Link to="/about" className="btn btn-outline">More About Me</Link>
            </div>
            <div>
              <div className="glass rounded-[24px] p-8" style={{ boxShadow: 'var(--shadow)' }}>
                <h3 className="text-xl font-extrabold mb-6">Core Stack</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="tech-item"><Atom size={18} /> React</div>
                  <div className="tech-item"><Hexagon size={18} /> Node.js</div>
                  <div className="tech-item"><Database size={18} /> MongoDB</div>
                  <div className="tech-item"><HardDrive size={18} /> PostgreSQL</div>
                  <div className="tech-item"><Ship size={18} /> Docker</div>
                  <div className="tech-item"><GitBranch size={18} /> Git</div>
                  <div className="tech-item"><Terminal size={18} /> Linux</div>
                  <div className="tech-item"><Bot size={18} /> AI / ML</div>
                  <div className="tech-item"><Cloud size={18} /> AWS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills" style={{ background: 'var(--bg-alt)' }}>
        <div className="container mx-auto max-w-7xl px-6 relative">
          <div className="text-center mb-16">
            <span className="section-label justify-center">Skills</span>
            <h2 className="section-title">Technologies I <span className="grad-text">Master</span></h2>
            <p className="section-sub mx-auto">Continuous learning since 2016 — these are the tools I use to ship production-grade software.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-14">
            <div className="glass rounded-[24px] p-8">
              <h3 className="text-lg font-extrabold mb-6 flex items-center"><LayoutDashboard className="mr-3" style={{ color: 'var(--primary)' }} />Frontend</h3>
              <div className="skill-row"><div className="skill-head"><span>HTML / CSS / Tailwind</span><span className="pct">98%</span></div><div className="skill-track"><div className="skill-fill" data-progress="98"></div></div></div>
              <div className="skill-row"><div className="skill-head"><span>JavaScript / TypeScript</span><span className="pct">96%</span></div><div className="skill-track"><div className="skill-fill" data-progress="96"></div></div></div>
              <div className="skill-row"><div className="skill-head"><span>React / Next.js</span><span className="pct">94%</span></div><div className="skill-track"><div className="skill-fill" data-progress="94"></div></div></div>
              <div className="skill-row"><div className="skill-head"><span>Three.js / WebGL</span><span className="pct">82%</span></div><div className="skill-track"><div className="skill-fill" data-progress="82"></div></div></div>
            </div>
            <div className="glass rounded-[24px] p-8">
              <h3 className="text-lg font-extrabold mb-6 flex items-center"><Server className="mr-3" style={{ color: 'var(--primary)' }} />Backend & DevOps</h3>
              <div className="skill-row"><div className="skill-head"><span>Node.js / Express.js</span><span className="pct">95%</span></div><div className="skill-track"><div className="skill-fill" data-progress="95"></div></div></div>
              <div className="skill-row"><div className="skill-head"><span>Python / FastAPI</span><span className="pct">90%</span></div><div className="skill-track"><div className="skill-fill" data-progress="90"></div></div></div>
              <div className="skill-row"><div className="skill-head"><span>MongoDB / PostgreSQL</span><span className="pct">93%</span></div><div className="skill-track"><div className="skill-fill" data-progress="93"></div></div></div>
              <div className="skill-row"><div className="skill-head"><span>Docker / CI/CD / Linux</span><span className="pct">89%</span></div><div className="skill-track"><div className="skill-fill" data-progress="89"></div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="section" id="projects">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="section-label justify-center">Portfolio</span>
            <h2 className="section-title">Featured <span className="grad-text">Projects</span></h2>
            <p className="section-sub mx-auto">A selection of products I've designed, built and shipped over the last decade.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-primary">Explore All Projects</Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="section-label justify-center">Career</span>
            <h2 className="section-title">A Decade of <span className="grad-text">Impact</span></h2>
            <p className="section-sub mx-auto">From startup engineer to leading platform teams.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            <div className="glass rounded-[24px] p-7 text-center"><Rocket className="mx-auto mb-4" style={{ color: 'var(--primary)' }} /><div className="value text-4xl font-black grad-text"><span data-counter="25" data-suffix="+">0</span></div><div className="mt-2" style={{ color: 'var(--text-muted)' }}>Products Launched</div></div>
            <div className="glass rounded-[24px] p-7 text-center"><Users className="mx-auto mb-4" style={{ color: 'var(--primary)' }} /><div className="value text-4xl font-black grad-text"><span data-counter="40" data-suffix="+">0</span></div><div className="mt-2" style={{ color: 'var(--text-muted)' }}>Developers Mentored</div></div>
            <div className="glass rounded-[24px] p-7 text-center"><Globe className="mx-auto mb-4" style={{ color: 'var(--primary)' }} /><div className="value text-4xl font-black grad-text"><span data-counter="15" data-suffix="+">0</span></div><div className="mt-2" style={{ color: 'var(--text-muted)' }}>Countries Served</div></div>
          </div>
          <div className="text-center"><Link to="/experience" className="btn btn-outline"><ListTree size={18} /> View My Journey</Link></div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="section" id="contact">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Contact</span>
              <h2 className="section-title">Let's Build Something <span className="grad-text">Great</span></h2>
              <p className="section-sub mb-10">Have a project in mind, or want to talk about your team's next big idea? My inbox is always open — I usually reply within 24 hours.</p>
              <div className="contact-info-item"><div className="icon"><Mail size={18} /></div><div><div className="label">Email</div><div className="value">hello@jasurbek.dev</div></div></div>
              <div className="contact-info-item"><div className="icon"><Phone size={18} /></div><div><div className="label">Phone</div><div className="value">+998 90 123 45 67</div></div></div>
              <div className="contact-info-item"><div className="icon"><MapPin size={18} /></div><div><div className="label">Location</div><div className="value">Tashkent, Uzbekistan (Remote-friendly)</div></div></div>
              <div className="flex gap-3 mt-6">
                <a className="social-btn" href="#"><BrandIcon name="github" /></a>
                <a className="social-btn" href="#"><BrandIcon name="linkedin" /></a>
                <a className="social-btn" href="#"><Send size={18} /></a>
                <a className="social-btn" href="#"><BrandIcon name="x" /></a>
              </div>
            </div>
            <div>
              <form className="glass-strong rounded-[24px] p-8" style={{ boxShadow: 'var(--shadow)' }}>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div><label className="text-sm font-semibold mb-2 block">Your Name</label><input className="form-input" placeholder="John Doe" /></div>
                  <div><label className="text-sm font-semibold mb-2 block">Your Email</label><input className="form-input" placeholder="john@email.com" /></div>
                </div>
                <div className="mb-5"><label className="text-sm font-semibold mb-2 block">Subject</label><input className="form-input" placeholder="Project inquiry" /></div>
                <div className="mb-6"><label className="text-sm font-semibold mb-2 block">Message</label><textarea className="form-textarea" placeholder="Tell me about your project..."></textarea></div>
                <Link to="/contact" className="btn btn-primary w-full justify-center"><Send size={18} /> Send Message</Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
