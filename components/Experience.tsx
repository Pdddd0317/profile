import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Experience as ExperienceType, UIContent } from '../types';

interface ExperienceProps {
  data: ExperienceType[];
  ui: UIContent;
}

const Experience: React.FC<ExperienceProps> = ({ data, ui }) => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white"
        >
          {ui.sectionTitles.experience} <span className="text-zinc-600 text-2xl font-normal ml-2">{ui.sectionTitles.experienceSubtitle}</span>
        </motion.h2>

        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
          {data.map((job, idx) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-1 w-6 h-6 bg-zinc-950 border-2 border-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{job.company}</h3>
                <span className="text-sm font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800 w-fit mt-1 sm:mt-0">
                  {job.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-blue-400 font-medium mb-4">
                <Briefcase size={16} />
                <span>{job.role}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">{job.location}</span>
              </div>

              <ul className="space-y-2">
                {job.description.map((desc, i) => (
                  <li key={i} className="text-zinc-400 leading-relaxed pl-4 border-l-2 border-zinc-800 hover:border-zinc-600 transition-colors">
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;