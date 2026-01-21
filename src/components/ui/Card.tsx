import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'gradient' | 'glass';
  hover?: boolean;
}

const variantStyles = {
  default: `
    bg-tokyo-subtle border border-tokyo-border
    [html.light_&]:bg-tokyo-light-subtle [html.light_&]:border-tokyo-light-border
  `,
  gradient: `
    bg-gradient-to-br from-tokyo-subtle to-tokyo-bg-highlight
    border border-tokyo-border
    [html.light_&]:from-tokyo-light-subtle [html.light_&]:to-tokyo-light-bg-highlight
    [html.light_&]:border-tokyo-light-border
  `,
  glass: `
    bg-tokyo-subtle/50 backdrop-blur-md border border-tokyo-border/50
    [html.light_&]:bg-tokyo-light-subtle/50 [html.light_&]:border-tokyo-light-border/50
  `,
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hover = true, className = '', children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
        className={`
          rounded-xl p-6
          transition-shadow duration-300
          ${hover ? 'hover:shadow-xl hover:shadow-tokyo-primary/5 [html.light_&]:hover:shadow-tokyo-light-primary/10' : ''}
          ${variantStyles[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
