import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ParallaxParticles } from '@/components/background/ParallaxParticles';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-tokyo-bg [html.light_&]:bg-tokyo-light-bg transition-colors duration-300">
      <ParallaxParticles />
      <Header />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
