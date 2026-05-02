import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading | done

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('done');
          setTimeout(finishLoading, 900);
          return 100;
        }
        // Ease in the last 20%
        const step = prev < 80 ? 2 : 1;
        return Math.min(prev + step, 100);
      });
    }, 18);
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
      style={{ background: 'linear-gradient(180deg, #f7f2eb 0%, #f2ece4 60%, #ede6de 100%)' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated corner brackets */}
      {['tl','tr','bl','br'].map((pos) => (
        <motion.div
          key={pos}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          style={{
            position: 'absolute',
            width: 40, height: 40,
            ...(pos === 'tl' ? { top: 32, left: 32, borderTop: '1.5px solid var(--cyan-border)', borderLeft: '1.5px solid var(--cyan-border)' } : {}),
            ...(pos === 'tr' ? { top: 32, right: 32, borderTop: '1.5px solid var(--cyan-border)', borderRight: '1.5px solid var(--cyan-border)' } : {}),
            ...(pos === 'bl' ? { bottom: 32, left: 32, borderBottom: '1.5px solid var(--cyan-border)', borderLeft: '1.5px solid var(--cyan-border)' } : {}),
            ...(pos === 'br' ? { bottom: 32, right: 32, borderBottom: '1.5px solid var(--cyan-border)', borderRight: '1.5px solid var(--cyan-border)' } : {}),
          }}
        />
      ))}

      {/* Pulsing background ring */}
      <div style={{
        position: 'absolute',
        width: 300, height: 300,
        borderRadius: '50%',
        border: '1px solid var(--cyan-border)',
        animation: 'pulse-ring 2s ease-out infinite',
      }} />

      {/* Logo wordmark */}
      <div className="relative mb-12 overflow-hidden">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}>
            YASSER <span style={{ color: 'var(--cyan)' }}>JEROODI</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.2em', marginTop: 8, textAlign: 'center' }}>
            FLUTTER · MOBILE 
          </p>
        </motion.div>
      </div>

      {/* Progress track */}
      <div style={{ width: 200, position: 'relative' }}>
        <div style={{ height: 1, background: 'rgba(16,24,40,0.08)', width: '100%', borderRadius: 1 }}>
          <motion.div
            style={{
              height: '100%',
              background: 'var(--cyan)',
              borderRadius: 1,
              boxShadow: '0 0 12px rgba(14,165,166,0.4)',
              width: `${counter}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Tick marks */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          {[0,25,50,75,100].map(tick => (
            <div key={tick} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: counter >= tick ? '#0f766e' : 'var(--text-muted)',
              transition: 'color 0.3s',
              letterSpacing: '0.05em',
            }}>
              {tick}
            </div>
          ))}
        </div>
      </div>

      {/* Counter */}
      <motion.div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          fontWeight: 300,
          color: '#0f766e',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          marginTop: 32,
          textShadow: '0 0 40px rgba(14,165,166,0.2)',
        }}
      >
        {String(counter).padStart(3, '0')}
      </motion.div>

      {/* Status text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={phase}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginTop: 12, letterSpacing: '0.15em' }}
        >
          {phase === 'done' ? '// READY' : '// INITIALIZING'}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};

export default Loader;
