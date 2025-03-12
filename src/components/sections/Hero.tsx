'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getPersonalInfo } from '@/lib/personal-info';

export function Hero() {
  const {
    shared,
    pages: { home }
  } = getPersonalInfo();

  return (
    <section className="relative min-h-screen grid place-items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-8">
            <div className="space-y-4">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">{shared.name}</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-xl text-foreground/60">
                {shared.title}
              </motion.p>
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-foreground/60 max-w-md text-lg">
              {home.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-wrap gap-4">
              <Link href="/about" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90">
                About Me
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex gap-6">
              <Link href={shared.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href={shared.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={`mailto:${shared.socialLinks.email}`} className="text-foreground/60 hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative aspect-square w-full max-w-md mx-auto lg:mr-0">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary to-purple-500 blur-[100px] opacity-20" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-[#1f1f1f] shadow-2xl shadow-primary/10">
              <Image src={home.profileImage} alt={shared.name} fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
