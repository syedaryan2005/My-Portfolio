
import { useEffect, useRef, useState } from 'react';
import { skills } from '@/lib/data';
import SkillItem from './SkillItem';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'other', label: 'Other' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

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
      id="skills" 
      ref={sectionRef}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="container max-w-5xl px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/5 mb-3 animate-on-scroll">
            My Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            The technologies and tools I use to bring projects to life
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8 animate-on-scroll">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
