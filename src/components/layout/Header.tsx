'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@/components/shared/Link';
import { Container } from '@/components/shared/Container';
import { FadeIn } from '@/components/shared/Motion';
import { ThemeToggle } from '@/components/shared/ThemeToggle';

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
    <header className="fixed top-0 z-50 w-full border-b border-border/[0.08] bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" variant="nav" className="group relative">
            <FadeIn>
              <span className="text-2xl font-bold tracking-wide">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Buğra Mert</span> <span className="text-foreground/90">Ayar</span>
              </span>
            </FadeIn>
          </Link>

          <div className="flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} variant="nav" isActive={isActive}>
                  {item.name}
                </Link>
              );
            })}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
