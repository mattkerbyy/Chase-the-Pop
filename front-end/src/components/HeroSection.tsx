"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import {
  ArrowRight,
  BookCheck,
  Check,
  CheckCheck,
  CheckCheckIcon,
  CheckCircle,
  CheckCircle2,
  CheckCircle2Icon,
  CheckLine,
  CheckSquare,
  ChevronUpCircle,
  FileCheck,
  LucideChartCandlestick,
  LucideCircleCheck,
  LucideCloudCheck,
  Sparkles,
  Star,
  TrendingUp,
  Dog,
  DogIcon,
  LucideDog,
  UserPlus,
  UserPlus2,
} from "lucide-react";
import { Checkbox } from "radix-ui";

export function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-primary/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative px-4 md:px-6 py-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Announcement Badge */}
            <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <UserPlus2 className="w-4 h-4" />
              Welcome To:
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Chase the
                <span className="block text-primary relative">
                  Pop
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></div>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] leading-relaxed">
                Your ultimate destination for premium collectibles. Discover
                rare Funko Pops, exclusive Popmart figures, and limited edition
                treasures.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">100% Recommended</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-green-500" />
                <span className="font-semibold">Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span className="font-semibold">Rare Finds</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="text-base px-8 py-4 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToAbout}
                className="text-base px-8 py-4 border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl w-full h-64">
                  <Image
                    src="/images/funko-store.png"
                    alt="Funko Pop Collection"
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute bottom-4 left-4 bg-blue-500 text-white">
                    Funko Pop
                  </Badge>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl w-full h-40">
                  <Image
                    src="/images/popmart-sp-the-glimpse.png"
                    alt="Pop Art Collectibles"
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute bottom-3 left-3 bg-indigo-900 text-white text-xs">
                    Limited
                  </Badge>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl w-full h-40">
                  <Image
                    src="/images/funko-ds-muichiro-tokito.png"
                    alt="Collectible Figures"
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute bottom-3 left-3 bg-sky-500 text-white text-xs">
                    New
                  </Badge>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl w-full h-64">
                  <Image
                    src="/images/popmart-store.png"
                    alt="Vintage Toys"
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute bottom-4 left-4 bg-red-500 text-white">
                    Popmart
                  </Badge>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-bounce delay-100"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
