import { motion as Motion } from 'framer-motion';
import { ArrowDownRight, Download, Github, Linkedin, MapPin } from 'lucide-react';

const resumeUrl = '/Yasser%20Jeroodi%20-%20Flutter%20Developer%20-%20CV.pdf';

const Hero = () => (
  <section className="hero section" id="home">
    <Motion.div
      className="hero-copy"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="eyebrow"><span className="availability-dot" /> Available for <b>PART-TIME</b> roles</div>
      <p className="hero-kicker">Flutter Engineer / Mobile Product Builder</p>
      <h1>I build mobile products that hold up in the real world.</h1>
      <p className="hero-lead">
        I am Yasser Jeroodi, a Flutter engineer focused on reliable architecture,
        complex product flows, and polished mobile experiences. I turn demanding
        requirements into maintainable applications that teams can confidently ship and evolve.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          View selected work <ArrowDownRight size={18} />
        </a>
        <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer">
          <Download size={17} /> Resume
        </a>
      </div>
      <div className="hero-meta">
        <span><MapPin size={15} /> Damascus, Syria / UTC+3</span>
        <a href="https://github.com/YasserJ01" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
        <a href="https://www.linkedin.com/in/yasser-jeroodi-2997042aa" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
      </div>
    </Motion.div>

    <Motion.aside
      className="hero-proof"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="proof-topline">
        <span>Engineering profile</span>
        <span className="production-badge">Product focused</span>
      </div>
      <div className="proof-mark">Flutter<span> Engineer</span></div>
      <p>Cross-platform mobile engineering from product discovery and architecture through production delivery.</p>
      <div className="proof-grid">
        <div><strong>Architecture</strong><span>Clean boundaries</span></div>
        <div><strong>State</strong><span>BLoC and Riverpod</span></div>
        <div><strong>Quality</strong><span>Tests and telemetry</span></div>
        <div><strong>Delivery</strong><span>Production minded</span></div>
      </div>
      <a href="#projects">Explore selected projects <ArrowDownRight size={16} /></a>
    </Motion.aside>
  </section>
);

export default Hero;
