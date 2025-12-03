import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github } from 'lucide-react';
import { Project, UIContent } from '../types';

interface ProjectsProps {
  data: Project[];
  ui: UIContent;
}

const Projects: React.FC<ProjectsProps> = ({ data, ui }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white"
        >
          {ui.sectionTitles.projects} <span className="text-zinc-600 text-2xl font-normal ml-2">{ui.sectionTitles.projectsSubtitle}</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group relative cursor-pointer bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video w-full overflow-hidden bg-zinc-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <ArrowUpRight size={20} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-zinc-400 text-sm line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300">{tech}</span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-500">+{project.techStack.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Expansion */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              
              <motion.div 
                layoutId={selectedId}
                className="relative w-full max-w-2xl bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl max-h-[85vh] overflow-y-auto"
              >
                {/* Find selected project */}
                {(() => {
                  const project = data.find(p => p.id === selectedId)!;
                  return (
                    <>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                        className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white z-10 transition-colors"
                      >
                        <X size={20} />
                      </button>
                      
                      <div className="aspect-video w-full bg-zinc-800">
                         <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </div>

                      <div className="p-8">
                        <div className="flex justify-between items-center mb-1">
                             <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                             <span className="text-sm font-mono text-zinc-500">{project.period}</span>
                        </div>
                        <p className="text-blue-400 font-medium mb-6">{project.role}</p>
                        
                        <div className="mb-6">
                            <h4 className="text-sm uppercase tracking-wider text-zinc-500 mb-3">Technology</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-zinc-800 text-blue-200 rounded-full text-sm border border-zinc-700">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm uppercase tracking-wider text-zinc-500 mb-3">Key Achievements</h4>
                            <ul className="space-y-2">
                                {project.achievements.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-zinc-300 leading-relaxed">
                                        <span className="text-blue-500 mt-1.5">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-end">
                            <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors">
                                <Github size={18} />
                                {project.buttonText}
                            </button>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;