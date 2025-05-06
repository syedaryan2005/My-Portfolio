import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Track scroll position
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Dynamically calculate CSS properties based on scroll position for parallax effect
  const dynamicStyle = {
    '--scroll-position': scrollPosition + 'px',
  } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-background relative" style={dynamicStyle}>
      <div className="animated-bg">
        <div className="animated-blob animated-blob-1"></div>
        <div className="animated-blob animated-blob-2"></div>
        <div className="animated-blob animated-blob-3"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
