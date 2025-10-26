"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const sections = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  // Intersection observers
  useEffect(() => {
    // Only run observers on home page
    if (pathname !== "/") {
      return;
    }

    const observers = new Map();

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Use a timeout to ensure DOM elements are available after navigation
    const setupObservers = () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const observer = new IntersectionObserver(
            handleIntersection,
            observerOptions
          );
          observer.observe(element);
          observers.set(id, observer);
        }
      });
    };

    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(setupObservers, 100);

    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [pathname]); // Add pathname as dependency

  // Handle URL scroll parameter
  useEffect(() => {
    if (pathname === "/") {
      const urlParams = new URLSearchParams(window.location.search);
      const scrollTo = urlParams.get("scrollTo");

      if (scrollTo) {
        // Small delay to ensure the page has loaded
        setTimeout(() => {
          const element = document.getElementById(scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(scrollTo);
          }
        }, 300);

        // Clean up URL parameter
        const newUrl = window.location.pathname;
        window.history.replaceState({}, "", newUrl);
      }
    }
  }, [pathname]);

  // Reset active section when not on home page
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
    } else {
      // Set default active section when returning to home
      setActiveSection("home");
    }
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest("header")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      // Already on home page
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    } else {
      // Navigate to home first, then scroll
      router.push(`/?scrollTo=${sectionId}`);
      setIsOpen(false);
    }
  };

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <Image
            src="/images/ctp-logo-circle.png"
            alt="Chase the Pop Logo"
            width={512}
            height={512}
            className="h-12 w-auto transition-transform hover:scale-105 cursor-pointer"
            onClick={() => {
              router.push("/");
              setIsOpen(false);
            }}
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Chase the Pop
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Collectibles Store
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative text-sm font-medium transition-all hover:text-primary hover:scale-105 transform duration-200 pb-1 ${
                activeSection === id ? "text-primary" : "text-foreground"
              }`}
            >
              {label}
              {/* Active section underline */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                  activeSection === id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-full hover:bg-primary/10 transition-colors duration-200"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-foreground" />
            ) : (
              <Sun className="h-5 w-5 text-foreground" />
            )}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden border-foreground/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-4 h-4">
              <Menu
                className={`h-4 w-4 absolute transition-all duration-300 ${
                  isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`h-4 w-4 absolute transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile navigation with smooth animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-background/95 backdrop-blur-sm border-t border-foreground/10 shadow-lg">
          <ul className="flex flex-col p-4 space-y-1">
            {sections.map(({ id, label }, index) => (
              <li
                key={id}
                className="group"
                style={{
                  animationDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <button
                  className={`
                    w-full text-left px-4 py-3 rounded-lg
                    text-sm font-medium transition-all duration-200
                    hover:bg-primary/10 hover:text-primary
                    active:scale-95 transform
                    ${
                      activeSection === id
                        ? "text-primary bg-black/5 dark:bg-white/5"
                        : "text-foreground"
                    }
                    ${isOpen ? "animate-fade-in-up" : ""}
                  `}
                  onClick={() => handleMobileNavClick(id)}
                >
                  <div className="flex items-center justify-between">
                    <span>{label}</span>
                    {/* Animated underline indicator */}
                    <div className="relative w-6 h-0.5 ml-2">
                      <span
                        className={`
                          absolute left-0 top-0 h-full rounded-full
                          transition-all duration-300 ease-out
                          ${
                            activeSection === id
                              ? "w-full opacity-100"
                              : "w-0 opacity-0"
                          }
                        `}
                      />
                    </div>
                  </div>

                  {/* Bottom border animation */}
                  <div className="relative mt-2">
                    <span
                      className={`
                        absolute left-0 top-0 h-full
                        bg-primary rounded-full
                        transition-all duration-300 ease-out
                        ${
                          activeSection === id
                            ? "w-full opacity-100"
                            : "w-0 opacity-0"
                        }
                      `}
                    />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <nav
          className="absolute top-full items-center w-full bg-background shadow-md md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
