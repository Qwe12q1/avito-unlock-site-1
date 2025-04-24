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
        <UnblockForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
