import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollFadeSection from './ScrollFadeSection';

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    const form = document.getElementById('unblock-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 to-background pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center w-full">
          <ScrollFadeSection>
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <div className="relative inline-block">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-center mb-3 relative z-10">
                  <span className="block text-foreground">Разблокировка</span>
                  <span className="block text-foreground">аккаунта <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Авито</span></span>
                </h1>
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl rounded-full transform -translate-y-1/4 scale-150 opacity-80"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-foreground/80 text-center max-w-2xl mx-auto leading-relaxed">
                Вернём доступ к вашему аккаунту <span className="emoji-bounce inline-block">⚡</span> 
                Быстро, легально и надёжно!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Button 
                  size="lg" 
                  className="premium-shadow button-shine bg-primary text-white hover:bg-primary/90 px-6 py-6 text-lg"
                  onClick={scrollToForm}
                >
                  <span className="mr-2 emoji-bounce">🔓</span> Разблокировать аккаунт
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/20 hover:border-primary/50 bg-white/50 backdrop-blur-sm text-lg py-6"
                  onClick={scrollToForm}
                >
                  <span className="mr-2 emoji-bounce">📱</span> Связаться с нами
                </Button>
              </div>
            </div>
          </ScrollFadeSection>
        </div>
      </div>
      
      {/* Декоративные элементы для премиального вида */}
      <div className="absolute -z-10 top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 top-1/2 left-0 right-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(153,119,255,0.12),rgba(0,0,0,0))]"></div>
      
      {/* Геометрические декоративные фигуры */}
      <div className="absolute top-1/4 right-[10%] w-20 h-20 border border-primary/20 rounded-xl rotate-12 opacity-40"></div>
      <div className="absolute bottom-1/4 left-[10%] w-12 h-12 border border-secondary/20 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 left-[5%] w-16 h-16 border border-primary/20 rounded-xl rotate-45 opacity-50"></div>
    </div>
  );
};

export default HeroSection;