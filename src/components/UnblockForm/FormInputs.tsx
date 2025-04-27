import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { FormValues } from './FormSchema';

interface FormInputsProps {
  form: UseFormReturn<FormValues>;
}

const FormInputs: React.FC<FormInputsProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Имя</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Иван Иванов" 
                  {...field} 
                  className="bg-white/80" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Телефон</FormLabel>
              <FormControl>
                <Input 
                  placeholder="+7 (999) 123-45-67" 
                  {...field} 
                  className="bg-white/80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Email</FormLabel>
            <FormControl>
              <Input 
                placeholder="example@mail.ru" 
                {...field} 
                className="bg-white/80" 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="avitoId"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">ID аккаунта или ссылка на профиль</FormLabel>
            <FormControl>
              <Input 
                placeholder="123456789 или avito.ru/profile/12345" 
                {...field} 
                className="bg-white/80" 
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
            <FormLabel className="text-sm font-medium">Комментарий (необязательно)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Опишите, что, по вашему мнению, могло привести к блокировке" 
                className="resize-none min-h-[120px] bg-white/80" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormInputs;