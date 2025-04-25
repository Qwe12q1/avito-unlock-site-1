import React from 'react';
import { Control } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FormValues } from './FormSchema';

interface FormInputsProps {
  control: Control<FormValues>;
}

export const NameEmailFields: React.FC<FormInputsProps> = ({ control }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <FormField
      control={control}
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
      control={control}
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
);

export const ReasonField: React.FC<FormInputsProps> = ({ control }) => (
  <FormField
    control={control}
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
);

export const CommentField: React.FC<FormInputsProps> = ({ control }) => (
  <FormField
    control={control}
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
);

export const ContactField: React.FC<FormInputsProps> = ({ control }) => (
  <FormField
    control={control}
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
);
