import { forwardRef, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size' | 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-tokyo-primary to-tokyo-secondary
    text-tokyo-bg-dark font-medium
    hover:shadow-lg hover:shadow-tokyo-primary/25
    dark:from-tokyo-primary dark:to-tokyo-secondary
    [html.light_&]:from-tokyo-light-primary [html.light_&]:to-tokyo-light-secondary
    [html.light_&]:text-tokyo-light-bg
  `,
  secondary: `
    bg-tokyo-subtle text-tokyo-fg
    hover:bg-tokyo-bg-highlight
    [html.light_&]:bg-tokyo-light-subtle [html.light_&]:text-tokyo-light-fg
    [html.light_&]:hover:bg-tokyo-light-bg-highlight
  `,
  ghost: `
    bg-transparent text-tokyo-fg
    hover:bg-tokyo-subtle
    [html.light_&]:text-tokyo-light-fg
    [html.light_&]:hover:bg-tokyo-light-subtle
  `,
  outline: `
    bg-transparent border border-tokyo-border text-tokyo-fg
    hover:bg-tokyo-subtle hover:border-tokyo-primary
    [html.light_&]:border-tokyo-light-border [html.light_&]:text-tokyo-light-fg
    [html.light_&]:hover:bg-tokyo-light-subtle [html.light_&]:hover:border-tokyo-light-primary
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-sm rounded-lg',
  lg: 'px-6 py-3 text-base rounded-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading, className = '', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          inline-flex items-center justify-center gap-2
          transition-all duration-200
          disabled:opacity-50 disabled:pointer-events-none
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        disabled={isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
