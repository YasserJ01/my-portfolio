import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import CustomCursor from './components/customCursor';
import Loader from './components/Loader';
import AboutBento from './components/AboutBento';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative overflow-x-hidden min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text-primary)' }}>

      <AnimatePresence mode="wait">
        {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />

          {/* ── Background System ── */}
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div style={{
              position: 'absolute', top: '-20%', left: '-10%',
              width: 720, height: 720,
              background: 'radial-gradient(circle, rgba(14,165,166,0.16) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'float 18s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', bottom: '-20%', right: '-10%',
              width: 760, height: 760,
              background: 'radial-gradient(circle, rgba(204,120,75,0.14) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'float 22s ease-in-out infinite reverse',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `
                linear-gradient(rgba(16,24,40,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16,24,40,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '120px 120px',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.6) 0%, rgba(240,232,224,0.9) 60%, rgba(232,222,212,1) 100%)',
              mixBlendMode: 'soft-light',
            }} />
          </div>

          <Navbar />
          <main>
            <Hero />
            <AboutBento />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
