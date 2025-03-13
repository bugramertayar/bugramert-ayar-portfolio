'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'icon' | 'back';
  showArrow?: boolean;
  isBack?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'primary', children, showArrow, isBack, isLoading, disabled, ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  const sizes = 'h-12 px-8 text-sm';

  const variants = {
    primary: 'group relative bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] overflow-hidden',
    secondary: 'border-2 border-primary/20 bg-primary/5 text-primary backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30',
    icon: 'text-foreground/60 hover:text-primary p-2',
    back: 'text-foreground/60 hover:text-primary gap-2'
  };

  const Arrow = isBack ? ArrowLeft : ArrowRight;

  return (
    <motion.button
      ref={ref}
      className={cn(baseStyles, variants[variant], variant !== 'icon' && variant !== 'back' && sizes, className)}
      initial={variant === 'back' ? { opacity: 0, x: -20 } : {}}
      animate={variant === 'back' ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      disabled={isLoading || disabled}
      {...props}>
      {variant === 'primary' && <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/80 to-purple-500/80 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60" />}

      {isBack && <Arrow className="h-4 w-4" />}
      <span className={cn('relative z-10', showArrow && 'flex items-center gap-2')}>
        {children}
        {showArrow && !isBack && <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </motion.button>
  );
});

Button.displayName = 'Button';

export { Button };
