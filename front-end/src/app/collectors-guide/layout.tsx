import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collector's Guide",
  description:
    "Your comprehensive guide to Funko Pop and Pop Mart collectibles. Learn the essentials of collecting, valuing, and caring for your treasures.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}