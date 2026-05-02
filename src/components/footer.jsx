import { Github, Linkedin, Mail, Download } from 'lucide-react';

const resumeUrl = '/Yasser%20Jeroodi%20-%20Flutter%20Developer%20-%20CV.pdf';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 bg-white/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-amber-500">
              Yasser Jeroodi
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Flutter Developer & Mobile Architect
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/YasserJ01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yasser-jeroodi-2997042aa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jerodi-yaser@hotmail.com"
              aria-label="Email"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 text-xs font-mono px-4 py-2 border border-slate-200 hover:border-teal-500/50 text-slate-500 hover:text-teal-600 rounded-full transition-colors bg-white"
            >
              <Download size={13} /> Resume
            </a>
          </div>

          <p className="text-slate-500 text-xs font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Nav links row */}
        <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-slate-200">
          {['#about', '#projects', '#skills', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="text-xs font-mono text-slate-500 hover:text-slate-800 transition-colors capitalize"
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
