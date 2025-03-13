'use client';

import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends ComponentProps<'div'> {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  const baseStyles = 'relative h-full overflow-hidden rounded-2xl border border-[#1f1f1f] bg-background/50 p-6 transition-all duration-300';

  return (
    <div className={cn(baseStyles, className)} {...props}>
      {children}
    </div>
  );
}
