
import { useEffect, useRef } from 'react';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll('.animate-on-scroll').forEach((el) => {
              el.classList.add('is-visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 sm:py-32 bg-secondary/50"
    >
      <div className="container max-w-6xl px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/5 mb-3 animate-on-scroll">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            A selection of my recent web development projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
