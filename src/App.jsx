import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutBento from './components/AboutBento';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navbar />
      <main>
        <Hero />
        <AboutBento />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
