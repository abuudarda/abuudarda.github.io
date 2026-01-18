import React from 'react';
import { SectionId } from '../types';
import { ACHIEVEMENTS } from '../constants';
import { Icons } from './Icons';

export const Achievements: React.FC = () => {
  return (
    <section id={SectionId.ACHIEVEMENTS} className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
                 <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4 block">Key Achievements</span>
                 <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 leading-tight">
                    Awards & <br/> Recognition
                 </h2>
            </div>
            
            <div className="grid gap-6">
              {ACHIEVEMENTS.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="bg-neutral-50 p-3 rounded-full text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors flex-shrink-0">
                        <Icons.Trophy size={20} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-neutral-900">
                            {item.title}
                        </h3>
                        <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                             {item.organization} {item.year && `• ${item.year}`}
                        </div>
                        {item.description && (
                            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                            {item.description}
                            </p>
                        )}
                        {item.links && item.links.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {item.links.map(link => (
                                    <a 
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-2 py-1 rounded-full transition-colors bg-neutral-50 hover:bg-white"
                                    >
                                        {link.label}
                                        <Icons.ExternalLink size={10} />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};