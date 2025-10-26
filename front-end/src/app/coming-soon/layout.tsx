import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon!",
  description:
    "We're working hard to bring you something amazing! This section is currently under development and will be available soon.",
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
