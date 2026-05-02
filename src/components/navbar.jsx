import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const resumeUrl = '/Yasser%20Jeroodi%20-%20Flutter%20Developer%20-%20CV.pdf';

const navLinks = [
  { name: 'About',    href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills',   href: '#skills' },
  { name: 'Contact',  href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.4 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(248,246,241,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(16,24,40,0.08)' : '1px solid transparent',
          padding: scrolled ? '12px 0' : '22px 0',
          transition: 'background 0.4s, padding 0.3s, border-color 0.4s',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38,
              border: '1.5px solid rgba(14,165,166,0.5)',
              borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(255,255,255,0.8)',
              boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--cyan)', fontWeight: 600 }}>YJ</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
              Yasser <span style={{ color: 'var(--cyan)' }}>Jeroodi</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 36 }}>
            {navLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14, fontWeight: 500,
                  color: active === href.slice(1) ? '#0f766e' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  position: 'relative', paddingBottom: 4,
                  transition: 'color 0.25s',
                }}
              >
                {name}
                {active === href.slice(1) && (
                  <motion.div layoutId="nav-pill"
                    style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'var(--cyan)', borderRadius: 999, boxShadow: '0 0 12px rgba(14,165,166,0.4)' }}
                  />
                )}
              </a>
            ))}
            <motion.a
              href={resumeUrl} target="_blank" rel="noopener noreferrer" download
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
                color: '#f8fafc', background: 'var(--cyan)',
                padding: '10px 20px', borderRadius: 999, textDecoration: 'none',
                letterSpacing: '0.08em', boxShadow: '0 20px 40px rgba(14,165,166,0.25)',
              }}
            >
              <Download size={12} /> RESUME
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden"
            style={{ background: 'none', border: 'none', color: 'var(--text-primary)', padding: 4, zIndex: 110 }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'rgba(248,246,241,0.98)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36 }}
          >
            {navLinks.map(({ name, href }, i) => (
              <motion.a key={name} href={href} onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 + 0.1 }}
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 9vw, 3.8rem)', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '-0.03em' }}
              >
                {name}
              </motion.a>
            ))}
            <motion.a href={resumeUrl} target="_blank" rel="noopener noreferrer" download onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#0f766e', border: '1px solid rgba(14,165,166,0.4)', padding: '12px 36px', borderRadius: 999, textDecoration: 'none', letterSpacing: '0.12em', background: 'rgba(255,255,255,0.8)' }}
            >
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
