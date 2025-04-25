import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { FormValues } from './FormSchema';
import FormInputs from './FormInputs';
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
        <FormInputs form={form} />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
};

export default FormContent;
