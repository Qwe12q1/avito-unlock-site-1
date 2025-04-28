import React from 'react';
import ScrollFadeSection from './ScrollFadeSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  const faqItems = [
    {
      question: 'Почему блокируют аккаунты на Авито?',
      answer: 'Аккаунты на Авито могут быть заблокированы по различным причинам: нарушение правил сервиса, подозрительная активность, жалобы от других пользователей, размещение запрещенных товаров или услуг, использование ботов или автоматизированных скриптов.',
    },
    {
      question: 'Сколько времени занимает разблокировка?',
      answer: 'Стандартный срок разблокировки составляет от 1 до 7 рабочих дней. В редких случаях требуется больше времени.',
    },
    {
      question: 'Можно ли гарантировать разблокировку?',
      answer: 'В большинстве случаев нам удается разблокировать аккаунты наших клиентов. Однако если факт нарушения с вашей стороны подтвердится, то разблокировка невозможна. Пишите только в том случае, если вы НЕ согласны с блокировкой. Обмануть не выйдет.',
    },
    {
      question: 'Какие профили не подойдут под разблокировку?',
      answer: 'Если это новый профиль и он заблокирован, например, за повторно пройденную проверку по видео/паспорту. Если в ваших объявления и в переписке присутствовала разная цена. При входе в аккаунт Авито пишет "Мы заметили нарушение правил Авито".',
    },
    {
      question: 'Что делать, если самостоятельные попытки разблокировки не помогли?',
      answer: 'Если ваши самостоятельные попытки разблокировать аккаунт не увенчались успехом, заполните нашу форму заявки. Мы проверим, что можно сделать.',
    },
    {
      question: 'Законна ли процедура разблокировки?',
      answer: 'Да.',
    },
  ];

  return (
    <section id="faq-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollFadeSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Часто задаваемые вопросы <span className="emoji-bounce inline-block">❓</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о разблокировке аккаунтов Авито
            </p>
          </div>
        </ScrollFadeSection>

        <div className="max-w-3xl mx-auto">
          <ScrollFadeSection>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="hover:text-primary text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollFadeSection>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
