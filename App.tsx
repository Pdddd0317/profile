import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA_ZH, DATA_EN } from './constants';
import { ResumeData } from './types';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  const data: ResumeData = lang === 'zh' ? DATA_ZH : DATA_EN;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: data.ui.nav.skills, id: 'skills' },
    { label: data.ui.nav.projects, id: 'projects' },
    { label: data.ui.nav.experience, id: 'experience' },
    { label: data.ui.nav.education, id: 'education' },
    { label: data.ui.nav.contact, id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="bg-black min-h-screen text-zinc-100 selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-black/70 backdrop-blur-xl border-zinc-800/50 py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            Alfred<span className="text-blue-500">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-3 py-1.5 rounded-full transition-colors border border-zinc-700"
            >
              <Globe size={14} />
              {lang === 'zh' ? 'EN' : '中'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-xs font-semibold bg-zinc-800 text-zinc-200 px-3 py-1.5 rounded-full border border-zinc-700"
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
            <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
            >
                <div className="flex flex-col gap-6 text-2xl font-semibold">
                    {navItems.map((item) => (
                    <button 
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-zinc-400 hover:text-white border-b border-zinc-800 pb-4"
                    >
                        {item.label}
                    </button>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero data={data.personalInfo} />
        <Skills data={data.skills} ui={data.ui} />
        <Projects data={data.projects} ui={data.ui} />
        <Experience data={data.experience} ui={data.ui} />
        <Education education={data.education} awards={data.awards} ui={data.ui} />
      </main>

      <Contact data={data.personalInfo} ui={data.ui} />
    </div>
  );
};

export default App;