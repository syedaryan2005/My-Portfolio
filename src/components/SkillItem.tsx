
import { Skill } from '@/lib/data';
import { 
  Code, Server, Database, Flame, Webhook, Layout, Pencil, GitBranch, Cloud, Lightbulb, PenTool, Palette
} from 'lucide-react';

interface SkillItemProps {
  skill: Skill;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
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

  // Create array for skill level dots
  const levelDots = Array.from({ length: 5 }, (_, i) => (
    <div 
      key={i}
      className={`w-1.5 h-1.5 rounded-full ${i < skill.level ? 'bg-primary' : 'bg-primary/20'}`}
    ></div>
  ));

  return (
    <div 
      className="flex items-center p-4 rounded-lg border border-border group hover:border-primary/20 transition-all duration-300 animate-on-scroll"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="p-2 mr-3 rounded-md bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors duration-300">
        {getIcon()}
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{skill.name}</h3>
          <div className="flex space-x-1">
            {levelDots}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
