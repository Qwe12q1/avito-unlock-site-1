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
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ScrollFadeSection>
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Разблокировка аккаунта <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-avito-blue">Авито</span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Вернём доступ к вашему аккаунту <span className="emoji-bounce inline-block">⚡</span> 
                Быстро, легально и надёжно!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
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
          
          <ScrollFadeSection delay={200}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-avito-blue rounded-2xl blur opacity-30"></div>
              <div className="relative bg-card rounded-2xl p-6 shadow-xl border border-primary/10 float">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-avito-blue rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Аккаунт заблокирован</h3>
                    <p className="text-sm text-muted-foreground">Срочно требуется разблокировка</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-8 bg-muted rounded animate-pulse"></div>
                  <div className="h-8 bg-muted rounded animate-pulse"></div>
                  <div className="h-8 bg-muted rounded animate-pulse"></div>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm font-medium flex items-center">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span> 
                    Ограниченный доступ
                  </div>
                  <div className="bg-avito-green text-white text-xs px-3 py-1 rounded-full">
                    Можно разблокировать
                  </div>
                </div>
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
