import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="lg"
        className="group relative h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 border-2 border-primary/20 dark:border-primary/40"
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Icon */}
        <ChevronUp className="relative z-10 h-6 w-6 group-hover:scale-110 transition-transform duration-200" />

        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>

        {/* Outer ring animation */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-100 group-hover:scale-125 transition-all duration-300 opacity-50 group-hover:opacity-0"></div>
      </Button>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-card text-card-foreground px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border border-border">
          Back to top
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-card"></div>
        </div>
      </div>
    </div>
  );
}