import { useState } from 'react';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section bg-white">
      <div className="container max-w-6xl px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#007BFF]/10 text-[#007BFF] mb-3">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent web development projects
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-[#007BFF] text-white shadow-lg'
                  : 'bg-[#007BFF]/5 text-foreground hover:bg-[#007BFF]/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#007BFF] text-white font-medium 
                     hover:bg-[#0056b3] transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
