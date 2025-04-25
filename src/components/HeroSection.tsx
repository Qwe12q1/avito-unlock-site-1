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
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-background pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center w-full">
          <ScrollFadeSection>
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-center">
                Разблокировка аккаунта <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-avito-blue">Авито</span>
              </h1>
              
              <p className="text-xl text-muted-foreground text-center">
                Вернём доступ к вашему аккаунту <span className="emoji-bounce inline-block">⚡</span> 
                Быстро, легально и надёжно!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Button 
                  size="lg" 
                  className="pulse-soft"
                  onClick={scrollToForm}
                >
                  <span className="mr-2 emoji-bounce">🔓</span> Разблокировать аккаунт
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToForm}
                >
                  <span className="mr-2 emoji-bounce">📱</span> Связаться с нами
                </Button>
              </div>
            </div>
          </ScrollFadeSection>
        </div>
      </div>
      
      <div className="absolute -z-10 top-0 left-0 right-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(153,119,255,0.15),rgba(0,0,0,0))]"></div>
    </div>
  );
};

export default HeroSection;