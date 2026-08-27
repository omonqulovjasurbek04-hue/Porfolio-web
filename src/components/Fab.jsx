import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ArrowUp, Mail, FileDown } from 'lucide-react';
import BrandIcon from './BrandIcon';

export default function Fab() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e) => {
      if (!e.target.closest('#fab')) setOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);
  return (
    <div className="fab" id="fab" onClick={() => setOpen((v) => !v)}>
      <Plus size={20} className={`fab-icon ${open ? 'open' : ''}`} id="fab-icon" />
      <div className={`fab-menu ${open ? 'open' : ''}`} id="fab-menu">
        <a className="fab-item" href="#top" aria-label="Back to top" title="Back to top"><ArrowUp size={18} /></a>
        <Link className="fab-item" to="/contact" aria-label="Contact" title="Contact"><Mail size={18} /></Link>
        <a className="fab-item" href="#" aria-label="GitHub" title="GitHub"><BrandIcon name="github" /></a>
        <a className="fab-item" href="#" aria-label="Download CV" title="Download CV"><FileDown size={18} /></a>
      </div>
    </div>
  );
}
