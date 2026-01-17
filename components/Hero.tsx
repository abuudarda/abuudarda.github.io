import React, { useRef, useEffect, useState } from 'react';
import { SectionId } from '../types';
import { Icons } from './Icons';

// Component for the Interactive "D" Letter
const EyeD: React.FC<{ mousePos: { x: number; y: number }; className?: string }> = ({ mousePos, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pupilRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mousePos.x - centerX;
    const dy = mousePos.y - centerY;
    const angle = Math.atan2(dy, dx);
    
    // Calculate max distance based on the container size
    // Allow movement up to ~25% of the width (since pupil is centered)
    // This scales with the responsive font size
    const limit = rect.width * 0.25;

    // Use the actual distance to the mouse, clamped to the limit
    // This makes the eye follow the mouse 1:1 until it hits the edge
    const distance = Math.min(limit, Math.hypot(dx, dy));
    
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    pupilRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }, [mousePos]);

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block h-[0.75em] w-[0.65em] bg-neutral-900 rounded-r-full mr-[0.05em] align-baseline overflow-hidden ${className}`}
    >
      {/* The Pupil */}
      <div 
        ref={pupilRef}
        className="absolute top-1/2 left-1/2 w-[0.25em] h-[0.25em] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
      />
    </div>
  );
};

interface HeroProps {
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const line1 = "SPECIALIZED IN GENERATIVE AI, RAG ARCHITECTURES, AND AGENTIC WORKFLOWS";
  const line2 = "MASTERS IN GENAI CANDIDATE AT CUNY SPS";

  return (
    <section id={SectionId.HERO} className="min-h-screen flex flex-col justify-center bg-neutral-50 overflow-hidden relative">
      
      <div className="flex flex-col items-center justify-center w-full z-10 pt-20">
        
        {/* Top Name: ABU */}
        <div className="w-full max-w-7xl px-6 flex justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
           <h1 className="font-sans font-black text-[clamp(6rem,20vw,16rem)] leading-none tracking-tighter text-neutral-900">
             ABU
           </h1>
        </div>

        {/* Middle Vertical Scroll Strip */}
        <div className="w-full bg-neutral-900 py-3 md:py-6 my-4 md:my-8 rotate-[-2deg] scale-105 origin-center shadow-xl animate-fade-in-up relative" style={{ animationDelay: '0.3s' }}>
          {/* Height constrained container */}
          <div className="h-6 md:h-8 overflow-hidden relative w-full">
             <div className="animate-vertical-loop absolute top-0 left-0 w-full">
                {/* Item 1 */}
                <div className="h-6 md:h-8 flex items-center justify-center w-full">
                   <span className="text-white font-medium tracking-widest text-xs md:text-lg uppercase text-center px-4">
                      {line1}
                   </span>
                </div>
                {/* Item 2 */}
                <div className="h-6 md:h-8 flex items-center justify-center w-full">
                   <span className="text-white font-medium tracking-widest text-xs md:text-lg uppercase text-center px-4">
                      {line2}
                   </span>
                </div>
                {/* Item 1 Clone */}
                <div className="h-6 md:h-8 flex items-center justify-center w-full">
                   <span className="text-white font-medium tracking-widest text-xs md:text-lg uppercase text-center px-4">
                      {line1}
                   </span>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Name: DARDA with Interactive Eyes */}
        <div className="w-full max-w-7xl px-6 flex justify-center md:justify-end animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
           <div className="font-sans font-black text-[clamp(6rem,20vw,16rem)] leading-none tracking-tighter text-neutral-900 flex items-center">
             {/* Constructed D */}
             <EyeD mousePos={mousePos} />
             <span>AR</span>
             {/* Constructed D with extra margin-left to separate from R */}
             <EyeD mousePos={mousePos} className="ml-[0.2em]" />
             <span>A</span>
           </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 md:mt-24 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <button 
              onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-neutral-900 text-white rounded-full font-medium transition-all hover:bg-neutral-800 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              View Work
              <Icons.ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white border border-neutral-200 text-neutral-900 rounded-full font-medium transition-all hover:border-neutral-900 hover:scale-105 flex items-center justify-center"
            >
              Get in Touch
            </button>
          </div>

          <button 
            onClick={onOpenChat}
            className="px-6 py-3 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all flex items-center gap-2 text-sm font-medium border border-transparent hover:border-neutral-200"
          >
             <Icons.Bot size={18} />
             Ask about me
          </button>
        </div>

      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-200/30 rounded-full blur-3xl -z-0 pointer-events-none" />
    </section>
  );
};