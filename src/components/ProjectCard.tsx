
import { useState, useRef, useEffect } from 'react';
import { Project } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass(
      index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
    );
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className={`group rounded-2xl overflow-hidden transition-all duration-300 shadow-sm opacity-0 ${animationClass}`}
      style={{ 
        transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)` : 'perspective(1000px) rotateX(0) rotateY(0)',
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetRotation();
      }}
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

      <div className="relative p-6 bg-white glass-dark border border-border">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary"
              style={{ transform: 'translateZ(10px)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 
          className="text-xl font-bold mb-2"
          style={{ transform: 'translateZ(15px)' }}
        >
          {project.title}
        </h3>
        
        <p 
          className="text-muted-foreground mb-4"
          style={{ transform: 'translateZ(5px)' }}
        >
          {project.description}
        </p>
        
        <div 
          className="flex space-x-3 mt-4"
          style={{ transform: 'translateZ(20px)' }}
        >
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
  );
};

export default ProjectCard;
