import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { ScrollToTop } from "@/src/components/ScrollToTop";
import { Toaster } from "sonner";
import VercelAnalytics from "@/src/components/VercelAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://chase-the-pop.vercel.app"), // UPDATE ACTUAL DOMAIN ONCE DEPLOYED
  title: {
    default: "Chase the Pop - Collectibles Store",
    template: "%s | Chase the Pop",
  },
  description:
    "Your spot for all things collectible! Hunt exclusive Funko Pops, Pop Mart figures, and preorder limited-edition treasures.",
  keywords: [
    "chase the pop",
    "collectible",
    "collectibles",
    "figure",
    "figures",
    "toy",
    "toys",
    "online store",
    "funko pop",
    "pop mart",
    "preorder",
    "pre-order",
    "limited edition",
    "limited-edition",
    "Matt Kerby Perez",
    "mattkerbyy",
    "kerbytes",
  ],
  authors: [{ name: "mattkerbyy" }],
  creator: "mattkerbyy",
  publisher: "mattkerbyy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chase-the-pop.vercel.app", // UPDATE ACTUAL DOMAIN ONCE DEPLOYED
    title: "Chase the Pop - Collectibles Store",
    description:
      "Your spot for all things collectible! Hunt exclusive Funko Pops, Pop Mart figures, and preorder limited-edition treasures.",
    images: ["/opengraph-image.png"],
    siteName: "Chase the Pop",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chase the Pop - Collectibles Store",
    description:
      "Your spot for all things collectible! Hunt exclusive Funko Pops, Pop Mart figures, and preorder limited-edition treasures.",
    images: ["/opengraph-image.png"],
    creator: "@mattkerbyy_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://chase-the-pop.vercel.app", // UPDATE ACTUAL DOMAIN ONCE DEPLOYED
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#020617"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="msapplication-TileColor" content="#020617" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/images/apple-touch-167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/apple-touch-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/apple-touch-120.png"
        />

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Chase the Pop - Collectibles Store",
              alternateName: "Chase the Pop",
              description:
                "Your spot for all things collectible! Hunt exclusive Funko Pops, Pop Mart figures, and preorder limited-edition treasures.",
              url: "https://chase-the-pop.vercel.app", // UPDATE ACTUAL DOMAIN ONCE DEPLOYED
              applicationCategory: "BusinessApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              // aggregateRating: { // UPDATE ONCE ACTUAL RATING DATA IS AVAILABLE
              //   '@type': 'AggregateRating',
              //   ratingValue: '5.0',
              //   ratingCount: '1250',
              // },
              browserRequirements: "Requires JavaScript. Requires HTML5.",
              permissions: "No special permissions required",
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-background transition-colors duration-300">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ScrollToTop />
            <Toaster position="top-right" richColors />
            <VercelAnalytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
