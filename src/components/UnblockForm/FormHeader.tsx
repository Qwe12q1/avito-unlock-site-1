import React from 'react';
import ScrollFadeSection from '../ScrollFadeSection';

const FormHeader: React.FC = () => (
  <ScrollFadeSection>
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Оформить заявку <span className="emoji-bounce inline-block">📝</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Заполните форму и мы свяжемся с вами в ближайшее время
      </p>
    </div>
  </ScrollFadeSection>
);

export default FormHeader;
