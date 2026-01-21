import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { opacity: 1, height: '100vh', transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const linkVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled || isOpen ? 'py-4 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter text-white z-[110]">
          DEV.<span className="text-blue-500">JEROODI</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a
  href="/resume.pdf" // Points to public/resume.pdf
  target="_blank"    // Opens in a new tab
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-600/20"
>
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-[110] p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center space-y-8 md:hidden overflow-hidden"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                variants={linkVariants}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold text-gray-200 hover:text-blue-500 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.a
              variants={linkVariants}
              href="/resume.pdf"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-bold"
            >
              Resume
            </motion.a>

            {/* Background Decoration for Menu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] -z-10 rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;