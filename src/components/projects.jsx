import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ZoomIn } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
        <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            layout
            className="group bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden flex flex-col h-full"
          >
            {/* Image Container with Click to Zoom */}
            <div 
              className="h-64 overflow-hidden relative cursor-zoom-in group"
              onClick={() => setSelectedImg(project.image)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                  <ZoomIn className="text-white" size={24} />
                </div>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
              
              <div className="flex items-center gap-5 pt-4 border-t border-slate-800/50">
                <a href={project.github} target="_blank" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm"><Github size={18} /> Source</a>
                <a href={project.link} target="_blank" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm"><ExternalLink size={18} /> Live</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImg}
              alt="Full view"
              className="max-w-full max-h-full rounded-lg shadow-2xl shadow-blue-500/10 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;