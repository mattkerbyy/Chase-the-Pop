import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  onNavigate: (pageTitle: string) => void;
}
export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t bg-secondary/30 border-foreground/10">
      <div className="container px-4 md:px-6 py-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/ctp-logo-circle.png"
                alt="Chase the Pop Logo"
                width={512}
                height={512}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for authentic collectibles and pop culture
              treasures.
            </p>
          </div>

          <div className="flex justify-end gap-8"></div>
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/faq"
                  className="cursor-default hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-info"
                  className="cursor-default hover:text-primary transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="cursor-default hover:text-primary transition-colors"
                >
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          {/* Community */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/collectors-guide"
                  className="cursor-default hover:text-primary transition-colors"
                >
                  Collector&apos;s Guide
                </Link>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("Newsletter")}
                  className="cursor-default hover:text-primary transition-colors text-left"
                >
                  Newsletter
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("Events")}
                  className="cursor-default hover:text-primary transition-colors text-left"
                >
                  Events
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-foreground/10">
          <p className="text-sm text-muted-foreground">
            © 2025 Chase the Pop. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-primary" /> for collectors
          </p>
        </div>
      </div>
    </footer>
  );
}