import React from 'react';
import { useInView } from '../hooks/useInView';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight';
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
}) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`scroll-animation ${isInView ? `animate-${animation}` : 'animate-hidden'} ${className}`}
      style={{ '--animation-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
