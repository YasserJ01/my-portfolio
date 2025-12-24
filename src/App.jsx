import { useState, useEffect } from 'react';
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
// import Experience from './components/Experience';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[#0A0E12] text-white selection:bg-blue-500/30 scroll-smooth relative overflow-x-hidden min-h-screen">
      
      {/* AnimatePresence allows the Loader to animate its exit transition */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px]" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </div>

          <Navbar />
          <main>
            <Hero />
            <AboutBento />
            {/* <Experience /> */}
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