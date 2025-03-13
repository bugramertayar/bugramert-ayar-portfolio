'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ComponentProps } from 'react';

type MotionProps = {
  children: React.ReactNode;
  delay?: number;
};

export function FadeIn({ children, delay = 0, ...props }: MotionProps & Omit<HTMLMotionProps<'div'>, 'children' | 'initial' | 'animate' | 'transition'>) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay }} {...props}>
      {children}
    </motion.div>
  );
}

export function FadeInUp({ children, delay = 0, ...props }: MotionProps & Omit<HTMLMotionProps<'div'>, 'children' | 'initial' | 'animate' | 'transition'>) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }} {...props}>
      {children}
    </motion.div>
  );
}

export function FadeInLeft({ children, delay = 0, ...props }: MotionProps & Omit<HTMLMotionProps<'div'>, 'children' | 'initial' | 'animate' | 'transition'>) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay }} {...props}>
      {children}
    </motion.div>
  );
}

export function Scale({ children, delay = 0, ...props }: MotionProps & Omit<HTMLMotionProps<'div'>, 'children' | 'initial' | 'animate' | 'transition'>) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay }} {...props}>
      {children}
    </motion.div>
  );
}
