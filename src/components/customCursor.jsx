import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [label, setLabel] = useState('');
  const mousePos = useRef({ x: 0, y: 0 });

  const springCfg = { damping: 28, stiffness: 200, mass: 0.5 };
  const dotSpringCfg = { damping: 50, stiffness: 400, mass: 0.3 };

  const ringX = useSpring(0, springCfg);
  const ringY = useSpring(0, springCfg);
  const dotX  = useSpring(0, dotSpringCfg);
  const dotY  = useSpring(0, dotSpringCfg);

  useEffect(() => {
    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    const onOver = (e) => {
      const el = e.target.closest('button, a, [data-cursor]');
      if (el) {
        setIsHovering(true);
        setLabel(el.dataset.cursorLabel || '');
      } else {
        setIsHovering(false);
        setLabel('');
      }
    };

    const onDown = () => setIsClicking(true);
    const onUp   = () => setIsClicking(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [ringX, ringY, dotX, dotY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: isHovering ? '1.5px solid var(--cyan)' : '1px solid rgba(14,165,166,0.35)',
          background: isHovering ? 'rgba(14,165,166,0.12)' : 'transparent',
          scale: isClicking ? 0.8 : isHovering ? 1.6 : 1,
          transition: 'border 0.2s, background 0.2s',
          boxShadow: isHovering ? '0 0 20px rgba(14,165,166,0.18)' : 'none',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      >
        {label && (
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--cyan)',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
            position: 'absolute',
            top: '110%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}>
            {label}
          </span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--cyan)',
          boxShadow: '0 0 8px rgba(14,165,166,0.5)',
          scale: isHovering ? 0 : isClicking ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 400 }}
      />
    </>
  );
};

export default CustomCursor;
