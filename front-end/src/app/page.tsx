'use client'

import { ThemeProvider } from "@/src/components/ThemeProvider";
import { Header } from "@/src/components/Header";
import { HeroSection } from "@/src/components/HeroSection";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
        </main>
      </div>
    </ThemeProvider>
  );
}