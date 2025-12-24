import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Yasser Jeroodi
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Software Engineer • Flutter Specialist
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/YasserJ01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/yasser-jeroodi-2997042aa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:jerodi-yaser@hotmail.com" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-gray-600 text-xs font-mono">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;