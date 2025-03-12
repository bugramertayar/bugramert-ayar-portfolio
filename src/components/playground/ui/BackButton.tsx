'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  text?: string;
  href?: string;
}

export function BackButton({ text = 'Back', href }: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <button onClick={handleClick} className="inline-flex items-center gap-2 text-md font-medium text-foreground/60 transition-colors hover:text-primary">
        <ArrowLeft className="h-4 w-4" />
        {text}
      </button>
    </motion.div>
  );
}
