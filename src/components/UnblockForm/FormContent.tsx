import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { FormValues } from './FormSchema';
import { 
  NameEmailFields, 
  ReasonField, 
  CommentField, 
  ContactField 
} from './FormInputs';
import SubmitButton from './SubmitButton';

interface FormContentProps {
  form: UseFormReturn<FormValues>;
  onSubmit: (values: FormValues) => Promise<void>;
  isSubmitting: boolean;
}

const FormContent: React.FC<FormContentProps> = ({ form, onSubmit, isSubmitting }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <NameEmailFields control={form.control} />
        <ReasonField control={form.control} />
        <CommentField control={form.control} />
        <ContactField control={form.control} />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
};

export default FormContent;
