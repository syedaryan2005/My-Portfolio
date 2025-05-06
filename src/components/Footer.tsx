import { Github, Linkedin, Twitter } from 'lucide-react';
import { aboutData } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t bg-white/70 backdrop-blur-md shadow-lg mt-16">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-display font-bold text-gradient drop-shadow-sm mb-1">
            {aboutData.name}
          </h2>
          <p className="text-muted-foreground text-sm mb-2">
            {aboutData.title}
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Aryan Shah. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href={aboutData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={aboutData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={aboutData.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
