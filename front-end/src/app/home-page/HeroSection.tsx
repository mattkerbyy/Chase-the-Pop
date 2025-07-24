"use client";

import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import Image from "next/image";
import {
  ArrowRight,
  CheckSquare,
  Sparkles,
  Star,
  UserPlus2,
} from "lucide-react";

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
    <section id="home" className="py-24 bg-background relative overflow-hidden">
      {/* Cool Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

        {/* Floating collectible boxes */}
        <div className="absolute inset-0 opacity-30">
          {/* Large floating squares representing collectible boxes */}
          <div className="absolute top-10 left-10 w-16 h-16 border-2 border-primary/20 rounded-lg rotate-45 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-12 h-12 border-2 border-accent/20 rounded-lg rotate-12 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-primary/15 rounded-lg -rotate-12 animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-14 h-14 border-2 border-accent/25 rounded-lg rotate-45 animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 w-10 h-10 border-2 border-primary/30 rounded-lg -rotate-45 animate-pulse delay-1500"></div>

          {/* Medium floating elements */}
          <div className="absolute top-20 right-1/4 w-8 h-8 bg-primary/10 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-32 left-20 w-6 h-6 bg-accent/15 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-3/4 right-10 w-12 h-12 bg-primary/5 rounded-full animate-bounce delay-1200"></div>
        </div>

        {/* Dynamic gradient waves */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -skew-y-3 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-l from-transparent via-accent/10 to-transparent transform skew-y-2 animate-pulse delay-1000"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 opacity-20">
          {/* Hexagons for collectible theme */}
          <div
            className="absolute top-16 left-1/3 w-8 h-8 transform rotate-45"
            style={{
              background:
                "linear-gradient(45deg, var(--primary) 0%, transparent 50%)",
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              animation: "float 6s ease-in-out infinite",
            }}
          ></div>

          <div
            className="absolute bottom-24 right-1/4 w-12 h-12 transform -rotate-12"
            style={{
              background:
                "linear-gradient(135deg, var(--accent) 0%, transparent 50%)",
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              animation: "float 8s ease-in-out infinite reverse",
            }}
          ></div>

          {/* Diamond shapes */}
          <div
            className="absolute top-1/3 right-16 w-6 h-6 bg-primary/20 transform rotate-45 animate-spin"
            style={{
              animationDuration: "20s",
            }}
          ></div>

          <div
            className="absolute bottom-1/3 left-16 w-10 h-10 bg-accent/15 transform rotate-45 animate-spin"
            style={{
              animationDuration: "25s",
              animationDirection: "reverse",
            }}
          ></div>
        </div>

        {/* Animated circuit-like connections */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
                <stop
                  offset="100%"
                  stopColor="var(--primary)"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {/* Animated flowing lines */}
            <path
              d="M100,100 Q300,50 500,100 T900,100"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,0;0,1000"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M100,300 Q400,250 700,300 T900,350"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                values="1000,0;0,1000;1000,0"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M200,500 Q500,450 800,500"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,0;0,1000"
                dur="12s"
                repeatCount="indefinite"
              />
            </path>

            {/* Connection nodes */}
            <circle cx="100" cy="100" r="4" fill="var(--primary)" opacity="0.5">
              <animate
                attributeName="r"
                values="4;8;4"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="500" cy="100" r="4" fill="var(--accent)" opacity="0.5">
              <animate
                attributeName="r"
                values="4;8;4"
                dur="3s"
                repeatCount="indefinite"
                begin="1s"
              />
            </circle>
            <circle cx="900" cy="100" r="4" fill="var(--primary)" opacity="0.5">
              <animate
                attributeName="r"
                values="4;8;4"
                dur="3s"
                repeatCount="indefinite"
                begin="2s"
              />
            </circle>
          </svg>
        </div>
      </div>

      {/* Add floating keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-180deg);
          }
        }
      `}</style>

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
                Your spot for all things collectible! Hunt exclusive Funko Pops,
                Pop Mart figures, and preorder limited-edition treasures.
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
                    Exclusive
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
                    Pop Mart
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