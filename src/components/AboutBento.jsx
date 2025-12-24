import { motion } from 'framer-motion';
import { MapPin, Coffee, Code2, Cpu, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';

const AboutBento = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="about">
      <Reveal>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Behind the Code</h2>
          <div className="h-1.5 w-20 bg-emerald-600 rounded-full" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        
        {/* Card 1: My Journey (Large) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 md:row-span-2 bg-slate-900/40 border border-slate-800 rounded-3xl p-8 flex flex-col justify-center"
        >
          <Code2 className="text-emerald-500 mb-4" size={32} />
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-gray-400 leading-relaxed">
            I began my journey into specialized mobile development in <span className="text-blue-400 font-medium">2021</span>, mastering <span className="text-blue-400 font-medium">Flutter</span> to build seamless cross-platform apps. 
            Beyond the frontend, I’ve developed a strong foundation in backend architecture, particularly with <span className="text-emerald-400 font-medium">Django</span>, allowing me to build end-to-end software solutions.
          </p>
        </motion.div>

        {/* Card 2: Education (Medium/Horizontal) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 flex items-center gap-6"
        >
          <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500">
            <GraduationCap size={30} />
          </div>
          <div>
            <h4 className="font-bold text-lg">Senior Year</h4>
            <p className="text-gray-400">Software Engineering Student (Final Year)</p>
          </div>
        </motion.div>

        {/* Card 3: Location (Small) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center"
        >
          <MapPin className="text-red-500 mb-2" size={28} />
          <span className="text-xs font-mono text-gray-500 uppercase">Location</span>
          <div className="mt-2 font-bold text-gray-200">Damascus, Syria</div>
        </motion.div>

        {/* Card 4: Current Stack (Small) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center"
        >
          <Cpu className="text-blue-500 mb-2" size={28} />
          <span className="text-xs font-mono text-gray-500 uppercase">Expertise</span>
          <div className="mt-2 font-bold text-blue-400">Flutter & Django</div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutBento;