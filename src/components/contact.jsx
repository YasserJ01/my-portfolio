import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Reveal from './Reveal';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
      <Reveal>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-8 text-gray-200">
            Have a project in mind? <br />
            <span className="text-blue-400">Let's build something amazing.</span>
          </h3>

          {/* Email Card */}
          <motion.div 
            whileHover={{ x: 10 }}
            className="group p-6 bg-slate-900/40 border border-slate-800 rounded-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase">Email</p>
                <p className="text-gray-200 font-medium">jerodi-yaser@hotmail.com</p>
              </div>
            </div>
            <button 
              onClick={() => copyToClipboard('jerodi-yaser@hotmail.com')}
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              {copied ? <CheckCircle2 size={20} className="text-emerald-500" /> : <Copy size={20} />}
            </button>
          </motion.div>

          {/* Phone Card */}
          <motion.div 
            whileHover={{ x: 10 }}
            className="group p-6 bg-slate-900/40 border border-slate-800 rounded-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase">Phone</p>
                <p className="text-gray-200 font-medium">+963 934 945 318</p>
              </div>
            </div>
            <a 
              href="tel:+963934945318"
              className="text-gray-500 hover:text-emerald-400 transition-colors"
            >
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>

        {/* Simple Form UI */}
        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              <input type="email" placeholder="Email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            <textarea placeholder="Message" rows="4" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors"></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;