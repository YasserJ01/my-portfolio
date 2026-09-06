import { useForm, ValidationError } from '@formspree/react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Copy, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [state, handleSubmit] = useForm('mjglkzpd');
  const email = 'jerodi-yaser@hotmail.com';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="section contact-section" id="contact">
      <Motion.div className="contact-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="contact-copy">
          <div className="section-label light"><span>04</span> Contact</div>
          <h2>Looking for an engineer who can own the mobile product?</h2>
          <p>I am open to Flutter and mobile engineering roles where product quality, architecture, and reliable delivery matter.</p>
          <a href={`mailto:${email}`}>{email} <ArrowUpRight size={18} /></a>
          <button type="button" onClick={copyEmail}>{copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}{copied ? 'Copied' : 'Copy email'}</button>
        </div>

        <div className="contact-form-wrap">
          {state.succeeded ? (
            <div className="form-success"><CheckCircle2 size={34} /><h3>Message received.</h3><p>Thank you. I will get back to you as soon as possible.</p></div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-heading"><Mail size={20} /><span>Start a conversation</span></div>
              <label>Name<input type="text" name="name" autoComplete="name" required placeholder="Your name" /></label>
              <label>Email<input type="email" name="email" autoComplete="email" required placeholder="you@company.com" /></label>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <label>Message<textarea name="message" rows="4" required placeholder="Tell me about the role or project..." /></label>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <button className="button button-primary" type="submit" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send message'} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </Motion.div>
    </section>
  );
};

export default Contact;
