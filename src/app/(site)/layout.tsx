import { Header } from '@/components/layout/Header';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div>{children}</div>
    </div>
  );
}
