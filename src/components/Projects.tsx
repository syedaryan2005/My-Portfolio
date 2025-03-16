
import { useEffect, useRef, useState } from 'react';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

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

    // Parallax scroll effect
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (section) observer.unobserve(section);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Parallax background layers */}
      <div 
        className="parallax-bg parallax-bg-1" 
        style={{ 
          background: 'radial-gradient(circle at 50% 50%, rgba(120, 120, 120, 0.03) 0%, rgba(0, 0, 0, 0) 70%)',
          transform: `translateY(${scrollPosition * 0.05}px) translateZ(-100px) scale(1.5)`
        }}
      ></div>
      <div 
        className="parallax-bg parallax-bg-2" 
        style={{ 
          background: 'radial-gradient(circle at 80% 20%, rgba(200, 200, 200, 0.05) 0%, rgba(0, 0, 0, 0) 50%)',
          transform: `translateY(${scrollPosition * 0.08}px) translateZ(-50px) scale(1.25)`
        }}
      ></div>

      <div className="container max-w-6xl px-4 relative parallax-content">
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
            className="px-6 py-3 rounded-full font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:bg-primary/5"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
