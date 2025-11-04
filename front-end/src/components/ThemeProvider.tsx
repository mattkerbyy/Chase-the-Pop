"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Detect and apply theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme) {
      // User has previously set a preference; use it
      setThemeState(storedTheme);
    } else {
      // Priority 1: Detect system/device theme preference
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const detectedTheme = prefersDark ? "dark" : "light";

      // Priority 2: Fall back to light theme if nothing is detected
      setThemeState(detectedTheme);
    }

    setMounted(true);
  }, []);

  // Apply theme to DOM and persist to localStorage
  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
