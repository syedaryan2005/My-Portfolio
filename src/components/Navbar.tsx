import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out backdrop-blur-md bg-white/70 shadow-lg',
      )}
    >
      <div className="container flex items-center justify-between py-3">
        <a 
          href="#" 
          className="text-2xl font-display font-bold tracking-tight text-gradient drop-shadow-sm flex items-center h-10 relative z-50"
        >
          <AnimatedText
            texts={['Syed Aryan Ali Shah']}
            className="text-gradient font-bold"
          />
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['about', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover-link text-base font-medium capitalize px-2 py-1 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {item}
            </button>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden text-foreground relative z-50"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 top-0 bg-white/95 z-40 transition-all duration-300 ease-in-out md:hidden backdrop-blur-lg',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div className="container flex flex-col items-center justify-center min-h-screen pt-24">
          {['about', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-2xl font-semibold capitalize text-gradient px-4 py-4 rounded hover:bg-primary/10 transition-colors w-full text-center"
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
