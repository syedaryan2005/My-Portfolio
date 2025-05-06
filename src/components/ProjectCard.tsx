import { Project } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#007BFF]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-[#007BFF]/10 text-[#007BFF]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-foreground group-hover:text-[#007BFF] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-3 pt-2">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#007BFF] hover:text-[#0056b3] transition-colors"
            >
              <ExternalLink size={16} />
              View Demo
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
