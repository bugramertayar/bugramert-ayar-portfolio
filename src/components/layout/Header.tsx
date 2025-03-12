'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navigation = [
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Playground',
    href: '/playground'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#1f1f1f] bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="group relative">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Buğra Mert</span> <span className="text-foreground/80">Ayar</span>
          </motion.span>
          <motion.span layoutId="underline" className="absolute left-0 top-full block h-[2px] w-full bg-gradient-to-r from-primary to-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>

        <div className="flex gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} className={`relative text-base font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-foreground/60'}`}>
                {item.name}
                {isActive && <motion.span layoutId="activeTab" className="absolute left-0 top-full block h-[2px] w-full bg-primary" />}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
