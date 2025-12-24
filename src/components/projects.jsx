import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data/projects';
import Reveal from './Reveal';

const ProjectCard = ({ project, variants }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Define a threshold for showing the "Read More" button
  const isLongDescription = project.description.length > 150;

  return (
    <motion.div 
      variants={variants}
      layout // Smoothly animates the card size change
      whileHover={{ y: isExpanded ? 0 : -12 }}
      className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col h-full"
    >
      {/* Project Image Placeholder */}
      <div className="h-52 bg-slate-800 flex items-center justify-center overflow-hidden relative shrink-0">
         <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500" />
         <div className="text-slate-600 font-bold tracking-widest group-hover:scale-110 group-hover:text-slate-500 transition-all duration-700">
           {project.tags.includes('Web') ? 'WEB PLATFORM' : 'MOBILE APP'}
         </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex gap-2 mb-5 flex-wrap">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        {/* Expandable Description */}
        <div className="relative mb-6">
          <p className={`text-gray-400 text-sm leading-relaxed transition-all duration-300 ${!isExpanded && isLongDescription ? 'line-clamp-3' : ''}`}>
            {project.description}
          </p>
          
          {isLongDescription && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-blue-400 text-xs font-bold mt-3 hover:text-blue-300 transition-colors"
            >
              {isExpanded ? (
                <>Show Less <ChevronUp size={14} /></>
              ) : (
                <>Read More <ChevronDown size={14} /></>
              )}
            </button>
          )}
        </div>

        {/* Links Area - Pushed to the bottom */}
        <div className="mt-auto flex items-center gap-5 pt-4 border-t border-slate-800/50">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <Github size={18} /> Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
      <Reveal>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
        </div>
      </Reveal>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} variants={itemVariants} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;