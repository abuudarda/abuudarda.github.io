import React from 'react';
import { SectionId } from '../types';
import { SOCIALS, PERSONAL_INFO } from '../constants';
import { Icons } from './Icons';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-6xl mb-8">Let's work together.</h2>
        <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
          I'm currently available for freelance work and open to full-time opportunities.
        </p>
        
        <div className="flex flex-col items-center gap-3 mb-12 text-neutral-300">
           <p className="text-lg font-light">{PERSONAL_INFO.address}</p>
           <a 
             href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`} 
             className="text-lg font-light hover:text-white transition-colors"
           >
             {PERSONAL_INFO.phone}
           </a>
        </div>

        <div className="flex justify-center gap-6 mb-20">
            {SOCIALS.map(social => {
                return (
                    <a 
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                    >
                        <span>{social.platform}</span>
                        <Icons.ArrowUpRight size={14} />
                    </a>
                )
            })}
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
            <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
            <p>Designed with minimalism in mind.</p>
        </div>
      </div>
    </section>
  );
};