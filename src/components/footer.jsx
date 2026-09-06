import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="section footer-inner">
      <div><strong>Yasser Jeroodi</strong><span>Flutter Engineer / Mobile Product Builder</span></div>
      <p>Built with care for the details that make products feel dependable.</p>
      <div className="footer-links">
        <a href="https://github.com/YasserJ01" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/yasser-jeroodi-2997042aa" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        <a href="mailto:jerodi-yaser@hotmail.com" aria-label="Email"><Mail size={18} /></a>
      </div>
      <span className="copyright">{new Date().getFullYear()} / Damascus, Syria</span>
    </div>
  </footer>
);

export default Footer;
