import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Send } from 'lucide-react';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef(null);
  useEffect(() => {
    if (!typedRef.current) return;
    const t = new Typed(typedRef.current, {
      strings: ['Full Stack Developer', 'Senior Software Engineer', 'Node.js & React Specialist', 'Cloud & DevOps Architect', '10+ Years of Experience'],
      typeSpeed: 55, backSpeed: 32, backDelay: 1500, loop: true,
    });
    return () => t.destroy();
  }, []);
  return (
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
  );
}
