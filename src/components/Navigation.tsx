import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-2xl border-b-4 border-black' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl text-black hover:bg-black hover:text-white transition-all px-4 py-2 border-2 border-black"
          >
            {'<DEV/>'}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToSection('about')}
              className="text-black hover:bg-black hover:text-white transition-all px-6 py-3 border-2 border-black uppercase tracking-wider"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-black hover:bg-black hover:text-white transition-all px-6 py-3 border-2 border-black uppercase tracking-wider"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-black hover:bg-black hover:text-white transition-all px-6 py-3 border-2 border-black uppercase tracking-wider"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition-all border-2 border-black uppercase tracking-wider"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black border-2 border-black p-2 hover:bg-black hover:text-white transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t-4 border-black shadow-2xl">
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-3 px-4 text-black hover:bg-black hover:text-white transition-all border-2 border-black uppercase tracking-wider"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left py-3 px-4 text-black hover:bg-black hover:text-white transition-all border-2 border-black uppercase tracking-wider"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-3 px-4 text-black hover:bg-black hover:text-white transition-all border-2 border-black uppercase tracking-wider"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-3 px-4 bg-black text-white hover:bg-white hover:text-black transition-all border-2 border-black uppercase tracking-wider"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
