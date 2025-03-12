'use client';

import { motion } from 'framer-motion';

export function Playground() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl lg:text-center">
          <h1 className="h1">Playground</h1>
          <p className="mt-4 text-lg text-muted-foreground">This is where I'll showcase my projects and experiments. Stay tuned!</p>
        </motion.div>
      </div>
    </section>
  );
}
