'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  isComingSoon?: boolean;
}

export function ProjectCard({ title, description, href, icon, isComingSoon }: ProjectCardProps) {
  return (
    <Link href={isComingSoon ? '#' : href} className={`block ${isComingSoon ? 'cursor-not-allowed' : ''}`}>
      <motion.div
        whileHover={{ scale: isComingSoon ? 1 : 1.02 }}
        whileTap={{ scale: isComingSoon ? 1 : 0.98 }}
        className={`group relative h-full overflow-hidden rounded-xl border border-[#1f1f1f] bg-gradient-to-br from-secondary/40 to-secondary/20 p-6 transition-all duration-300 ${isComingSoon ? 'opacity-60' : 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5'}`}>
        <div className="relative z-10 flex h-full flex-col justify-between gap-4">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              {icon && (
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#1f1f1f] bg-secondary/60 shadow-inner">
                  <Image src={icon} alt={title} width={24} height={24} className="opacity-80" />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className={`text-xl font-semibold tracking-tight text-foreground ${!isComingSoon && 'group-hover:text-primary'} transition-colors`}>{title}</h3>
                  {isComingSoon && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary/60 px-2 py-1 text-xs font-medium text-foreground/60">
                      <Clock className="h-3 w-3" />
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-6 text-foreground/60">{description}</p>
              </div>
            </div>
          </div>

          {!isComingSoon && (
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
              Try it out <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </div>

        {/* Gradient background effect */}
        <div className={`pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] bg-primary/5 blur-[100px] transition-opacity duration-500 ${isComingSoon ? 'opacity-0' : 'group-hover:opacity-100 opacity-0'}`} />
        <div className={`pointer-events-none absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary/5 blur-[50px] transition-opacity duration-500 ${isComingSoon ? 'opacity-0' : 'group-hover:opacity-100 opacity-0'}`} />
      </motion.div>
    </Link>
  );
}
