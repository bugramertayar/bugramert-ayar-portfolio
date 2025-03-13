'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { getPersonalInfo } from '@/lib/personal-info';
import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { Link } from '@/components/shared/Link';
import { FadeInLeft, FadeInUp, Scale } from '@/components/shared/Motion';

export function Home() {
  const {
    shared,
    pages: { home }
  } = getPersonalInfo();

  return (
    <Section className="min-h-screen grid place-items-center" withContainer={false}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeInLeft className="space-y-8">
            <div className="space-y-4">
              <FadeInUp delay={0.2}>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                  <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">{shared.name}</span>
                </h1>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="text-xl text-foreground/60">{shared.title}</p>
              </FadeInUp>
            </div>

            <FadeInUp delay={0.4}>
              <p className="text-foreground/60 max-w-md text-lg">
                {home.description}
                <span className="block mt-2 text-primary/80">{home.callToAction}</span>
              </p>
            </FadeInUp>

            <FadeInUp delay={0.5} className="flex flex-wrap items-center gap-6">
              <Link href="/about" variant="primary" showArrow>
                About Me
              </Link>
              <Link href="/playground" variant="secondary">
                <span className="flex items-center gap-2">
                  Explore Projects
                  <span className="text-xs opacity-80">(Fun Stuff!)</span>
                </span>
              </Link>
            </FadeInUp>

            <FadeInUp delay={0.6} className="flex gap-6">
              <Link href={shared.socialLinks.github} variant="icon" isExternal>
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href={shared.socialLinks.linkedin} variant="icon" isExternal>
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={`mailto:${shared.socialLinks.email}`} variant="icon">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </FadeInUp>
          </FadeInLeft>

          <Scale className="relative aspect-square w-full max-w-md mx-auto lg:mr-0">
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gradient-to-tr from-background to-muted p-1">
              <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-border/10" />
              <Image src={home.profileImage} alt={shared.name} fill className="rounded-[2.3rem] object-cover" priority />
            </div>
          </Scale>
        </div>
      </Container>
    </Section>
  );
}
