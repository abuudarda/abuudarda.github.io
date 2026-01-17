import React from 'react';
import { SectionId } from '../types';
import { EXPERTISE_DATA, EXPERTISE_INTRO } from '../constants';
import { Icons } from './Icons';

export const Expertise: React.FC = () => {
  return (
    <section id={SectionId.EXPERTISE} className="py-24 px-6 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section with Intro Text */}
        <div className="mb-20 grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
                 <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4 block">Expertise</span>
                 <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 leading-tight">
                    {EXPERTISE_INTRO.title}
                 </h2>
            </div>
            <div className="flex flex-col gap-8">
                <p className="text-lg text-neutral-600 leading-relaxed font-light text-justify">
                    {EXPERTISE_INTRO.description}
                </p>
                <div>
                     <a 
                        href="https://www.nikles.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors group"
                     >
                        Try one of my chatbots in production
                        <Icons.ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTISE_DATA.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-2xl border border-neutral-100 hover:border-neutral-300 transition-colors shadow-sm hover:shadow-md">
              <h3 className="text-lg font-serif font-bold text-neutral-900 mb-6 relative inline-block">
                {item.title}
                <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-neutral-900"></span>
              </h3>
              <ul className="space-y-3">
                {item.skills.map((skill, idx) => (
                  <li key={idx} className="text-sm text-neutral-600 leading-relaxed flex items-start gap-2">
                    <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-neutral-300 flex-shrink-0"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};