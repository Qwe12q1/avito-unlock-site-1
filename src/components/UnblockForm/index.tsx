import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import ScrollFadeSection from '../ScrollFadeSection';
import FormHeader from './FormHeader';
import FormContent from './FormContent';
import { TelegramService } from './TelegramService';
import { formSchema, FormValues } from './FormSchema';

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

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await TelegramService.sendFormData(values);
      
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
        <FormHeader />

        <div className="max-w-2xl mx-auto">
          <ScrollFadeSection delay={100}>
            <div className="bg-card rounded-xl p-6 shadow-lg border border-primary/10">
              <FormContent 
                form={form} 
                onSubmit={handleSubmit} 
                isSubmitting={isSubmitting} 
              />
            </div>
          </ScrollFadeSection>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default UnblockForm;
