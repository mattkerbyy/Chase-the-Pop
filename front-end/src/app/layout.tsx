import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { ScrollToTop } from "@/src/components/ScrollToTop";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Chase the Pop - Collectibles Store",
  description:
    "Your spot for all things collectible! Hunt exclusive Funko Pops, Pop Mart figures, and preorder limited-edition treasures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-background transition-colors duration-300">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ScrollToTop />
            <Toaster position="top-right" richColors />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
