
import { useState, useRef, useEffect } from 'react';
import { Project } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass(
      index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
    );
  }, [index]);

  // Custom tilt settings
  const tiltOptions = {
    tiltMaxAngleX: 8,
    tiltMaxAngleY: 8,
    perspective: 1000,
    transitionSpeed: 1500,
    scale: isHovered ? 1.05 : 1,
    glareEnable: true,
    glareMaxOpacity: 0.15,
    glareColor: "#ffffff",
    glarePosition: "all",
    glareBorderRadius: "12px"
  };

  return (
    <Tilt {...tiltOptions} className={`group opacity-0 ${animationClass}`}>
      <div 
        ref={cardRef}
        className="rounded-2xl overflow-hidden transition-all duration-300 shadow-sm transform-gpu bg-white border border-border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="relative p-6 bg-white glass-dark border-t border-border">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 
            className="text-xl font-bold mb-2 relative overflow-hidden group-hover:text-primary transition-colors duration-300"
          >
            <span className="project-title-glitch">{project.title}</span>
          </h3>
          
          <p className="text-muted-foreground mb-4">
            {project.description}
          </p>
          
          <div className="flex space-x-3 mt-4">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
