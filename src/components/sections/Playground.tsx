'use client';

import { ProjectCard } from '../playground/ui/ProjectCard';
import personalInfo from '@/content/personal-info.json';
import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { FadeInUp } from '@/components/shared/Motion';

const projects = personalInfo.pages.playground.projects;

export function Playground() {
  return (
    <Section>
      <Container>
        <FadeInUp className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Playground</h1>
        </FadeInUp>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-12 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
