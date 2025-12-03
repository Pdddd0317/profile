import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { PersonalInfo } from '../types';

interface HeroProps {
  data: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-10 px-6">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto z-10"
      >
        {/* Avatar Container with Glow */}
        <div className="relative mx-auto w-40 h-40 mb-8 group">
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
           <img 
            src={data.avatarUrl}
            alt={data.name}
            className="relative w-full h-full object-cover rounded-full border-4 border-black shadow-2xl"
           />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{data.englishName || data.name}</span>.
        </h1>
        
        <h2 className="text-xl md:text-2xl text-zinc-400 font-medium mb-8">
          {data.title}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-zinc-400 mb-10 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-zinc-900/50 backdrop-blur px-4 py-2 rounded-full border border-zinc-800">
            <MapPin size={16} className="text-blue-400" /> {data.location}
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/50 backdrop-blur px-4 py-2 rounded-full border border-zinc-800">
            <Mail size={16} className="text-purple-400" /> {data.email}
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/50 backdrop-blur px-4 py-2 rounded-full border border-zinc-800">
             <Phone size={16} className="text-green-400" /> {data.phone}
          </div>
        </div>

        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-12 text-justify indent-8">
          {data.intro}
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {data.ctaButton}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;