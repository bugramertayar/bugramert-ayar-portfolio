'use client';

import { motion } from 'framer-motion';

const skills = ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Node.js', 'Tailwind CSS', 'JQuery', 'Agile(Scrum)'] as const;

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Logiwa WMS',
    period: 'May 2023 - Present',
    description: [
      'Led and actively participated in code review meetings, streamlining feedback processes to enhance code quality and maintain coding standards.',
      'Evaluated merge requests and provided actionable feedback, ensuring alignment with best practices and reducing potential bugs.',
      'Executed Angular version upgrades and library updates, improving system security and compatibility with the latest front-end technologies.',
      'Led the implementation of a company-wide design system to enable easier integration between utilizing Next.js, React, Redux, TypeScript, SASS, ESLint, pnpm, Ant Design, Jest enhancing platform functionality and user experience.'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Logiwa WMS',
    period: 'October 2021 - May 2023',
    description: [
      'Engineered the front-end of a scalable WMS and fulfillment system using Angular (10+), contributing to a seamless user experience and handling increased traffic without performance degradation.',
      'Implemented advanced Angular features, including routing, RxJs, and micro front-end architecture, to optimize code modularity and improve scalability.',
      'Adopted Agile methodologies, improving sprint efficiency and team collaboration, reducing project turnaround time.',
      'Developed cross-browser and mobile-responsive UIs, increasing accessibility and achieving higher user satisfaction.',
      'Integrated third-party tools and services, enhancing platform functionality and enabling seamless data flows.',
      'Developed reusable front-end components, reducing code redundancy and accelerating development time across multiple projects.',
      'Authored test cases utilizing TDD with Jasmine and Karma, ensuring robust code and achieving reduction in bugs.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Vendrops Technologies A.S.',
    period: 'June 2020 - October 2021',
    description: [
      'Designed and developed the front-end for a facility management project from scratch using JavaScript (ES6+), TypeScript, Angular, SCSS, and JQuery, improving operational efficiency by enabling real-time data management',
      'Developed and optimized the front-end for a task management project with Vue.js, enhancing user interface responsiveness and improving task tracking.',
      'Implemented controllers and services within an MVC pattern for a system modernization project, increasing code modularity and easing future scalability.'
    ]
  }
] as const;

export function About() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Senior Frontend Developer with a passion for building modern web applications</p>
          <p className="mt-6 text-lg leading-8 text-foreground/60">
            With over 5 years of experience in frontend development, I specialize in creating performant and scalable web applications using modern technologies. I'm passionate about clean code, user experience, and staying up-to-date with the latest industry trends.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7">Frontend Development</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-foreground/60">
                <p className="flex-auto">Experienced in building modern web applications with Angular, React and Next.js, focusing on performance, accessibility, and user experience.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7">Backend Integration</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-foreground/60">
                <p className="flex-auto">Proficient in integrating frontend applications with various backend services using REST APIs and GraphQL.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7">DevOps & Testing</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-foreground/60">
                <p className="flex-auto">Strong understanding of CI/CD pipelines, testing methodologies, and deployment strategies using modern tools and practices.</p>
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight mb-8 lg:text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
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
            {skills.map((skill) => (
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
