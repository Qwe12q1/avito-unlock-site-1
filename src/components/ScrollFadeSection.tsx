import React from 'react';
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';
import { cn } from '@/lib/utils';

interface ScrollFadeSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollFadeSection: React.FC<ScrollFadeSectionProps> = ({
  children,
  className,
  delay = 0
}) => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <div
      ref={ref}
      className={cn(
        'fade-in-section',
        isVisible && 'is-visible',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollFadeSection;
