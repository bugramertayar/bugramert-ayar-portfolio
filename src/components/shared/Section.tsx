'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends Omit<HTMLMotionProps<'section'>, 'children'> {
  withContainer?: boolean;
  children: React.ReactNode;
}

export function Section({ className, withContainer = true, children, ...props }: SectionProps) {
  const content = withContainer ? <Container>{children}</Container> : children;

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={cn('py-20 sm:py-24', className)} {...props}>
      {content}
    </motion.section>
  );
}
