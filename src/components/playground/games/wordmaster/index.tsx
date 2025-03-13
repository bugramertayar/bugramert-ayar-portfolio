'use client';

import personalInfo from '@/content/personal-info.json';
import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { FadeInUp } from '@/components/shared/Motion';
import { Link } from '@/components/shared/Link';
import { BackButton } from '@/components/playground/ui/BackButton';

const wordmasterContent = personalInfo.pages.playground.projects.find((project) => project.title === 'WordMaster')?.content;

export function WordMasterGame() {
  if (!wordmasterContent) return null;

  return (
    <Section>
      <Container>
        <BackButton text="Back to Playground" href="/playground" />

        <FadeInUp className="mx-auto mt-8 max-w-2xl text-center">
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

          <div className="mt-12">
            <Link href="/playground/games/wordmaster/play" variant="primary">
              Play Now
            </Link>
          </div>
        </FadeInUp>
      </Container>
    </Section>
  );
}
