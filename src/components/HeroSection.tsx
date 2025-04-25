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
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/90 via-background/60 to-background z-0"></div>
      
      {/* Фоновые декоративные элементы */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Декоративные формы */}
      <div className="absolute top-20 right-[15%] w-20 h-20 border border-primary/20 rounded-xl rotate-12 opacity-40"></div>
      <div className="absolute bottom-32 left-[15%] w-12 h-12 border border-secondary/20 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 left-[5%] w-16 h-16 border border-primary/20 rounded-xl rotate-45 opacity-50"></div>
      <div className="absolute top-40 right-[30%] w-8 h-24 border border-primary/20 rounded-full opacity-30"></div>

      {/* Сетка точек на фоне */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center items-center">
          <div className="text-center space-y-8 max-w-3xl">
            <ScrollFadeSection>
              <div className="relative inline-block">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-center mb-4 relative z-10">
                  <span className="block text-foreground">Разблокировка</span>
                  <span className="block text-foreground">аккаунта <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Авито</span></span>
                </h1>
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl rounded-full transform -translate-y-1/4 scale-150 opacity-80"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-foreground/80 text-center max-w-2xl mx-auto leading-relaxed">
                Вернём доступ к вашему аккаунту <span className="emoji-bounce inline-block">⚡</span> 
                Быстро, легально и надёжно!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <Button 
                  size="lg" 
                  className="premium-shadow button-shine bg-primary hover:bg-primary/90 px-8 py-7 text-lg rounded-xl relative overflow-hidden group"
                  onClick={scrollToForm}
                >
                  <span className="mr-2 emoji-bounce">🔓</span> 
                  <span className="relative z-10">Разблокировать аккаунт</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/20 hover:border-primary/50 bg-white/50 backdrop-blur-sm text-lg py-7 rounded-xl glass-effect"
                  onClick={scrollToForm}
                >
                  <span className="mr-2 emoji-bounce">📱</span> Связаться с нами
                </Button>
              </div>
            </ScrollFadeSection>
          </div>
        </div>
      </div>
      
      {/* Волнистый разделитель */}
      <div className="wave-divider absolute bottom-0 left-0 w-full">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;