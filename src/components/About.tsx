import { aboutData } from '@/lib/data';
import { MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container max-w-5xl px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 mb-3">
            About Me
          </div>
          <h2 className="section-title">Get to Know Me</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My journey, skills, and what drives me as a developer
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3 animate-on-scroll">
              <h3 className="text-xl font-bold">Who I Am</h3>
              <p className="text-muted-foreground">{aboutData.bio}</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">What I Do</h3>
              <p className="text-muted-foreground">
                I specialize in building responsive, performant web applications using modern JavaScript frameworks. My approach combines technical expertise with an eye for design to create intuitive user experiences.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-muted-foreground" />
                <span>{aboutData.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-muted-foreground" />
                <span>{aboutData.email}</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href={aboutData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={aboutData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={aboutData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-dark magic-lighting">
              <img
                src="/Aryan.jpg"
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
