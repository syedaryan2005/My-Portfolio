
import { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(0, 0, 0, ${Math.random() * 0.2})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(100, Math.floor(window.innerWidth / 10));
    
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Draw connections
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 * (1 - distance/100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-10 opacity-70"
        aria-hidden="true"
      />
      
      <div className="container max-w-5xl text-center px-4 z-10">
        <p className="text-sm sm:text-base uppercase font-medium tracking-wider text-muted-foreground mb-4 opacity-0 animate-slide-down">
          Hello, I'm
        </p>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 opacity-0 animate-slide-up animation-delay-200">
          Syed Aryan Ali Shah
        </h1>
        
        <div className="text-xl sm:text-2xl md:text-3xl font-display mb-8 h-12 opacity-0 animate-fade-in animation-delay-400">
          I'm a{" "}
          <AnimatedText 
            texts={[
              "Full-Stack Developer",
              "UI/UX Enthusiast",
              "Problem Solver",
              "Tech Innovator"
            ]}
            className="text-gradient font-bold"
          />
        </div>
        
        <p className="max-w-xl mx-auto text-muted-foreground mb-10 opacity-0 animate-fade-in animation-delay-600">
          I craft elegant, user-centric web applications with modern technologies, 
          focusing on performance, accessibility, and delightful user experiences.
        </p>
        
        <div className="flex justify-center space-x-4 opacity-0 animate-fade-in animation-delay-800">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 glass-dark"
          >
            View My Work
          </a>
          
          <a
            href="#contact"
            className="px-6 py-3 rounded-full font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground transition-colors duration-300 hover:text-primary"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="scroll-indicator" />
      </button>
    </section>
  );
};

export default Hero;
