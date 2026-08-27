import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import BrandIcon from '../components/BrandIcon';
import PageHero from '../components/ui/PageHero';
import ContactInfoItem from '../components/ui/ContactInfoItem';
import ContactForm from '../components/sections/ContactForm';

export default function Contact() {
  return (
    <>
      <PageHero label="Get in Touch" title='Let&apos;s <span class="grad-text">Connect</span>' subtitle="Whether you have a project, an idea or just want to say hi — my inbox is always open." />
      <section className="section pt-4">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-2">
              <ContactInfoItem icon={Mail} label="Email" value="hello@jasurbek.dev" href="mailto:hello@jasurbek.dev" />
              <ContactInfoItem icon={Phone} label="Phone / WhatsApp" value="+998 90 123 45 67" href="tel:+998901234567" />
              <ContactInfoItem icon={MapPin} label="Location" value="Tashkent, Uzbekistan · Remote worldwide" />
              <ContactInfoItem icon={Clock} label="Availability" value="Open to projects & full-time" />
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
            <div className="lg:col-span-3"><ContactForm /></div>
          </div>
          <div className="map-wrap mt-20">
            <iframe src="https://www.google.com/maps?q=Tashkent,Uzbekistan&z=11&output=embed" width="100%" height="420" style={{ border: 0, display: 'block' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Tashkent"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
