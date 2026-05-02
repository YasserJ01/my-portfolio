import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, ArrowUpRight, Layers, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';

const tagColors = {
  'Flutter':            { bg: 'rgba(14,165,166,0.12)', color: '#0f766e', border: 'rgba(14,165,166,0.3)' },
  'Flutter Web':        { bg: 'rgba(14,165,166,0.12)', color: '#0f766e', border: 'rgba(14,165,166,0.3)' },
  'Firebase':           { bg: 'rgba(217,119,6,0.12)',  color: '#b45309', border: 'rgba(217,119,6,0.3)' },
  'BLoC':               { bg: 'rgba(99,102,241,0.12)',  color: '#4f46e5', border: 'rgba(99,102,241,0.3)' },
  'BloC':               { bg: 'rgba(99,102,241,0.12)',  color: '#4f46e5', border: 'rgba(99,102,241,0.3)' },
  'Riverpod':           { bg: 'rgba(124,58,237,0.12)',  color: '#6d28d9', border: 'rgba(124,58,237,0.3)' },
  'Clean Architecture': { bg: 'rgba(34,197,94,0.12)',   color: '#15803d', border: 'rgba(34,197,94,0.3)' },
  'Clean Arch':         { bg: 'rgba(34,197,94,0.12)',   color: '#15803d', border: 'rgba(34,197,94,0.3)' },
  // 'Django':             { bg: 'rgba(22,163,74,0.12)',   color: '#166534', border: 'rgba(22,163,74,0.3)' },
  'REST APIs':          { bg: 'rgba(14,165,166,0.12)',  color: '#0f766e', border: 'rgba(14,165,166,0.3)' },
  'RESTful APIs':       { bg: 'rgba(14,165,166,0.12)',  color: '#0f766e', border: 'rgba(14,165,166,0.3)' },
  'SignalR':            { bg: 'rgba(14,165,166,0.12)',  color: '#0f766e', border: 'rgba(14,165,166,0.3)' },
  'WebSockets':         { bg: 'rgba(14,165,166,0.12)',  color: '#0f766e', border: 'rgba(14,165,166,0.3)' },
  'Hive':               { bg: 'rgba(234,179,8,0.12)',   color: '#b45309', border: 'rgba(234,179,8,0.3)' },
  'Isar DB':            { bg: 'rgba(234,179,8,0.12)',   color: '#b45309', border: 'rgba(234,179,8,0.3)' },
  'CI/CD':              { bg: 'rgba(249,115,22,0.12)',  color: '#c2410c', border: 'rgba(249,115,22,0.3)' },
  'Unit Testing':       { bg: 'rgba(236,72,153,0.12)',  color: '#be185d', border: 'rgba(236,72,153,0.3)' },
  'Testing':            { bg: 'rgba(236,72,153,0.12)',  color: '#be185d', border: 'rgba(236,72,153,0.3)' },
  'Design Patterns':    { bg: 'rgba(99,102,241,0.12)',  color: '#4f46e5', border: 'rgba(99,102,241,0.3)' },
  'Secure Storage':     { bg: 'rgba(248,113,113,0.12)', color: '#b91c1c', border: 'rgba(248,113,113,0.3)' },
  'Encryption':         { bg: 'rgba(248,113,113,0.12)', color: '#b91c1c', border: 'rgba(248,113,113,0.3)' },
  'OSM Maps':           { bg: 'rgba(132,204,22,0.12)',  color: '#3f6212', border: 'rgba(132,204,22,0.3)' },
  'GPS':                { bg: 'rgba(132,204,22,0.12)',  color: '#3f6212', border: 'rgba(132,204,22,0.3)' },
  'Biometrics':         { bg: 'rgba(6,182,212,0.12)',   color: '#0e7490', border: 'rgba(6,182,212,0.3)' },
  'E-Wallet':           { bg: 'rgba(217,119,6,0.12)',   color: '#b45309', border: 'rgba(217,119,6,0.3)' },
  'Dashboard':          { bg: 'rgba(99,102,241,0.12)',  color: '#4f46e5', border: 'rgba(99,102,241,0.3)' },
};
const defaultTag = { bg: 'rgba(16,24,40,0.04)', color: 'rgba(16,24,40,0.6)', border: 'rgba(16,24,40,0.12)' };

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [hoveredIdx, setHoveredIdx]   = useState(null);

  return (
    <section style={{ padding: '120px 24px', maxWidth: 1280, margin: '0 auto' }} id="projects">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ marginBottom: 64 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
          <div style={{ width: 32, height: 1, background: 'var(--cyan)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#0f766e', letterSpacing: '0.2em' }}>03 / PORTFOLIO</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(14,165,166,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={20} color="#0f766e" />
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)', margin: 0 }}>
                Case studies.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', margin: 0 }}>
                Selected Flutter projects built for real users.
              </p>
            </div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
            {projects.length} projects
          </span>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
          {['Mobile + Web', 'Product Strategy', 'Clean Architecture'].map((pill) => (
            <span key={pill} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', padding: '6px 12px', borderRadius: 999, border: '1px solid rgba(16,24,40,0.12)', background: 'rgba(255,255,255,0.7)', color: 'var(--text-secondary)' }}>
              <Sparkles size={12} /> {pill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
        {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHoveredIdx(i)}
              onHoverEnd={() => setHoveredIdx(null)}
              style={{ position: 'relative' }}
              whileHover={{ boxShadow: '0 30px 80px rgba(15,23,42,0.12)' }}
            >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'var(--bg-card)',
                border: hoveredIdx === i ? '1px solid rgba(14,165,166,0.4)' : '1px solid var(--border)',
                borderRadius: 24,
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                boxShadow: hoveredIdx === i ? '0 24px 60px rgba(16,24,40,0.12)' : '0 12px 30px rgba(16,24,40,0.08)',
              }}
            >
              {/* Image */}
              {project.image ? (
                <div
                  onClick={() => setSelectedImg(project.image)}
                  style={{ height: 220, overflow: 'hidden', position: 'relative', cursor: 'zoom-in' }}
                >
                  <motion.img
                    src={project.image} alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    animate={{ scale: hoveredIdx === i ? 1.06 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(15,23,42,0.65) 0%, transparent 60%)',
                  }} />
                  <AnimatePresence>
                    {hoveredIdx === i && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(15,23,42,0.3)' }}
                      >
                        <div style={{ padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: '#0f766e' }}>
                          VIEW PREVIEW
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div style={{ height: 220, background: 'rgba(16,24,40,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(16,24,40,0.05) 10px, rgba(16,24,40,0.05) 11px)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.15em', position: 'relative' }}>NO PREVIEW</span>
                </div>
              )}

              {/* Content */}
              <div style={{ padding: '26px 26px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Project number + title */}
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: 6 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
                    {project.title}
                  </h3>
                </div>

                {/* Case study */}
                {project.problem && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <CaseBlock label="Problem" labelColor="rgba(248,113,113,0.8)" text={project.problem} />
                    <CaseBlock label="Solution" labelColor="var(--cyan)" text={project.solution} />
                  </div>
                )}

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto', paddingTop: 8 }}>
                  {project.tags?.map(tag => {
                    const t = tagColors[tag] || defaultTag;
                    return (
                      <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em', padding: '4px 12px', borderRadius: 999, background: t.bg, color: t.color, border: `1px solid ${t.border}` }}>
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, paddingTop: 16, borderTop: '1px solid rgba(16,24,40,0.12)' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-secondary)', textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <Github size={14} /> SOURCE
                  </a>
                  {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, color: '#0f766e', textDecoration: 'none', letterSpacing: '0.08em' }}
                    >
                      <ArrowUpRight size={14} /> LIVE
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(248,246,241,0.95)', backdropFilter: 'blur(20px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, cursor: 'zoom-out' }}
          >
            <button onClick={() => setSelectedImg(null)}
              style={{ position: 'absolute', top: 28, right: 28, background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(16,24,40,0.12)', borderRadius: 12, padding: 10, color: '#0f766e', cursor: 'pointer', display: 'flex' }}
            >
              <X size={20} />
            </button>
            <motion.img
              src={selectedImg} alt="Full view"
              initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
              style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: 24, objectFit: 'contain', boxShadow: '0 40px 80px rgba(16,24,40,0.15)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const CaseBlock = ({ label, labelColor, text }) => (
  <div style={{ paddingLeft: 12, borderLeft: `2px solid ${labelColor}` }}>
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: labelColor, letterSpacing: '0.2em', marginBottom: 4 }}>{label.toUpperCase()}</div>
    <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>{text}</p>
  </div>
);

export default Projects;
