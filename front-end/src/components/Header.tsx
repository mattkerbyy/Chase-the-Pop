import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
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

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            className="h-12 w-auto transition-transform hover:scale-105"
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
            className="md:hidden border-foreground/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}