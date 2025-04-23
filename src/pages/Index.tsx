import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';
import UnblockForm from '@/components/UnblockForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <ProcessSection />
        <TestimonialSection />
        <FAQSection />
        
        <section id="unblock-form" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Оставьте заявку на разблокировку <span className="emoji-bounce inline-block">📝</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Заполните форму, и наши специалисты свяжутся с вами в ближайшее время
              </p>
            </div>
            
            <UnblockForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
