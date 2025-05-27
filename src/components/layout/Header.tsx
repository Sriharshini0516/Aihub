import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Zap className="h-8 w-8 text-blue-500" />
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            AI<span className="text-white">Hub</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </button>
          <Button variant="primary" onClick={() => scrollToSection('cta')}>
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              Pricing
            </button>
            <Button variant="primary" onClick={() => scrollToSection('cta')}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;