import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollFadeSection from './ScrollFadeSection';

interface TestimonialProps {
  name: string;
  date: string;
  text: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Алексей В.",
      date: "1 января 2025",
      text: "Огромное спасибо за помощь. Сделал всё быстро и чётко, надежды уже не было на то, что можно восстановить аккаунт. Лучший из лучших, буду советовать только вас всем. Спасибо"
    },
    {
      name: "Марина К.",
      date: "11 ноября 2024",
      text: "Спасибо большое, думал уже потерял аккаунт. А вы творите чудеса! 😇"
    },
    {
      name: "Дмитрий П.",
      date: "21 марта 2025",
      text: "Воу! Не верил, что получится, но за 2 дня вы вернули мой аккаунт. Теперь всем друзьям рекомендую!"
    }
  ];

  return (
    <section id="testimonial-section" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollFadeSection>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Что говорят наши клиенты
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Мы помогли сотням людей вернуть доступ к заблокированным аккаунтам на Авито.
              Вот отзывы некоторых из них.
            </p>
          </div>
        </ScrollFadeSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollFadeSection key={index} delay={index * 0.1}>
              <Card className="h-full shadow-sm hover:shadow-md transition-shadow bg-white/70 backdrop-blur-sm border-primary/10">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-foreground/60">{testimonial.date}</div>
                  </div>
                  <div className="relative">
                    <span className="absolute top-0 left-0 text-6xl text-primary/10 font-serif">❝</span>
                    <p className="relative pt-4 text-foreground/80 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollFadeSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
