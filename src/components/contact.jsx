import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Copy, CheckCircle2, Send } from 'lucide-react';
import { useState } from 'react';
import Reveal from './Reveal';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error
  const formspreeUrl = 'https://formspree.io/f/yourFormId';
  const isPlaceholderEndpoint = formspreeUrl.includes('yourFormId');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isPlaceholderEndpoint) {
      setFormStatus('error');
      return;
    }
    setFormStatus('sending');
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(formspreeUrl, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }

    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
      <Reveal>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s talk.</h2>
          <div className="h-1.5 w-20 bg-teal-600 rounded-full" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left: Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-8 text-slate-800">
            Have a project in mind?<br />
            <span className="text-teal-700">Let&apos;s build something remarkable.</span>
          </h3>

          {/* Email */}
          <motion.div
            whileHover={{ x: 8 }}
            className="group p-6 bg-white/70 border border-slate-200 rounded-2xl flex items-center justify-between shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-700">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Email</p>
                <p className="text-slate-800 font-medium text-sm mt-0.5">jerodi-yaser@hotmail.com</p>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard('jerodi-yaser@hotmail.com')}
              className="text-slate-500 hover:text-teal-600 transition-colors p-2 rounded-lg hover:bg-teal-100"
              title="Copy email"
            >
              {copied ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Copy size={18} />}
            </button>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ x: 8 }}
            className="group p-6 bg-white/70 border border-slate-200 rounded-2xl flex items-center justify-between shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Phone</p>
                <p className="text-slate-800 font-medium text-sm mt-0.5">+963 934 945 318</p>
              </div>
            </div>
            <a
              href="tel:+963934945318"
              className="text-slate-500 hover:text-emerald-600 transition-colors p-2 rounded-lg hover:bg-emerald-100"
            >
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Response time note */}
          <p className="text-slate-500 text-sm font-mono pl-1">
            ⏱ Typical response time: within 24 hours
          </p>
        </div>

        {/* Right: Form */}
        <div className="bg-white/80 border border-slate-200 p-8 rounded-3xl shadow-[0_24px_50px_rgba(15,23,42,0.1)]">
          {formStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-emerald-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Message sent!</h4>
              <p className="text-slate-500 text-sm">Thanks for reaching out — I&apos;ll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors text-sm"
              />
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                required
                className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors resize-none text-sm"
              />

              {formStatus === 'error' && (
                <p className="text-red-500 text-xs font-mono">
                  Formspree endpoint not configured yet. Update it to enable submissions.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={formStatus === 'sending'}
                whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-600/50 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-slate-500 font-mono">
                Powered by Formspree · Update the endpoint to enable.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
