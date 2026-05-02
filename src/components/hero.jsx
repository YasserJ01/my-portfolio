import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Download, ChevronDown } from 'lucide-react';

const resumeUrl = '/Yasser%20Jeroodi%20-%20Flutter%20Developer%20-%20CV.pdf';

/* Animated counter hook */
const useCounter = (target, duration = 1800, start = false) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return val;
};

/* Typewriter for role strings */
const roles = ['Flutter Developer', 'Mobile Engineer', 'Clean Architecture', 'BLoC & Riverpod'];
const useTypewriter = () => {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const delay = deleting ? 40 : charIdx === current.length ? 1800 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setText(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIdx > 0) {
          setText(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

  return text;
};

const Hero = () => {
  const heroRef = useRef(null);
  const [statsOn, setStatsOn] = useState(false);
  const role = useTypewriter();

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const apps = useCounter(7, 1600, statsOn);
  const years = useCounter(4, 1200, statsOn);
  const uptime = useCounter(99, 1400, statsOn);

  useEffect(() => {
    const timer = setTimeout(() => setStatsOn(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div style={{ y, opacity, width: '100%', maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -80, left: -120, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,166,0.2) 0%, transparent 70%)', filter: 'blur(6px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -120, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(204,120,75,0.2) 0%, transparent 70%)', filter: 'blur(10px)', pointerEvents: 'none' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 72, alignItems: 'center' }}>
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24, padding: '6px 12px', borderRadius: 999, border: '1px solid rgba(14,165,166,0.3)', background: 'rgba(255,255,255,0.6)' }}>
              <div style={{ position: 'relative', width: 8, height: 8 }}>
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: '#22c55e',
                    animation: 'pulse-ring 1.8s ease-out infinite',
                  }}
                />
                <span style={{ position: 'absolute', inset: '1px', borderRadius: '50%', background: '#22c55e' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#0f766e', letterSpacing: '0.16em' }}>
                OPEN TO FULL-TIME ROLES
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 6vw, 5.4rem)',
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                marginBottom: 20,
                color: 'var(--text-primary)',
              }}
            >
              Yasser <span className="shimmer-text">Jeroodi</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
                lineHeight: 1.55,
                color: 'var(--text-primary)',
                marginBottom: 18,
                fontWeight: 500,
                maxWidth: 540,
              }}
            >
              Flutter Developer crafting premium mobile and web experiences for product teams that need speed, clarity, and polish.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>~/role $</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--cyan)', fontWeight: 500 }}>{role}</span>
              <span className="cursor-blink" style={{ width: 2, height: 18, background: 'var(--cyan)', display: 'inline-block', borderRadius: 1 }} />
            </motion.div>

            <motion.p
              variants={itemVariants}
              style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 32, maxWidth: 520, fontFamily: 'var(--font-body)' }}
            >
              I specialize in Flutter architecture, performance tuning, and seamless backend integrations. The focus is always on scalable codebases
              and UI systems that help teams ship confidently.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 48 }}>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(14,165,166,0.3)' }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--cyan)',
                  color: '#f8fafc',
                  padding: '13px 28px',
                  borderRadius: 999,
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 0 24px rgba(14,165,166,0.25)',
                }}
              >
                View Case Studies <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ scale: 1.04, borderColor: 'var(--cyan)' }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  border: '1px solid var(--border-hover)',
                  color: 'var(--text-primary)',
                  padding: '13px 28px',
                  borderRadius: 999,
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                  background: 'rgba(255,255,255,0.6)',
                }}
              >
                <Download size={16} /> Download Resume
              </motion.a>

              {[
                { icon: <Github size={18} />, href: 'https://github.com/YasserJ01', label: 'GitHub' },
                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/yasser-jeroodi-2997042aa', label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, borderColor: 'var(--cyan)', color: 'var(--cyan)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 46,
                    height: 46,
                    border: '1px solid var(--border)',
                    borderRadius: 999,
                    color: 'var(--text-secondary)',
                    background: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: 28, paddingTop: 24, borderTop: '1px solid rgba(16,24,40,0.12)', background: 'rgba(255,255,255,0.65)', borderRadius: 18, paddingLeft: 18, paddingRight: 18 }}>
              <StatItem value={`${years}+`} label="Years Flutter" />
              <StatItem value={`${apps}+`} label="Apps shipped" />
              <StatItem value={`${uptime}.9%`} label="Crash-free rate" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'grid', gap: 18, position: 'relative' }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="float" style={{ position: 'relative' }}>
            </motion.div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 60, height: 60, borderTop: '1px solid rgba(14,165,166,0.35)', borderRight: '1px solid rgba(14,165,166,0.35)' }} />
              <div style={{ position: 'absolute', bottom: -20, left: -20, width: 60, height: 60, borderBottom: '1px solid rgba(14,165,166,0.35)', borderLeft: '1px solid rgba(14,165,166,0.35)' }} />

              <div
                style={{
                  background: 'rgba(255,255,255,0.78)',
                  border: '1px solid rgba(16,24,40,0.12)',
                  borderRadius: 18,
                  overflow: 'hidden',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div style={{ background: 'rgba(15,23,42,0.05)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(16,24,40,0.08)' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginLeft: 8 }}>~/portfolio/developer.dart</span>
                </div>
                <div style={{ padding: '24px 28px', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 2 }}>
                  <CodeLine delay={0.5} color="rgba(14,165,166,0.6)">{'// Flutter Developer Profile'}</CodeLine>
                  <CodeLine delay={0.6} color="#4f46e5">{'class '}<span style={{ color: '#0f766e' }}>Developer</span>{' {'}</CodeLine>
                  <CodeLine delay={0.7} indent color="#858499">{'final '}<span style={{ color: '#be123c' }}>name</span>{' = '}<span style={{ color: '#0f766e' }}>&quot;Yasser Jeroodi&quot;</span>;</CodeLine>
                  <CodeLine delay={0.8} indent color="#4f46e5">{'final '}<span style={{ color: '#be123c' }}>role</span>{' = '}<span style={{ color: '#0f766e' }}>&quot;Flutter Developer&quot;</span>;</CodeLine>
                  <CodeLine delay={0.9} indent color="#4f46e5">{'final '}<span style={{ color: '#be123c' }}>experience</span>{' = '}<span style={{ color: '#b45309' }}>3</span>;</CodeLine>
                  <CodeLine delay={1.0} indent color="var(--text-muted)">{'  '}</CodeLine>
                  <CodeLine delay={1.1} indent color="#4f46e5">{'List<String> '}<span style={{ color: '#be123c' }}>skills</span>{' = ['}</CodeLine>
                  <CodeLine delay={1.2} indent={2} color="#0f766e">&apos;BLoC&apos;, &apos;Riverpod&apos;, &apos;Clean Arch&apos;,  &apos;Design Patterns&apos;,</CodeLine>
                  <CodeLine delay={1.3} indent={2} color="#0f766e">&apos;Firebase&apos;, &apos;MVVM&apos;, &apos;WebSockets&apos;,</CodeLine>
                  <CodeLine delay={1.4} indent color="#4f46e5">{'];'}</CodeLine>
                  <CodeLine delay={1.5} indent color="var(--text-muted)">{'  '}</CodeLine>
                  <CodeLine delay={1.6} indent color="#4f46e5">{'bool '}<span style={{ color: '#be123c' }}>available</span>{' = '}<span style={{ color: '#b45309' }}>true</span>;</CodeLine>
                  <CodeLine delay={1.7} color="#4f46e5">{'}'}</CodeLine>
                </div>
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(14,165,166,0.12) 0%, transparent 70%)', borderRadius: 12, zIndex: -1, filter: 'blur(20px)' }} />
            
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.15em' }}>SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={16} color="var(--text-muted)" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const CodeLine = ({ children, delay, indent = 0, color }) => (
  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.4 }} style={{ color, paddingLeft: indent * 16 }}>
    {children}
  </motion.div>
);

const StatItem = ({ value, label }) => (
  <div>
    <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: '#0f766e', letterSpacing: '-0.03em', lineHeight: 1 }}>{value}</div>
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginTop: 4, letterSpacing: '0.08em' }}>{label}</div>
  </div>
);

export default Hero;
