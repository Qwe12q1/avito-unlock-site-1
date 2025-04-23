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
      answer: 'Стандартный срок разблокировки составляет от 1 до 7 рабочих дней. В сложных случаях процесс может занять до 14 дней. Мы стараемся сделать это максимально быстро.',
    },
    {
      question: 'Можно ли гарантировать разблокировку?',
      answer: 'В большинстве случаев нам удается разблокировать аккаунты наших клиентов. Однако, в особо сложных ситуациях (при серьезных нарушениях правил) разблокировка может быть невозможна. В таком случае мы честно сообщим вам об этом и предложим альтернативные решения.',
    },
    {
      question: 'Что делать, если самостоятельные попытки разблокировки не помогли?',
      answer: 'Если ваши самостоятельные попытки разблокировать аккаунт не увенчались успехом, заполните нашу форму заявки. Наши специалисты проанализируют ситуацию и подберут индивидуальное решение.',
    },
    {
      question: 'Законна ли процедура разблокировки?',
      answer: 'Да, наш сервис работает полностью легально. Мы помогаем пользователям правильно составить апелляцию, собрать необходимые документы и доказательства для восстановления доступа к аккаунту в рамках правил площадки Авито.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
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
