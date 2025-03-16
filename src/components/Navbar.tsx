
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-display font-bold tracking-tight text-gradient"
        >
          Aryan Shah
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['about', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover-link text-sm font-medium capitalize"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container flex flex-col items-center justify-center h-full space-y-8">
          {['about', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-2xl font-medium capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
