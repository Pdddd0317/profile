import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Calendar } from 'lucide-react';
import { Education as EducationType, Award, UIContent } from '../types';

interface EducationProps {
  education: EducationType[];
  awards: Award[];
  ui: UIContent;
}

const Education: React.FC<EducationProps> = ({ education, awards, ui }) => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Education Column */}
        <div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-3 mb-8"
          >
            <GraduationCap size={32} className="text-blue-400" />
            <h2 className="text-3xl font-bold text-white">{ui.sectionTitles.education}</h2>
          </motion.div>
          
          <div className="space-y-8">
            {education.map((edu, idx) => (
                <div key={idx} className="group relative bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                        <span className="text-sm text-zinc-500">{edu.period}</span>
                    </div>
                    <p className="text-blue-300 font-medium mb-1">{edu.degree}</p>
                    <p className="text-zinc-400 text-sm mb-4">{edu.details}</p>
                    <div className="flex gap-2">
                        {edu.tags.map((tag, i) => (
                            <span key={i} className="text-xs bg-zinc-800 px-2 py-1 rounded text-zinc-400 border border-zinc-700">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
          </div>
        </div>

        {/* Awards Column */}
        <div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex items-center gap-3 mb-8"
          >
            <Trophy size={32} className="text-yellow-500" />
            <h2 className="text-3xl font-bold text-white">{ui.sectionTitles.awards}</h2>
          </motion.div>

          <div className="space-y-4">
            {awards.map((award, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center justify-between p-4 border-b border-zinc-800 hover:bg-zinc-900/50 rounded-lg transition-colors"
                >
                    <span className="text-zinc-200 font-medium">{award.title}</span>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm">
                        <Calendar size={14} />
                        <span>{award.date}</span>
                    </div>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;