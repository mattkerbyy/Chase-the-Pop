"use client";

import { useState } from "react";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import { Header } from "@/src/components/Header";
import { HeroSection } from "@/src/components/HeroSection";
import { FeaturedProducts } from "@/src/components/FeaturedProducts";
import { AboutSection } from "@/src/components/AboutSection";
import { ContactSection } from "@/src/components/ContactSection";
import { Footer } from "@/src/components/Footer";
import { ComingSoon } from "@/src/components/ComingSoon";
import { ScrollToTop } from "@/src/components/ScrollToTop";
import { Toaster } from "sonner";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigateToComingSoon = (pageTitle: string) => {
    setCurrentPage(pageTitle);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ThemeProvider>
      {currentPage === "home" ? (
        <div className="min-h-screen bg-background transition-colors duration-300">
          <Header />
          <main>
            <HeroSection />
            <FeaturedProducts />
            <AboutSection />
            <ContactSection />
            <Toaster position="top-right" richColors />
          </main>
          <Footer onNavigate={handleNavigateToComingSoon} />
          <ScrollToTop />
        </div>
      ) : (
        <ComingSoon onBack={handleBackToHome} pageTitle={currentPage} />
      )}
    </ThemeProvider>
  );
}