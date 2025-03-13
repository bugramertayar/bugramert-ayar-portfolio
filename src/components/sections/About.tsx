'use client';

import { getPersonalInfo } from '@/lib/personal-info';
import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { FadeInUp } from '@/components/shared/Motion';
import { Card } from '@/components/shared/Card';
import { Code2, Layers, Rocket, Calendar, LucideIcon } from 'lucide-react';

const competencyIcons: Record<string, LucideIcon> = {
  'Frontend Development': Code2,
  'Backend Integration': Layers,
  'DevOps & Testing': Rocket
};

export function About() {
  const {
    pages: { about }
  } = getPersonalInfo();

  return (
    <Section>
      <Container>
        <FadeInUp className="mx-auto max-w-2xl lg:text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{about.headline}</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{about.summary}</p>
        </FadeInUp>

        <FadeInUp delay={0.2} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {about.coreCompetencies.map((competency, index) => {
              const Icon = competencyIcons[competency.title];
              return (
                <Card key={index} className="group relative flex flex-col overflow-hidden bg-gradient-to-br from-background to-muted p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">{Icon && <Icon className="h-6 w-6 text-primary" />}</div>
                  <dt className="text-xl font-semibold leading-7">{competency.title}</dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{competency.description}</p>
                  </dd>
                </Card>
              );
            })}
          </dl>
        </FadeInUp>

        <FadeInUp delay={0.6} className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <h2 className="text-2xl font-bold tracking-tight mb-12 lg:text-center">Professional Experience</h2>
          <div className="relative">
            <div className="absolute h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
            <div className="space-y-12">
              {about.experiences.map((experience, index) => (
                <div key={index} className="relative ml-12">
                  <div className="absolute left-[-3rem] -translate-x-1/2 flex h-6 w-6 items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                  </div>
                  <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-muted p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <span className="text-muted-foreground">at</span>
                        <span className="font-medium text-muted-foreground">{experience.company}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm text-primary/80">
                        <Calendar className="h-4 w-4" />
                        {experience.period}
                      </div>
                      <ul className="mt-6 grid gap-4">
                        {experience.description.map((desc, i) => (
                          <li key={i} className="relative flex gap-3 text-base leading-7">
                            <span className="select-none text-primary">›</span>
                            <span className="text-muted-foreground">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.4} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight mb-12 lg:text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {about.skills.map((skill) => (
              <Card key={skill} className="group relative flex h-20 items-center justify-center overflow-hidden border-2 border-border bg-gradient-to-br from-background to-muted p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -left-2 top-0 h-8 w-8 rounded-full bg-primary/20 blur-xl transition-all duration-500 group-hover:bg-primary/30 group-hover:blur-2xl dark:bg-primary/30 dark:group-hover:bg-primary/40" />
                <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary/20 blur-xl transition-all duration-500 group-hover:bg-primary/30 group-hover:blur-2xl dark:bg-primary/30 dark:group-hover:bg-primary/40" />
                <span className="relative z-10 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-base font-medium tracking-wide text-transparent transition-all duration-300 group-hover:from-primary group-hover:to-primary/80">{skill}</span>
              </Card>
            ))}
          </div>
        </FadeInUp>
      </Container>
    </Section>
  );
}
