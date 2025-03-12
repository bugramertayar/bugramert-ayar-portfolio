'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, GamepadIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  isComingSoon?: boolean;
  category: string;
}

export function ProjectCard({ title, description, href, icon, isComingSoon, category }: ProjectCardProps) {
  return (
    <Link href={isComingSoon ? '#' : href} className={`block ${isComingSoon ? 'cursor-not-allowed' : ''}`}>
      <motion.div
        whileHover={{ scale: isComingSoon ? 1 : 1.02, y: -5 }}
        whileTap={{ scale: isComingSoon ? 1 : 0.98 }}
        className={`
          group relative h-full overflow-hidden rounded-2xl border
          ${isComingSoon ? 'border-[#2a2a2a] bg-[#1a1a1a] opacity-60' : 'border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#151515] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10'}
          p-8 transition-all duration-300
        `}>
        {/* Category Badge */}
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
            <GamepadIcon className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary/80">{category}</span>
          {isComingSoon && (
            <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#2a2a2a] px-3 py-1 text-xs font-medium text-foreground/60 ring-1 ring-[#333]/50">
              <Clock className="h-3 w-3" />
              Coming Soon
            </span>
          )}
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-4">
          <h3 className={`text-2xl font-bold tracking-tight ${!isComingSoon && 'group-hover:text-primary'} transition-colors`}>{title}</h3>
          <p className="text-base leading-relaxed text-foreground/60">{description}</p>

          {!isComingSoon && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="pt-4">
              <span className="inline-flex items-center gap-2 font-medium text-primary transition-all group-hover:gap-3">
                Try it out <ArrowRight className="h-5 w-5" />
              </span>
            </motion.div>
          )}
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-[100px] transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
        <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-primary/5 blur-[50px] transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
      </motion.div>
    </Link>
  );
}
