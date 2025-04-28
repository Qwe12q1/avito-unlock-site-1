import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import ScrollFadeSection from './ScrollFadeSection';

const formSchema = z.object({
  email: z.string().email({ message: 'Укажите корректный email-адрес' }),
  name: z.string().min(2, { message: 'Имя должно содержать минимум 2 символа' }),
  reason: z.string().min(5, { message: 'Укажите причину блокировки' }),
  comment: z.string().min(10, { message: 'Комментарий должен содержать минимум 10 символов' }),
  contact: z.string().min(3, { message: 'Укажите контактные данные для связи' }),
});

type FormValues = z.infer<typeof formSchema>;

const UnblockForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      reason: '',
      comment: '',
      contact: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const botToken = '8139322919:AAEgUu5JlVhYLBFDDF5rf7vL7CDWpkjNWko';
      const chatId = '6337423204';
      
      const message = `
📝 Новая заявка на разблокировку:

👤 Имя: ${values.name}
📧 Email: ${values.email}
❌ Причина блокировки: ${values.reason}
💬 Комментарий: ${values.comment}
📞 Контакт: ${values.contact}
      `;
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });
      
      if (!response.ok) {
        throw new Error('Ошибка при отправке заявки');
      }
      
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      toast({
        title: "Ошибка при отправке",
        description: "Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="unblock-form" className="py-20 bg-gradient-to-b from-background to-purple-50">
      <div className="container mx-auto px-4">
        <ScrollFadeSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Оставить заявку на разблокировку <span className="emoji-bounce inline-block">📝</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Заполните форму и мы свяжемся с вами в ближайшее время
            </p>
          </div>
        </ScrollFadeSection>

        <div className="max-w-2xl mx-auto">
          <ScrollFadeSection delay={100}>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-primary/10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email из заблокированного аккаунта</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="example@mail.ru" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя с аккаунта</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Иван Иванов" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Причина блокировки</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Укажите официальную причину блокировки" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Комментарий</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Опишите, что, по вашему мнению, могло привести к блокировке. Также уточните, сколько лет было вашему профилю и сколько было отзывов на момент блокировки" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Контакт для связи</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Укажите ваш Telegram/WhatsApp для связи" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full pulse-soft"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Отправка...</>
                    ) : (
                      <>
                        <span className="mr-2 emoji-bounce">🚀</span>
                        Отправить заявку
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </ScrollFadeSection>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default UnblockForm;