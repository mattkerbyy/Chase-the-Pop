import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Get clear, straightforward answers about our store—covering location, payment options, delivery methods, and product range. Explore our FAQ to learn more.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}