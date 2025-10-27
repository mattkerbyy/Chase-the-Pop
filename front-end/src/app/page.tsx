"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HeroSection } from "@/src/app/home-page/HeroSection";
import { FeaturedServices } from "@/src/app/home-page/FeaturedServices";
import { AboutSection } from "@/src/app/home-page/AboutSection";
import { ContactSection } from "@/src/app/home-page/ContactSection";

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("scrollTo");

    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      // Remove query so navigating again works without refresh
      router.replace("/", { scroll: false });
    }
  }, [router]);

  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <AboutSection />
      <ContactSection />
    </>
  );
}
