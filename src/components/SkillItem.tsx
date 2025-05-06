import { Skill } from '@/lib/data';
import { 
  Code, Server, Database, Flame, Webhook, Layout, Pencil, GitBranch, Cloud, Lightbulb, PenTool, Palette
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface SkillItemProps {
  skill: Skill;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a staggered animation delay based on the index
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  // Get icon based on skill.icon string
  const getIcon = () => {
    switch (skill.icon) {
      case 'code':
        return <Code size={20} />;
      case 'server':
        return <Server size={20} />;
      case 'database':
        return <Database size={20} />;
      case 'flame':
        return <Flame size={20} />;
      case 'webhook':
        return <Webhook size={20} />;
      case 'layout':
        return <Layout size={20} />;
      case 'pencil':
        return <Pencil size={20} />;
      case 'palette':
        return <Palette size={20} />;
      case 'git-branch':
        return <GitBranch size={20} />;
      case 'cloud':
        return <Cloud size={20} />;
      default:
        return <Lightbulb size={20} />;
    }
  };

  // Calculate percentage based on level (1-5)
  const percentage = (skill.level / 5) * 100;

  return (
    <div 
      className={`p-5 rounded-lg border border-border bg-card hover:border-primary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ 
        animationDelay: `${index * 100}ms`,
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-3">
        <div className={`p-2 mr-3 rounded-md bg-primary/5 text-primary transition-all duration-300 ${
          isHovered ? 'scale-110 rotate-3' : ''
        }`}>
          {getIcon()}
        </div>
        <h3 className="font-medium">{skill.name}</h3>
      </div>
      
      <div className="mt-2">
        <div className="flex justify-between mb-1">
          <span className="text-xs text-muted-foreground">Proficiency</span>
          <span className={`text-xs font-medium transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-95'
          }`}>
            {percentage.toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
          <div 
            className={`bg-primary h-2 rounded-full transition-all duration-1000 ease-in-out ${
              isHovered ? 'animate-pulse' : ''
            }`}
            style={{ 
              width: `${percentage}%`,
              transitionDelay: `${index * 100}ms`,
              transform: isHovered ? 'scaleX(1.02)' : 'scaleX(1)',
              transformOrigin: 'left'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
