import React from 'react';
import { Mail, Github, Linkedin, Smartphone } from 'lucide-react';
import { PersonalInfo, UIContent } from '../types';

interface ContactProps {
  data: PersonalInfo;
  ui: UIContent;
}

const Contact: React.FC<ContactProps> = ({ data, ui }) => {
  return (
    <footer id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-zinc-900 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          {ui.sectionTitles.contactTitle}
        </h2>
        <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
          {ui.sectionTitles.contactSubtitle}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <a href={`mailto:${data.email}`} className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
                <Mail size={20} />
                {ui.sectionTitles.emailButton}
            </a>
            <a href={`tel:${data.phone}`} className="flex items-center justify-center gap-2 bg-zinc-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-zinc-700 transition-colors border border-zinc-700">
                <Smartphone size={20} />
                {ui.sectionTitles.callButton}
            </a>
        </div>

        <div className="flex justify-center gap-8 text-zinc-500">
            <a href="#" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Github size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Linkedin size={24} />
            </a>
        </div>
        
        <div className="mt-16 text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} {data.englishName}. {ui.sectionTitles.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Contact;