'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { getPersonalInfo } from '@/lib/personal-info';
import { Section } from '@/components/shared/Section';
import { Container } from '@/components/shared/Container';
import { FadeInUp } from '@/components/shared/Motion';
import { Link } from '@/components/shared/Link';
import { Button } from '@/components/shared/Button';

export function Contact() {
  const {
    shared,
    pages: { contact }
  } = getPersonalInfo();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Section>
      <Container>
        <FadeInUp className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{contact.headline}</p>
          <p className="mt-6 text-lg leading-8 text-foreground/60">{contact.description}</p>
        </FadeInUp>

        <FadeInUp delay={0.2} className="mx-auto mt-8 max-w-2xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6">
                    {contact.form.fields.name.label}
                  </label>
                  <div className="mt-2">
                    <input
                      type={contact.form.fields.name.type}
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="block w-full rounded-md border border-[#1f1f1f] bg-secondary/40 px-3.5 py-2 text-foreground shadow-sm placeholder:text-foreground/60 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6">
                    {contact.form.fields.email.label}
                  </label>
                  <div className="mt-2">
                    <input
                      type={contact.form.fields.email.type}
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="block w-full rounded-md border border-[#1f1f1f] bg-secondary/40 px-3.5 py-2 text-foreground shadow-sm placeholder:text-foreground/60 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium leading-6">
                    {contact.form.fields.message.label}
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={contact.form.fields.message.rows}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="block w-full rounded-md border border-[#1f1f1f] bg-secondary/40 px-3.5 py-2 text-foreground shadow-sm placeholder:text-foreground/60 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <Button type="submit" variant="primary" className="w-full">
                    {contact.form.submitButtonText}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.4} className="mx-auto mt-8 max-w-2xl text-center sm:mt-8">
          <h3 className="text-lg font-semibold leading-8">{contact.connect.title}</h3>
          <div className="mt-6 flex justify-center gap-6">
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
          </div>
        </FadeInUp>
      </Container>
    </Section>
  );
}
