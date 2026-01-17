import React from 'react';
import { SectionId } from '../types';
import { EDUCATION } from '../constants';
import { Icons } from './Icons';

export const Education: React.FC = () => {
  return (
    <section id={SectionId.EDUCATION} className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
      <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-12 block">Education</span>
        
        <div className="space-y-12">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 transition-all">
              <div className="text-sm text-neutral-400 font-medium py-1">
                {edu.period}
              </div>
              <div>
                <h3 className="text-xl font-medium text-neutral-900 mb-1">{edu.degree}</h3>
                <h4 className="text-base text-neutral-500 mb-4">{edu.institution}</h4>
                <ul className="space-y-2 mb-4">
                  {edu.description.map((item, i) => (
                    <li key={i} className="text-neutral-600 leading-relaxed text-sm text-justify">
                      {item}
                    </li>
                  ))}
                </ul>
                {edu.links && (
                  <div className="flex gap-4">
                    {edu.links.map(link => (
                      <a 
                        key={link.label} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors flex items-center gap-1"
                      >
                        {link.label}
                        <Icons.ArrowUpRight size={10} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};