import React from 'react';
import { SectionId, Project } from '../types';
import { PROJECTS } from '../constants';
import { Icons } from './Icons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group bg-neutral-50 p-8 rounded-3xl hover:bg-neutral-100 transition-colors duration-300 relative overflow-hidden h-full flex flex-col">
    <div className="flex justify-between items-start mb-6">
      <div className="flex gap-2">
         {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium border border-neutral-200 px-2 py-1 rounded-full bg-white">
              {tag}
            </span>
         ))}
      </div>
      <div className="flex gap-2">
        {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-neutral-900 hover:scale-110 transition-transform shadow-sm" aria-label="GitHub">
                <Icons.Github size={16} />
            </a>
        )}
        {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 rounded-full text-white hover:scale-110 transition-transform shadow-sm" aria-label="Visit Site">
                <Icons.ArrowUpRight size={16} />
            </a>
        )}
      </div>
    </div>
    
    <h3 className="text-xl font-serif text-neutral-900 mb-3">{project.title}</h3>
    <p className="text-neutral-600 mb-6 leading-relaxed text-sm flex-grow text-justify">{project.description}</p>
  </div>
);

export const Projects: React.FC = () => {
  const professionalProjects = PROJECTS.filter(p => p.category === 'professional');
  const researchProjects = PROJECTS.filter(p => p.category === 'research');
  const personalProjects = PROJECTS.filter(p => p.category === 'personal');

  return (
    <section id={SectionId.PROJECTS} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-16 block">Selected Work</span>
        
        {/* Professional */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif text-neutral-900 mb-8 flex items-center gap-4">
            Professional Projects 
            <span className="h-px bg-neutral-100 flex-grow"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Research */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif text-neutral-900 mb-8 flex items-center gap-4">
            Research & Publications
            <span className="h-px bg-neutral-100 flex-grow"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Personal */}
        <div>
          <h2 className="text-2xl font-serif text-neutral-900 mb-8 flex items-center gap-4">
            Personal Projects
            <span className="h-px bg-neutral-100 flex-grow"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};