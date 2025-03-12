# Buğra Mert Ayar - Portfolio Website

A modern, performant, and scalable portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern and Responsive Design**

  - Seamless display across all devices
  - Dark theme support
  - Customizable color scheme
  - Smooth animations

- **High Performance**

  - Server-side rendering (Next.js)
  - Optimized image loading
  - Minimal JavaScript usage
  - High Lighthouse scores

- **SEO Optimization**

  - Meta tags
  - Open Graph support
  - Sitemap support
  - Robots.txt configuration

- **Developer Experience**
  - Type safety with TypeScript
  - ESLint and Prettier integration
  - Modular code structure
  - Easy content management

## 🛠️ Technology Stack

### Core

- [Next.js](https://nextjs.org/) v15.2.2 - React framework
- [React](https://reactjs.org/) v19.0.0 - JavaScript library
- [TypeScript](https://www.typescriptlang.org/) v5 - Type safety

### Styling & UI

- [Tailwind CSS](https://tailwindcss.com/) v3.3.0 - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) v12.5.0 - Animation library
- [Lucide React](https://lucide.dev/) v0.479.0 - Icon library
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) v0.5.10 - Form styles
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) v0.5.16 - Typography styles

### Content & Utilities

- [React Markdown](https://github.com/remarkjs/react-markdown) v10.1.0 - Markdown rendering
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) v4.0.3 - Markdown front matter parser
- [clsx](https://github.com/lukeed/clsx) v2.1.1 - Class names utility
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) v3.0.2 - Tailwind class merging

### Development Tools

- [ESLint](https://eslint.org/) v9 - Code linting
- [Prettier](https://prettier.io/) v3.5.3 - Code formatting
- [PostCSS](https://postcss.org/) v8 - CSS transformer
- [Autoprefixer](https://github.com/postcss/autoprefixer) v10.0.1 - CSS vendor prefixes

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/bugramertayar/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
/src
  /app                    # Next.js App Router structure
    /(site)              # Site route group
      /page.tsx          # Home page
      /about/page.tsx    # About page
      /contact/page.tsx  # Contact page
      /playground/page.tsx # Projects page
    /layout.tsx          # Root layout
    /globals.css         # Global styles

  /components           # React components
    /layout            # Layout components
    /sections          # Page sections

  /lib                 # Utility functions
    /personal-info.ts  # Personal info management
    /utils.ts         # General utilities

  /content            # Content files
    /personal-info.json # Personal information
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file to configure the project:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Content Management

You can edit your personal information in the `src/content/personal-info.json` file.

## 📦 Building

For production build:

```bash
npm run build
```

To test the build output:

```bash
npm run start
```

## 🧪 Quality Control

- Lint check: `npm run lint`
- Type check: `npx tsc --noEmit`

## 📄 License

MIT

## 👤 Developer

Buğra Mert Ayar - Senior Frontend Developer

- [GitHub](https://github.com/bugramertayar)
- [LinkedIn](https://www.linkedin.com/in/bugra-mert-ayar/)
