import React from 'react';
import { SectionId } from '../types';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
      <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-12 block">Experience</span>
        
        <div className="space-y-12">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 transition-all">
              <div className="text-sm text-neutral-400 font-medium py-1">
                {exp.period}
              </div>
              <div>
                <h3 className="text-xl font-medium text-neutral-900 mb-1">{exp.role}</h3>
                <h4 className="text-base text-neutral-500 mb-4">{exp.company}</h4>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-neutral-600 leading-relaxed text-sm text-justify">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};