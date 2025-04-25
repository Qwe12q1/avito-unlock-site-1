import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToForm = () => {
    const form = document.getElementById('unblock-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold flex items-center">
              <span className={`emoji-bounce mr-2 transition-all ${isScrolled ? 'text-primary' : ''}`}>
                🔓
              </span> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 font-bold">
                AvitoUnlock
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('process-section')}
              className="text-foreground/80 hover:text-primary transition-colors relative group"
            >
              Как это работает
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('testimonial-section')} 
              className="text-foreground/80 hover:text-primary transition-colors relative group"
            >
              Отзывы
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('faq-section')} 
              className="text-foreground/80 hover:text-primary transition-colors relative group"
            >
              FAQ
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <div className="text-foreground/70 flex items-center">
              <span className="mr-2">📞</span>
              <span>+7 (982) 971-01-74</span>
            </div>
          </nav>
          
          <div className="flex items-center">
            <Button 
              onClick={scrollToForm}
              className={`premium-shadow button-shine ${!isScrolled ? 'bg-white text-primary hover:bg-white/90' : ''}`}
            >
              <span className="emoji-bounce mr-1">📝</span> Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;