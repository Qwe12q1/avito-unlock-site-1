import React from 'react';
import { Card } from '@/components/ui/card';
import ScrollFadeSection from './ScrollFadeSection';

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: 'Работаем с октября 2024',
      description: 'Знаем все тонкости системы безопасности Авито и умеем с ней работать',
      icon: '📅',
      delay: 0,
    },
    {
      title: 'Оплата по факту выполнения',
      description: 'Вы платите только в случае успешной разблокировки аккаунта',
      icon: '💰',
      delay: 100,
    },
    {
      title: 'Быстрый результат',
      description: 'Большинство блокировок снимаем в течение 1-3 рабочих дней',
      icon: '⚡',
      delay: 200,
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollFadeSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему стоит выбрать нас <span className="emoji-bounce inline-block">✨</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная и эффективная помощь с разблокировкой аккаунтов
            </p>
          </div>
        </ScrollFadeSection>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollFadeSection key={index} delay={feature.delay}>
              <Card className="p-6 h-full border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                <div className="text-4xl mb-4 emoji-bounce inline-block">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </ScrollFadeSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
