import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../constants';
import { Icons } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.EXPERTISE, label: 'Expertise' },
    { id: SectionId.EDUCATION, label: 'Education' },
    { id: SectionId.EXPERIENCE, label: 'Experience' },
    { id: SectionId.PROJECTS, label: 'Projects' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-neutral-100 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Name */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-tight text-neutral-900 font-serif"
        >
          {PERSONAL_INFO.name}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-neutral-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-lg md:hidden flex flex-col p-6 gap-4">
           {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-base font-medium text-neutral-600 hover:text-neutral-900"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};