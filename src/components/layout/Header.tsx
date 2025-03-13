'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@/components/shared/Link';
import { Container } from '@/components/shared/Container';
import { FadeIn } from '@/components/shared/Motion';

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
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" variant="nav" className="group relative">
            <FadeIn>
              <span className="text-2xl font-bold tracking-wide">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Buğra Mert</span> <span className="text-foreground/80">Ayar</span>
              </span>
            </FadeIn>
          </Link>

          <div className="flex gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} variant="nav" isActive={isActive}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </Container>
    </header>
  );
}
