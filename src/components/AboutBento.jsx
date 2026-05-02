import { motion } from 'framer-motion';
import { MapPin, Cpu, GraduationCap, Code2, Zap } from 'lucide-react';

const card = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const AboutBento = () => (
  <section style={{ padding: '120px 24px', maxWidth: 1280, margin: '0 auto' }} id="about">

    {/* Section label */}
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      style={{ marginBottom: 60 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        <div style={{ width: 32, height: 1, background: 'var(--cyan)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#0f766e', letterSpacing: '0.2em' }}>02 / ABOUT</span>
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)', margin: 0 }}>
        Behind the build.
      </h2>
    </motion.div>

    {/* Bento grid */}
    <motion.div
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto auto', gap: 16 }}
    >

      {/* Card 1: Journey — wide tall */}
      <motion.div variants={card}
        style={{ gridColumn: 'span 2', gridRow: 'span 2' }}
      >
        <BentoCard style={{ height: '100%', minHeight: 340 }} accent="cyan">
          <Code2 size={28} color="var(--cyan)" style={{ marginBottom: 20 }} />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#0f766e', letterSpacing: '0.15em', marginBottom: 12 }}>MY JOURNEY</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--text-secondary)', margin: 0 }}>
            Started mobile development in{' '}
            <Highlight>2021</Highlight>{' '}mastering{' '}
            <Highlight>Flutter</Highlight>{' '}for building scalable cross-platform applications.
            Gained strong expertise in Clean Architecture, Design Patterns, and state management (BLoC & Riverpod), enabling me to design maintainable, production-ready systems. Experienced in developing end-to-end mobile solutions, from pixel-perfect UIs to real-time, secure, and offline-first applications.
          </p>
          <div style={{ marginTop: 28, padding: '12px 16px', background: 'rgba(14,165,166,0.08)', border: '1px solid rgba(14,165,166,0.2)', borderRadius: 12 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#0f766e' }}>
              $ flutter --version  <span style={{ color: 'var(--text-muted)' }}>// Always latest stable</span>
            </span>
          </div>
        </BentoCard>
      </motion.div>

      {/* Card 2: Education */}
      <motion.div variants={card} style={{ gridColumn: 'span 2' }}>
        <BentoCard accent="purple">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(124,58,237,0.12)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(124,58,237,0.2)', flexShrink: 0 }}>
              <GraduationCap size={22} color="#6d28d9" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>Final Year</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)' }}>Software Engineering Student</div>
            </div>
          </div>
        </BentoCard>
      </motion.div>

      {/* Card 3: Location */}
      <motion.div variants={card}>
        <BentoCard accent="red" style={{ textAlign: 'center' }}>
          <MapPin size={24} color="#b91c1c" style={{ marginBottom: 10 }} />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.12em', marginBottom: 6 }}>LOCATION</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>Damascus, Syria</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', marginTop: 4 }}>UTC+3</div>
        </BentoCard>
      </motion.div>

      {/* Card 4: Expertise */}
      <motion.div variants={card}>
        <BentoCard accent="blue" style={{ textAlign: 'center' }}>
          <Cpu size={24} color="#0f766e" style={{ marginBottom: 10 }} />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.12em', marginBottom: 6 }}>EXPERTISE</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: '#0f766e' }}>Flutter</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', marginTop: 4 }}>Mobile Development</div>
        </BentoCard>
      </motion.div>

    </motion.div>
  </section>
);

const BentoCard = ({ children, style = {}, accent = 'cyan' }) => {
  const accentMap = {
    cyan:   'rgba(14,165,166,0.2)',
    purple: 'rgba(124,58,237,0.18)',
    red:    'rgba(248,113,113,0.16)',
    blue:   'rgba(14,165,166,0.2)',
  };

  return (
    <motion.div
      whileHover={{ y: -6, borderColor: accentMap[accent] }}
      style={{
        background: 'rgba(255,255,255,0.8)',
        border: '1px solid rgba(16,24,40,0.12)',
        borderRadius: 22,
        padding: 28,
        height: '100%',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(15,23,42,0.08)',
        ...style,
      }}
    >
      {/* Subtle corner glow */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle at top right, ${accentMap[accent]}, transparent 70%)`, pointerEvents: 'none' }} />
      {children}
    </motion.div>
  );
};

const Highlight = ({ children, color = '#0f766e' }) => (
  <span style={{ color, fontWeight: 500 }}>{children}</span>
);

export default AboutBento;
