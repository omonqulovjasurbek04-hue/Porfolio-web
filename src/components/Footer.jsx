import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Phone, MapPin, Heart, Send } from 'lucide-react';
import BrandIcon from './BrandIcon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="footer-grid">
          <div>
            <Link to="/" className="nav-logo mb-4">
              <span className="logo-mark">&lt;/&gt;</span><span>Jasurbek<span className="grad-text">.dev</span></span>
            </Link>
            <p className="section-sub" style={{ maxWidth: 340 }}>
              Full Stack Developer with 10+ years of experience crafting premium,
              high-performance digital products for the modern web.
            </p>
            <div className="flex gap-3 mt-6">
              <a className="social-btn" href="#" aria-label="GitHub"><BrandIcon name="github" /></a>
              <a className="social-btn" href="#" aria-label="LinkedIn"><BrandIcon name="linkedin" /></a>
              <a className="social-btn" href="#" aria-label="Telegram"><Send size={18} /></a>
              <a className="social-btn" href="#" aria-label="X"><BrandIcon name="x" /></a>
            </div>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/"><ChevronRight size={16} /> Home</Link></li>
              <li><Link to="/about"><ChevronRight size={16} /> About</Link></li>
              <li><Link to="/projects"><ChevronRight size={16} /> Projects</Link></li>
              <li><Link to="/experience"><ChevronRight size={16} /> Experience</Link></li>
              <li><Link to="/contact"><ChevronRight size={16} /> Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@jasurbek.dev"><Mail size={16} /> hello@jasurbek.dev</a></li>
              <li><a href="tel:+998901234567"><Phone size={16} /> +998 90 123 45 67</a></li>
              <li><a href="#"><MapPin size={16} /> Tashkent, Uzbekistan</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Jasurbek Omonqulov. All rights reserved.</span>
          <span>Built with <Heart size={14} style={{ color: 'var(--primary)', display: 'inline' }} /> React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
