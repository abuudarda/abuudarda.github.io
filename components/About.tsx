import React from 'react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
                <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4 block">About Me</span>
                <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 leading-tight">
                   Based in <br />
                   {PERSONAL_INFO.location}
                </h2>
            </div>
            <div className="text-lg text-neutral-600 leading-relaxed space-y-6 text-justify">
                <p>{PERSONAL_INFO.about}</p>
            </div>
        </div>
      </div>
    </section>
  );
};