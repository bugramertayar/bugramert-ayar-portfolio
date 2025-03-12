'use client';

import { motion } from 'framer-motion';
import { getPersonalInfo } from '@/lib/personal-info';

export function About() {
  const {
    pages: { about }
  } = getPersonalInfo();

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{about.headline}</p>
          <p className="mt-6 text-lg leading-8 text-foreground/60">{about.summary}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {about.coreCompetencies.map((competency, index) => (
              <div key={index} className="flex flex-col">
                <dt className="text-base font-semibold leading-7">{competency.title}</dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-foreground/60">
                  <p className="flex-auto">{competency.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight mb-8 lg:text-center">Professional Experience</h3>
          <div className="space-y-8">
            {about.experiences.map((experience, index) => (
              <div key={index} className="border-b border-foreground/20 pb-8">
                <h4 className="text-xl font-semibold">
                  {experience.title} at {experience.company}
                </h4>
                <p className="text-sm text-foreground/60">{experience.period}</p>
                <ul className="mt-4 list-disc list-inside space-y-2">
                  {experience.description.map((desc, i) => (
                    <li key={i} className="text-base leading-7 text-foreground/60">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight mb-8 lg:text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {about.skills.map((skill) => (
              <div key={skill} className="flex items-center justify-center rounded-lg border border-[#1f1f1f] bg-secondary/40 px-4 py-3 text-sm">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
