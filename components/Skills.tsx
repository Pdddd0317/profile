import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, Globe } from 'lucide-react';
import { Skill, UIContent } from '../types';

interface SkillsProps {
  data: Skill[];
  ui: UIContent;
}

const Skills: React.FC<SkillsProps> = ({ data, ui }) => {
  const getIcon = (category: string) => {
    // Basic detection based on keywords in both EN and ZH
    const lowerCat = category.toLowerCase();
    if (lowerCat.includes("编程") || lowerCat.includes("program")) return <Code2 size={24} className="text-blue-400" />;
    if (lowerCat.includes("框架") || lowerCat.includes("framework")) return <Terminal size={24} className="text-purple-400" />;
    if (lowerCat.includes("核心") || lowerCat.includes("core")) return <Cpu size={24} className="text-orange-400" />;
    return <Globe size={24} className="text-green-400" />;
  };

  return (
    <section id="skills" className="py-20 px-6 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white"
        >
          {ui.sectionTitles.skills} <span className="text-zinc-600 text-2xl font-normal ml-2">{ui.sectionTitles.skillsSubtitle}</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-800 rounded-2xl">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-lg text-sm border border-zinc-700/50">
                      {item}
                    </span>
                  ))}
                </div>
                
                {/* Progress Bar Visual */}
                <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skillGroup.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;