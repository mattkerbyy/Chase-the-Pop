import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns and Exchanges",
  description:
    "Find out how our returns and exchanges process works—including eligibility, timelines, cost, and guarantee policies—so you can shop with confidence.",
};

export default function ReturnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
