
import { useEffect, useRef } from 'react';
import { aboutData } from '@/lib/data';
import { MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="container max-w-5xl px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/5 mb-3 animate-on-scroll">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Get to Know Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            My journey, skills, and what drives me as a developer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3 animate-on-scroll">
              <h3 className="text-xl font-bold">Who I Am</h3>
              <p className="text-muted-foreground">
                {aboutData.bio}
              </p>
            </div>
            
            <div className="space-y-3 animate-on-scroll">
              <h3 className="text-xl font-bold">What I Do</h3>
              <p className="text-muted-foreground">
                I specialize in building responsive, performant web applications using 
                modern JavaScript frameworks. My approach combines technical expertise with 
                an eye for design to create intuitive user experiences.
              </p>
            </div>
            
            <div className="space-y-4 animate-on-scroll">
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-muted-foreground" />
                <span>{aboutData.location}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-muted-foreground" />
                <span>{aboutData.email}</span>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-2 animate-on-scroll">
              <a
                href={aboutData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              
              <a
                href={aboutData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              <a
                href={aboutData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-dark magic-lighting">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Syed Aryan Ali Shah"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-1/2 aspect-square rounded-2xl glass opacity-50" aria-hidden="true"></div>
            <div className="absolute -top-6 -left-6 w-1/3 aspect-square rounded-2xl glass opacity-30" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
