import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 pb-12">
      {/* Background Decorative Element */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <h2 className="text-blue-500 font-mono tracking-[0.2em] mb-4 text-sm font-bold uppercase">
            Available for Projects
          </h2>
          
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
            Engineering fluid <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              mobile solutions.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I’m a Software Engineer specializing in building high-performance 
            cross-platform mobile applications with Flutter and robust Backend systems.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20"
            >
              View Work <ArrowRight size={20} />
            </motion.a>
            
            <div className="flex items-center gap-3">
              <SocialIcon 
                icon={<Github size={22} />} 
                link="https://github.com/YasserJ01" 
              />
              <SocialIcon 
                icon={<Linkedin size={22} />} 
                link="https://www.linkedin.com/in/yasser-jeroodi-2997042aa" 
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Interactive Card/Visual */}
        <motion.div 
          className="relative group order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Added overflow-x-auto here */}
          <div className="relative z-10 bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-3xl backdrop-blur-xl overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            {/* whitespace-nowrap keeps the code structure intact while scrolling */}
            <code className="text-xs md:text-base leading-relaxed whitespace-nowrap block">
              <p className="text-blue-400">const developer = {"{"}</p>
              <p className="pl-4 text-gray-300">name: <span className="text-emerald-400">'Yasser Jeroodi'</span>,</p>
              <p className="pl-4 text-gray-300">role: <span className="text-emerald-400">'Flutter Developer, Fresh QA Tester'</span>,</p>
              <p className="pl-4 text-gray-300">
                skills: [<span className="text-orange-300">'Flutter', 'Dart', 'Firebase', 'REST APIs'</span>],
              </p>
              <p className="pl-4 text-gray-300">passionate: <span className="text-blue-400">true</span></p>
              <p className="text-blue-400">{"}"};</p>
            </code>
          </div>
          {/* Animated Glow */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-all -z-10" />
        </motion.div>

      </div>
    </section>
  );
};

const SocialIcon = ({ icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, color: '#3B82F6' }}
    className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-gray-400 transition-colors"
  >
    {icon}
  </motion.a>
);

export default Hero;