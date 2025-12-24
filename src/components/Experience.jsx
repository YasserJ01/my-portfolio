// import { motion, useScroll, useSpring } from 'framer-motion';
// import { useRef } from 'react';
// import { experiences } from '../data/experience';
// import Reveal from './Reveal';

// const Experience = () => {
//   const ref = useRef(null);
  
//   // Track scroll progress within this specific section
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "center start"]
//   });

//   // Smooth out the line animation for a "liquid" feel
//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <section ref={ref} className="py-24 px-6 max-w-4xl mx-auto relative" id="experience">
//       <Reveal>
//         <div className="mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
//           <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
//         </div>
//       </Reveal>

//       {/* --- FIXED: The Animated Vertical Line --- */}
//       <div className="absolute left-9 top-64 bottom-24 w-1 bg-slate-800 hidden md:block rounded-full overflow-hidden">
//         <motion.div 
//           style={{ scaleY }}
//           className="w-full h-full bg-blue-500 origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)]"
//         />
//       </div>

//       <div className="space-y-20">
//         {experiences.map((exp, index) => (
//           <div key={index} className="relative pl-0 md:pl-24">
//             {/* Timeline Dot - Only visible on desktop */}
//             <div className="absolute left-7 top-2 w-5 h-5 bg-[#0A0E12] border-4 border-blue-500 rounded-full z-10 hidden md:block" />
            
//             <Reveal delay={index * 0.1}>
//               <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/30 transition-colors backdrop-blur-sm group">
//                 <span className="text-blue-500 font-mono font-bold text-sm uppercase tracking-widest">
//                   {exp.year}
//                 </span>
//                 <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-blue-400 transition-colors">
//                   {exp.title}
//                 </h3>
//                 <h4 className="text-lg text-emerald-400 font-medium mb-4">
//                   {exp.company}
//                 </h4>
//                 <p className="text-gray-400 leading-relaxed">
//                   {exp.description}
//                 </p>
//               </div>
//             </Reveal>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;