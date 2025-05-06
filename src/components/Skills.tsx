import { useRef, useState, useEffect } from 'react';
import { skills } from '@/lib/data';
import SkillItem from './SkillItem';
import { motion } from 'framer-motion';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'other', label: 'Other' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Get the counts for each category
  const categoryCounts = {
    frontend: skills.filter(skill => skill.category === 'frontend').length,
    backend: skills.filter(skill => skill.category === 'backend').length,
    design: skills.filter(skill => skill.category === 'design').length,
    other: skills.filter(skill => skill.category === 'other').length,
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-background/50 to-background"
    >
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container max-w-6xl px-4">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 mb-3">
            Professional Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            My Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficiency in various technologies that enable me to deliver high-quality solutions
          </p>
        </div>

        {/* Skills distribution summary */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.slice(1).map((category, index) => (
            <div 
              key={category.id}
              className="bg-card border border-border rounded-lg p-5 text-center hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-medium mb-2">{category.label}</h3>
              <div className="flex justify-center">
                <div className="relative w-20 h-20">
                  <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                    <circle 
                      cx="18" cy="18" r="16" 
                      fill="none" 
                      className="stroke-secondary" 
                      strokeWidth="3.6" 
                    />
                    <circle 
                      cx="18" cy="18" r="16" 
                      fill="none" 
                      className="stroke-primary transition-all duration-1000 ease-in-out" 
                      strokeWidth="3.6" 
                      strokeDasharray={`${100} 100`}
                      strokeDashoffset={isVisible ? 100 - (categoryCounts[category.id as keyof typeof categoryCounts] / skills.length * 100) : 100}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold">{categoryCounts[category.id as keyof typeof categoryCounts]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Category filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-secondary/50 hover:bg-secondary hover:shadow-md'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {category.label}
              {category.id !== 'all' && (
                <span className="ml-1 opacity-70">({categoryCounts[category.id as keyof typeof categoryCounts]})</span>
              )}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[120px]">
          {filteredSkills.length === 0 ? (
            <div className="col-span-full text-center text-muted-foreground py-12 text-lg">
              No skills found for this category.
            </div>
          ) : (
            filteredSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
