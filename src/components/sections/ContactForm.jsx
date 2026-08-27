import { useState } from 'react';
import { Send } from 'lucide-react';
export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.website?.value) { setStatus('Message sent successfully! I will reply soon.'); form.reset(); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setStatus('Demo mode: form submitted! Configure EmailJS keys in ContactForm.jsx');
    form.reset();
    setLoading(false);
  };
  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-[24px] p-8" style={{ boxShadow: 'var(--shadow)' }}>
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
  );
}
