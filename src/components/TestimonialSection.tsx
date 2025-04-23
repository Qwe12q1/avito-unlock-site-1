import React from 'react';
import ScrollFadeSection from './ScrollFadeSection';
import { Card } from '@/components/ui/card';

interface TestimonialProps {
  name: string;
  text: string;
  date: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, text, date, delay }) => {
  return (
    <ScrollFadeSection delay={delay}>
      <Card className="p-6 h-full group hover:shadow-lg transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        <div className="text-muted-foreground">
          <div className="text-3xl text-primary mb-2">"</div>
          <p>{text}</p>
        </div>
        <div className="mt-4 flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 emoji-bounce">⭐</span>
          ))}
        </div>
      </Card>
    </ScrollFadeSection>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Алексей В.',
      text: 'Мой аккаунт заблокировали из-за жалобы конкурента. Обращался напрямую в Авито - не помогло. Ребята решили вопрос за 3 дня! Большое спасибо!',
      date: '15 апреля 2023',
      delay: 0,
    },
    {
      name: 'Елена М.',
      text: 'Очень быстро помогли восстановить доступ к моему бизнес-аккаунту. Профессиональная консультация и оперативное решение проблемы.',
      date: '28 мая 2023',
      delay: 100,
    },
    {
      name: 'Дмитрий К.',
      text: 'Аккаунт заблокировали из-за технической ошибки. Самостоятельно решить проблему не удалось. Обратился к специалистам и через 2 дня снова получил доступ!',
      date: '10 июня 2023',
      delay: 200,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollFadeSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Отзывы наших клиентов <span className="emoji-bounce inline-block">💬</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 500 успешных случаев разблокировки аккаунтов
            </p>
          </div>
        </ScrollFadeSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              date={testimonial.date}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
