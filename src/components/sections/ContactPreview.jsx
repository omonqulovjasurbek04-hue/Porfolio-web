import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import BrandIcon from '../BrandIcon';
import ContactInfoItem from '../ui/ContactInfoItem';

export default function ContactPreview() {
  return (
    <section className="section">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let's Build Something <span className="grad-text">Great</span></h2>
            <p className="section-sub mb-10">Have a project in mind, or want to talk about your team's next big idea? My inbox is always open — I usually reply within 24 hours.</p>
            <ContactInfoItem icon={Mail} label="Email" value="hello@jasurbek.dev" />
            <ContactInfoItem icon={Phone} label="Phone" value="+998 90 123 45 67" />
            <ContactInfoItem icon={MapPin} label="Location" value="Tashkent, Uzbekistan (Remote-friendly)" />
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
  );
}
