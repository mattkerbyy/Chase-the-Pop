import { ThemeProvider } from "@/src/components/ThemeProvider";
import { Header } from "@/src/components/Header";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        <main>
        </main>
      </div>
    </ThemeProvider>
  );
}