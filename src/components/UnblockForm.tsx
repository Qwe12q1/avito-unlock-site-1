import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import ScrollFadeSection from './ScrollFadeSection';

const formSchema = z.object({
  email: z.string().email({ message: 'Введите корректный email' }),
  name: z.string().min(2, { message: 'Имя должно содержать минимум 2 символа' }),
  blockReason: z.string().min(3, { message: 'Укажите причину блокировки' }),
  comments: z.string().min(10, { message: 'Комментарий должен содержать минимум 10 символов' }),
});

type FormValues = z.infer<typeof formSchema>;

const UnblockForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      blockReason: '',
      comments: '',
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    toast({
      title: "Заявка отправлена! ✅",
      description: "Мы рассмотрим вашу заявку и свяжемся с вами в ближайшее время",
    });
    
    form.reset();
  }

  return (
    <ScrollFadeSection className="w-full max-w-3xl mx-auto">
      <div className="bg-card p-8 rounded-2xl shadow-lg border border-primary/20">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <span className="emoji-bounce">📝</span> Форма заявки
        </h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <span className="emoji-bounce">📧</span> Email аккаунта
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your@email.com" 
                      {...field} 
                      className="hover-scale transition-all"
                    />
                  </FormControl>
                  <FormDescription>
                    Укажите email от заблокированного аккаунта
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <span className="emoji-bounce">👤</span> Имя в профиле
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Иван Иванов" 
                      {...field} 
                      className="hover-scale transition-all"
                    />
                  </FormControl>
                  <FormDescription>
                    Имя, указанное в вашем заблокированном аккаунте
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="blockReason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <span className="emoji-bounce">🔒</span> Причина блокировки
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Например: нарушение правил сервиса" 
                      {...field} 
                      className="hover-scale transition-all"
                    />
                  </FormControl>
                  <FormDescription>
                    Укажите причину, по которой ваш аккаунт был заблокирован
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <span className="emoji-bounce">💬</span> Комментарий
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Опишите ситуацию подробнее..." 
                      className="min-h-32 hover-scale transition-all"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Укажите, что по вашему мнению могло привести к блокировке
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full py-6 text-lg shake-animation"
            >
              <span className="mr-2 emoji-bounce">🚀</span> Отправить заявку
            </Button>
          </form>
        </Form>
      </div>
    </ScrollFadeSection>
  );
};

export default UnblockForm;
