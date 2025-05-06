import { ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#007BFF]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#007BFF]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-5xl text-center px-4 z-10 py-8 md:py-0">
        <p className="text-base uppercase font-medium tracking-wider text-[#007BFF] mb-4">
          Hello, I'm
        </p>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Syed Aryan Ali Shah
        </h1>
        
        <div className="min-h-[4rem] text-xl sm:text-2xl md:text-3xl font-display mb-8 text-[#007BFF]">
          I'm a{' '}
          <AnimatedText 
            texts={[
              'Full-Stack Developer',
              'Python Developer',
              'Problem Solver',
              'Tech Innovator',
            ]}
            className="font-bold"
          />
        </div>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          I craft elegant, user-centric web applications with modern technologies, focusing on performance, accessibility, and delightful user experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 mb-8">
          <a
            href="#projects"
            className="btn-primary w-full sm:w-auto"
          >
            View My Work
          </a>
          
          <a
            href="#contact"
            className="btn-secondary w-full sm:w-auto"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#007BFF] transition-colors duration-300 hover:text-[#0056b3]"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="scroll-indicator" />
      </button>
    </section>
  );
};

export default Hero;
