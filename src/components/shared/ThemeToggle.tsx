'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="relative flex h-9 w-9 items-center justify-center" aria-label="Toggle theme">
      <div className="relative z-10 flex items-center justify-center">
        <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-primary transition-all duration-300 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-primary transition-all duration-300 dark:rotate-0 dark:scale-100" />
      </div>
    </motion.button>
  );
}
