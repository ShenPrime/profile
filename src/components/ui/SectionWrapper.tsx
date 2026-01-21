import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export function SectionWrapper({ children, id, className = '', delay = 0 }: SectionWrapperProps) {
  const [ref, isIntersecting] = useIntersection<HTMLElement>({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`py-20 md:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-tokyo-fg [html.light_&]:text-tokyo-light-fg mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-tokyo-muted [html.light_&]:text-tokyo-light-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-tokyo-primary to-tokyo-secondary rounded-full ${align === 'center' ? 'mx-auto' : ''} [html.light_&]:from-tokyo-light-primary [html.light_&]:to-tokyo-light-secondary`} />
    </div>
  );
}
