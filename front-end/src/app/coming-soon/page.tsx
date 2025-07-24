"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { ArrowLeft, Clock, Sparkles, Construction } from "lucide-react";

interface ComingSoonProps {
  onBack: () => void;
  pageTitle: string;
}

function ComingSoon({ onBack, pageTitle }: ComingSoonProps) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Animated background consistent with theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

        {/* Floating elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute top-20 left-20 w-16 h-16 border-2 border-primary/20 rounded-lg transform-gpu will-change-transform animate-pulse"
            style={{ transform: "rotate(45deg)", backfaceVisibility: "hidden" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-12 h-12 border-2 border-accent/20 rounded-lg transform-gpu will-change-transform animate-pulse"
            style={{
              transform: "rotate(12deg)",
              animationDelay: "1s",
              backfaceVisibility: "hidden",
            }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-primary/15 rounded-lg transform-gpu will-change-transform animate-pulse"
            style={{
              transform: "rotate(-12deg)",
              animationDelay: "2s",
              backfaceVisibility: "hidden",
            }}
          ></div>
          <div
            className="absolute bottom-20 right-1/3 w-14 h-14 border-2 border-accent/25 rounded-lg transform-gpu will-change-transform animate-pulse"
            style={{
              transform: "rotate(45deg)",
              animationDelay: "0.5s",
              backfaceVisibility: "hidden",
            }}
          ></div>
        </div>
      </div>

      <div className="container relative px-4 md:px-6 mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          {/* Main Content */}
          <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
            <CardContent className="p-12 space-y-8">
              {/* Icon and Badge */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <Construction className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-bounce">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Coming Soon
                </Badge>
              </div>

              {/* Title and Description */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  {pageTitle}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We&apos;re working hard to bring you something amazing! This
                  section is currently under development and will be available
                  soon.
                </p>
              </div>

              {/* Features Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Enhanced Features
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    New functionality designed with collectors in mind
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Construction className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Better Experience
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Improved user interface and smoother interactions
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Worth the Wait
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Quality features that enhance your collecting journey
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Button
                  onClick={() => {
                    router.push("/");
                  }}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group px-8 transform hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Message */}
          <p className="text-sm text-muted-foreground animate-pulse">
            Thank you for your patience as we continue to build Chase the Pop!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;