import React from 'react';
import { UseFormReturn } from 'react-hook-form';
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
import { FormValues } from './FormSchema';

interface FormContentProps {
  form: UseFormReturn<FormValues>;
  onSubmit: (values: FormValues) => Promise<void>;
  isSubmitting: boolean;
}

const FormContent: React.FC<FormContentProps> = ({ form, onSubmit, isSubmitting }) => {
  return (
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
                  placeholder="Опишите, что, по вашему мнению, могло привести к блокировке. Укажите также ваш Telegram/WhatsApp для связи" 
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
  );
};

export default FormContent;
