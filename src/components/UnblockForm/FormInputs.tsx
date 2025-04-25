import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormValues } from './FormSchema';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface FormInputsProps {
  form: UseFormReturn<FormValues>;
}

const FormInputs: React.FC<FormInputsProps> = ({ form }) => {
  return (
    <>
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
                placeholder="Опишите, что, по вашему мнению, могло привести к блокировке" 
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
    </>
  );
};

export default FormInputs;
