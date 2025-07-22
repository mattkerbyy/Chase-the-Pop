'use client'

import { ThemeProvider } from "@/src/components/ThemeProvider";
import { Header } from "@/src/components/Header";
import { HeroSection } from "@/src/components/HeroSection";
import { FeaturedProducts } from "@/src/components/FeaturedProducts";
import { AboutSection } from "@/src/components/AboutSection";
import { ContactSection } from "@/src/components/ContactSection";
import { Footer } from "@/src/components/Footer";
import { ScrollToTop } from "@/src/components/ScrollToTop";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <FeaturedProducts />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}