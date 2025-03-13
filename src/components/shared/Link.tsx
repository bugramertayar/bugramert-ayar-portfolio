'use client';

import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface LinkProps extends ComponentProps<typeof NextLink> {
  variant?: 'primary' | 'secondary' | 'nav' | 'icon';
  showArrow?: boolean;
  isActive?: boolean;
  isExternal?: boolean;
}

export function Link({ className, variant = 'primary', children, showArrow, isActive, isExternal, href, ...props }: LinkProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300';
  const sizes = 'h-12 px-8 text-sm';

  const variants = {
    primary: 'group relative rounded-xl bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] overflow-hidden',
    secondary: 'rounded-xl border-2 border-primary/20 bg-primary/5 text-primary backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30',
    nav: cn('relative text-base hover:text-primary', isActive ? 'text-primary' : 'text-foreground/60'),
    icon: 'text-foreground/60 hover:text-primary'
  };

  const linkProps = {
    className: cn(baseStyles, variants[variant], variant !== 'nav' && variant !== 'icon' && sizes, className),
    href,
    ...(isExternal && {
      target: '_blank',
      rel: 'noopener noreferrer'
    }),
    ...props
  };

  return (
    <NextLink {...linkProps}>
      {variant === 'primary' && <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/80 to-purple-500/80 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60" />}
      <span className={cn('relative z-10', showArrow && 'flex items-center gap-2')}>
        {children}
        {showArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
      </span>
      {isActive && variant === 'nav' && <motion.span layoutId="activeTab" className="absolute left-0 top-full block h-[2px] w-full bg-primary" />}
    </NextLink>
  );
}
