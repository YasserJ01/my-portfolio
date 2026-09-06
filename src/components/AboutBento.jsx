import { motion as Motion } from 'framer-motion';
import { Braces, GraduationCap, MapPin, PackageCheck } from 'lucide-react';

const AboutBento = () => (
  <section className="section about-section" id="about">
    <Motion.div className="split-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div>
        <div className="section-label"><span>01</span> About</div>
        <h2>Engineering judgment, not just implementation.</h2>
      </div>
      <p>I translate product complexity into mobile experiences that are clear for users and maintainable for the teams behind them.</p>
    </Motion.div>

    <div className="about-grid">
      <Motion.article className="about-main" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Braces size={26} />
        <h3>Mobile development has been my craft since 2021.</h3>
        <p>
          I specialize in Flutter products where architecture and UX have to work together:
          multi-step journeys, secure sessions, real-time updates, offline and recovery states,
          device capabilities, and interfaces that remain calm under complexity.
        </p>
        <p>
          My approach is pragmatic: model the domain clearly, keep boundaries enforceable,
          observe production behavior, and polish the interactions users touch every day.
        </p>
      </Motion.article>
      <Motion.article className="about-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <PackageCheck size={22} />
        <span>Current focus</span>
        <strong>Production Flutter systems</strong>
        <p>Architecture, reliability, security, and product-quality UI.</p>
      </Motion.article>
      <Motion.article className="about-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <GraduationCap size={22} />
        <span>Education</span>
        <strong>Software Engineering</strong>
        <p>Graduated student applying software fundamentals to shipped products.</p>
      </Motion.article>
      <Motion.article className="about-card wide" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <MapPin size={22} />
        <div><span>Based in</span><strong>Damascus, Syria</strong></div>
        <p>UTC+3 / Open to remote opportunities.</p>
      </Motion.article>
    </div>
  </section>
);

export default AboutBento;
