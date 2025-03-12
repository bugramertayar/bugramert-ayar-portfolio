'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import personalInfo from '@/content/personal-info.json';

const wordmasterContent = personalInfo.pages.playground.projects.find((project) => project.title === 'WordMaster')?.content;

export function WordMasterGame() {
  if (!wordmasterContent) return null;

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">{wordmasterContent.title}</h1>
        <p className="mt-4 text-lg text-foreground/60">{wordmasterContent.description}</p>

        <div className="mt-8 space-y-2 text-left">
          <h2 className="text-xl font-semibold">How to Play</h2>
          <ul className="list-inside list-disc space-y-2 text-foreground/80">
            {wordmasterContent.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-12">
          <Link href="/playground/games/wordmaster/play" className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors">
            Play Now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
