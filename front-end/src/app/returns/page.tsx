"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Alert, AlertDescription } from "../../components/ui/alert";
import {
  RotateCcw,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Mail,
} from "lucide-react";

export default function Returns() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background consistent with theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

        {/* Floating collectible elements */}
        <div className="absolute inset-0 opacity-80 pointer-events-none">
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

          {/* Small floating elements */}
          <div
            className="absolute top-1/3 left-16 w-8 h-8 bg-primary/10 rounded-full transform-gpu will-change-transform animate-bounce"
            style={{ animationDelay: "0.3s", backfaceVisibility: "hidden" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-16 w-6 h-6 bg-accent/15 rounded-full transform-gpu will-change-transform animate-bounce"
            style={{ animationDelay: "0.7s", backfaceVisibility: "hidden" }}
          ></div>
        </div>
      </div>

      <div className="container relative px-4 md:px-6 mx-auto max-w-5xl py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <RotateCcw className="w-4 h-4 mr-2" />
            Returns
          </Badge>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          {/* Page title */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Returns & Exchanges
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your satisfaction is our priority. Learn about our return policy
              and how we handle collectible exchanges.
            </p>
          </div>

          {/* Important notice */}
          <Alert className="border-primary/20 bg-primary/5">
            <Shield className="w-5 h-5 text-primary" />
            <AlertDescription className="text-foreground">
              <span className="font-semibold">Quality Guarantee:</span> All our
              Funko Pop and Pop Mart collectibles are 100% authentic. We
              carefully inspect each item before shipping to ensure you receive
              perfect collectibles.
            </AlertDescription>
          </Alert>

          {/* Return policy overview */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Shield className="w-6 h-6 text-primary" />
                Our Return Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                At Chase the Pop, we understand that collectibles are precious
                investments. Our return policy is designed to protect both
                collectors and ensure fair transactions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    Eligible Returns
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Significantly different from description, authenticity
                    concerns, or missing parts
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-foreground">Time Frame</h4>
                  <p className="text-sm text-muted-foreground">
                    Report issues within 24 hours of delivery with photo
                    evidence
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
                    <XCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    Non-Returnable
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Buyer&apos;s remorse, items in perfect condition, or late
                    reports
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acceptable return reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  Acceptable Returns
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-medium text-foreground">
                        Significantly Different
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Item substantially different from description or photos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-medium text-foreground">
                        Authenticity Concerns
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Suspected counterfeit items (rare occurrence)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-medium text-foreground">
                        Missing Parts
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Incomplete items or missing accessories as described
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-red-600">
                  <XCircle className="w-5 h-5" />
                  Non-Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-medium text-foreground">
                        Change of Mind
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Buyer&apos;s remorse or simply not liking the item
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-medium text-foreground">
                        Perfect Condition Items
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Items received exactly as described and in perfect
                        condition
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-medium text-foreground">
                        Late Reports
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Issues reported after 24-hour window without valid
                        reason
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Return process */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <RotateCcw className="w-6 h-6 text-primary" />
                Return Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary font-bold">
                    1
                  </div>
                  <h4 className="font-semibold text-foreground">Contact Us</h4>
                  <p className="text-sm text-muted-foreground">
                    Reach out within 24 hours of delivery via our contact form
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary font-bold">
                    2
                  </div>
                  <h4 className="font-semibold text-foreground">
                    Provide Evidence
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Send clear photos and detailed description of the issue
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary font-bold">
                    3
                  </div>
                  <h4 className="font-semibold text-foreground">Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll review your case and determine eligibility
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary font-bold">
                    4
                  </div>
                  <h4 className="font-semibold text-foreground">Resolution</h4>
                  <p className="text-sm text-muted-foreground">
                    Approved returns will be processed for replacement or refund
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for returns */}
          <Alert className="border-primary/20 bg-primary/5">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <AlertDescription className="text-foreground">
              <span className="font-semibold">Need to return an item?</span>{" "}
              Contact us immediately with photos and details. Quick
              communication helps us resolve issues faster and ensures the best
              outcome for your collectibles.
            </AlertDescription>
          </Alert>

          {/* Contact CTP */}
          <div className="text-center rounded-lg p-8 bg-card/50 backdrop-blur-sm border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Have a return or exchange request?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help resolve any issues with your collectibles
              order.
            </p>
            <Button
              onClick={() => router.push("/?scrollTo=contact")}
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group px-8 transform hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
