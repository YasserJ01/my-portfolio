import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const resumeUrl = '/Yasser%20Jeroodi%20-%20Flutter%20Developer%20-%20CV.pdf';
const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="nav-inner" aria-label="Primary navigation">
        <a className="wordmark" href="#home"><span>YJ</span><strong>Yasser Jeroodi</strong></a>
        <div className="nav-links">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer"><Download size={14} /> Resume</a>
        </div>
        <button className="nav-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <Motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
            <a href={resumeUrl} target="_blank" rel="noreferrer"><Download size={17} /> Download resume</a>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
