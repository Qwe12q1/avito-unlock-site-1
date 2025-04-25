import React from 'react';
import { Button } from '@/components/ui/button';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
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
  );
};

export default SubmitButton;
