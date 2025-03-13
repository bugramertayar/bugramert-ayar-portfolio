import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import '@/styles/globals.css';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Buğra Mert Ayar - Senior Frontend Developer',
  description: 'Personal portfolio website of Buğra Mert Ayar, a Senior Frontend Developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Buğra Mert Ayar' }],
  creator: 'Buğra Mert Ayar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bugramertayar.com',
    title: 'Buğra Mert Ayar - Senior Frontend Developer',
    description: 'Personal portfolio website of Buğra Mert Ayar, a Senior Frontend Developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Buğra Mert Ayar Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buğra Mert Ayar - Senior Frontend Developer',
    description: 'Personal portfolio website of Buğra Mert Ayar, a Senior Frontend Developer specializing in React, Next.js, and modern web technologies.',
    creator: '@bugramertayar'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('relative min-h-screen bg-background font-sans antialiased', inter.className)}>
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
