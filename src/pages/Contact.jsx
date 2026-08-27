import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import BrandIcon from '../components/BrandIcon';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const hp = form.website?.value;
    if (hp) { setStatus('Message sent successfully! I will reply soon.'); form.reset(); return; }
    setLoading(true);
    const payload = {
      from_name: form.name.value,
      reply_to: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    try {
      const emailjs = await import('@emailjs/browser');
      // Replace YOUR_SERVICE_ID etc with real keys or fallback to demo
      if (emailjs && emailjs.send) {
        // Demo fallback — real send will fail without keys, so simulate
        await new Promise((r) => setTimeout(r, 1100));
        setStatus('Demo mode: form submitted! Configure EmailJS keys in Contact.jsx');
        form.reset();
      }
    } catch {
      setStatus('Failed to send. Please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <span className="section-label justify-center">Get in Touch</span>
          <h1 className="section-title">Let's <span className="grad-text">Connect</span></h1>
          <p className="section-sub mx-auto">Whether you have a project, an idea or just want to say hi — my inbox is always open.</p>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-2">
              <div className="contact-info-item"><div className="icon"><Mail size={18} /></div><div><div className="label">Email</div><div className="value"><a href="mailto:hello@jasurbek.dev">hello@jasurbek.dev</a></div></div></div>
              <div className="contact-info-item"><div className="icon"><Phone size={18} /></div><div><div className="label">Phone / WhatsApp</div><div className="value"><a href="tel:+998901234567">+998 90 123 45 67</a></div></div></div>
              <div className="contact-info-item"><div className="icon"><MapPin size={18} /></div><div><div className="label">Location</div><div className="value">Tashkent, Uzbekistan · Remote worldwide</div></div></div>
              <div className="contact-info-item"><div className="icon"><Clock size={18} /></div><div><div className="label">Availability</div><div className="value" style={{ color: '#22c55e' }}>Open to projects & full-time</div></div></div>
              <h3 className="text-lg font-extrabold mt-8 mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                <a className="social-btn" href="#"><BrandIcon name="github" /></a>
                <a className="social-btn" href="#"><BrandIcon name="linkedin" /></a>
                <a className="social-btn" href="#"><Send size={18} /></a>
                <a className="social-btn" href="#"><BrandIcon name="x" /></a>
                <a className="social-btn" href="#"><BrandIcon name="instagram" /></a>
                <a className="social-btn" href="#"><BrandIcon name="youtube" /></a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-strong rounded-[24px] p-8" style={{ boxShadow: 'var(--shadow)' }}>
                <input type="text" name="website" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <h3 className="text-xl font-extrabold mb-6">Send a Message</h3>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div><label className="text-sm font-semibold mb-2 block" htmlFor="name">Your Name</label><input className="form-input" id="name" name="name" placeholder="John Doe" required /></div>
                  <div><label className="text-sm font-semibold mb-2 block" htmlFor="email">Your Email</label><input className="form-input" id="email" name="email" type="email" placeholder="john@email.com" required /></div>
                </div>
                <div className="mb-5"><label className="text-sm font-semibold mb-2 block" htmlFor="subject">Subject</label><input className="form-input" id="subject" name="subject" placeholder="Project inquiry" required /></div>
                <div className="mb-6"><label className="text-sm font-semibold mb-2 block" htmlFor="message">Message</label><textarea className="form-textarea" id="message" name="message" placeholder="Tell me about your project..." required></textarea></div>
                <button type="submit" disabled={loading} className="btn btn-primary w-full justify-center">
                  {loading ? <><span className="spinner"></span> Sending...</> : <><Send size={18} /> Send Message</>}
                </button>
                {status && <p className="text-center mt-4 text-sm" style={{ color: status.includes('Failed') ? '#ef4444' : '#22c55e' }}>{status}</p>}
              </form>
            </div>
          </div>
          <div className="map-wrap mt-20">
            <iframe src="https://www.google.com/maps?q=Tashkent,Uzbekistan&z=11&output=embed" width="100%" height="420" style={{ border: 0, display: 'block' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Tashkent"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
