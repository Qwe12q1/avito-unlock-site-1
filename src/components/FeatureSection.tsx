import React from 'react';
import ScrollFadeSection from './ScrollFadeSection';
import { Card } from '@/components/ui/card';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, delay }) => {
  return (
    <ScrollFadeSection delay={delay}>
      <Card className="p-6 hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-2 overflow-hidden group relative">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-all duration-700"></div>
        <div className="relative">
          <div className="text-3xl mb-4 inline-block emoji-bounce">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </ScrollFadeSection>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: 'Быстрая разблокировка',
      description: 'Мы восстановим доступ к вашему аккаунту в короткие сроки',
      icon: '⚡',
      delay: 0,
    },
    {
      title: 'Опытная команда',
      description: 'Наши специалисты работают с Авито больше 5 лет',
      icon: '👨‍💻',
      delay: 100,
    },
    {
      title: 'Гарантия результата',
      description: 'Если не сможем разблокировать аккаунт - вернём деньги',
      icon: '🛡️',
      delay: 200,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollFadeSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему выбирают нас <span className="emoji-bounce inline-block">🚀</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы специализируемся на возвращении доступа к заблокированным аккаунтам Авито
            </p>
          </div>
        </ScrollFadeSection>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
