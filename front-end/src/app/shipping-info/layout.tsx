import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Information",
  description:
    "Discover our shipping options, delivery times, costs, coverage—and learn how we carefully pack your items to ensure they arrive safe and intact.",
};

export default function ShippingInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
