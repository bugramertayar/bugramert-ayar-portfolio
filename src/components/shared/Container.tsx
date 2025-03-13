'use client';

import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = ComponentProps<'div'>;

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl', className)} {...props}>
      {children}
    </div>
  );
}
