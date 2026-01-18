import React from 'react';
import { SectionId } from '../types';
import { CERTIFICATIONS } from '../constants';
import { Icons } from './Icons';

export const Certifications: React.FC = () => {
  return (
    <section id={SectionId.CERTIFICATIONS} className="py-24 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
                 <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4 block">Certifications</span>
                 <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 leading-tight">
                    Continuous <br/> Learning
                 </h2>
            </div>
            
            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 hover:border-neutral-300 transition-colors flex items-center justify-between gap-4 group">
                    <div className="flex items-center gap-4">
                        <div className="text-neutral-400 group-hover:text-neutral-900 transition-colors">
                                <Icons.Award size={24} />
                        </div>
                        <div>
                            <h3 className="font-medium text-neutral-900 text-lg">{cert.title}</h3>
                            <p className="text-neutral-500 text-sm">{cert.issuer}</p>
                        </div>
                    </div>
                    {cert.link && (
                         <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-white rounded-full transition-all"
                            aria-label="View Certification"
                         >
                            <Icons.ArrowUpRight size={20} />
                         </a>
                    )}
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};