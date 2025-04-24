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
          ? 'bg-background/80 backdrop-blur-md border-b shadow-sm py-3' 
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-avito-blue">
                AvitoUnlock
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              Как это работает
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          
          <div className="flex space-x-4 items-center">
            <span className="hidden md:block text-foreground/70">
              <span className="emoji-bounce mr-1">📞</span> +7 (982) 971-01-74
            </span>
            <Button 
              onClick={scrollToForm}
              className={`${!isScrolled ? 'bg-white text-primary hover:bg-white/90' : ''}`}
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
