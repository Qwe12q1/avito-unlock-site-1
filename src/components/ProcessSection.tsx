import React from 'react';
import ScrollFadeSection from './ScrollFadeSection';
import { Card } from '@/components/ui/card';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      title: 'Подача заявки',
      description: 'Заполните форму на сайте с информацией о вашем заблокированном аккаунте',
      icon: '📝',
      delay: 0,
    },
    {
      title: 'Анализ ситуации',
      description: 'Изучим причину и вернёмся с ответом',
      icon: '🔍',
      delay: 100,
    },
    {
      title: 'Разблокировка',
      description: 'После разблокировки мы сами вам напишем',
      icon: '🔓',
      delay: 200,
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollFadeSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Как происходит разблокировка <span className="emoji-bounce inline-block">🔄</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и понятный процесс восстановления доступа к вашему аккаунту
            </p>
          </div>
        </ScrollFadeSection>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <ScrollFadeSection 
                  delay={step.delay} 
                  className="md:w-5/12"
                >
                  <Card className={`p-6 relative z-10 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="text-3xl mb-4 emoji-bounce inline-block">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </Card>
                </ScrollFadeSection>
                
                <div className="hidden md:flex justify-center items-center w-2/12 relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10 float">
                    {index + 1}
                  </div>
                </div>
                
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-primary/5 -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-avito-blue/5 translate-y-1/2 translate-x-1/2 blur-3xl"></div>
    </section>
  );
};

export default ProcessSection;
