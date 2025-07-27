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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import {
  MapPin,
  CreditCard,
  Truck,
  Package,
  HelpCircle,
  Mail,
} from "lucide-react";

function FAQ() {
  const router = useRouter();

  const faqData = [
    {
      id: "location",
      icon: <MapPin className="w-5 h-5" />,
      question: "Where are you located?",
      answer: "We're based in San Fernando, Pampanga, Philippines.",
    },
    {
      id: "payment",
      icon: <CreditCard className="w-5 h-5" />,
      question: "What payment and delivery options are available?",
      answer: (
        <div className="space-y-4">
          <p>
            Currently, we accept{" "}
            <span className="font-semibold text-[#007DFE]">GCash</span> and{" "}
            <span className="font-semibold text-[#007DFE]">Bank Transfer</span>{" "}
            as our payment method, on a payment-first basis.
          </p>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Delivery options:</h4>

            <div className="pl-4 space-y-3">
              <div className="border-l-2 border-primary/20 pl-4">
                <h5 className="font-medium text-foreground">
                  Provincial shipping via LBC courier:
                </h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-2">
                  <li>
                    <span className="font-medium">
                      Branch pickup (Cash-on-Pick-Up, COP)
                    </span>{" "}
                    - You collect the package at a designated LBC branch and pay
                    only the shipping fee
                  </li>
                  <li>
                    <span className="font-medium">
                      Door-to-door delivery (Cash-on-Delivery, COD)
                    </span>{" "}
                    - Pay only the shipping fee upon delivery
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-accent/20 pl-4">
                <h5 className="font-medium text-foreground">
                  For nearby customers:
                </h5>
                <p className="text-sm text-muted-foreground mt-1">
                  Lalamove (Booking required)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Note:</span>{" "}
              Shipping fees must be covered by the buyer. We&apos;ll also
              provide photos of the items once packed and after shipping for
              your assurance.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "shipping",
      icon: <Truck className="w-5 h-5" />,
      question: "When is the shipping schedule?",
      answer: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="border-l-2 border-primary/20 pl-4">
              <h5 className="font-medium text-foreground">
                <span style={{ color: "#C4242D" }}>LBC</span> shipments:
              </h5>
              <p className="text-sm text-muted-foreground mt-1">
                Every weekend. If a weekday schedule works for us, we may be
                able to ship earlier.
              </p>
            </div>

            <div className="border-l-2 border-accent/20 pl-4">
              <h5 className="font-medium text-foreground">
                <span style={{ color: "#F26722" }}>Lalamove</span> (Same-day
                delivery):
              </h5>
              <p className="text-sm text-muted-foreground mt-1">
                Available once payment is confirmed.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Note:</span>{" "}
              We&apos;ll also provide photos of the items once packed and after
              shipping for your assurance.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "products",
      icon: <Package className="w-5 h-5" />,
      question: "What are you selling?",
      answer: (
        <div className="space-y-4">
          <p className="text-foreground">
            We offer and sell only authentic{" "}
            <span className="font-semibold text-blue-500">Funko</span> and{" "}
            <span className="font-semibold text-red-500">Pop Mart</span>{" "}
            collectibles!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
              <h5 className="font-semibold text-primary mb-2">
                Funko Pop Items
              </h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>⁃ Regular releases</li>
                <li>⁃ Store exclusives</li>
                <li>⁃ Limited editions</li>
                <li>⁃ Convention exclusives</li>
              </ul>
            </div>

            <div className="bg-accent/5 p-4 rounded-lg border border-accent/10">
              <h5 className="font-semibold text-accent mb-2">Pop Mart Items</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>⁃ Skullpanda collections</li>
                <li>⁃ Hirono series</li>
                <li>⁃ Labubu figures</li>
                <li>⁃ And many more!</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

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

      <div className="container relative px-4 md:px-6 mx-auto max-w-4xl py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            Support
          </Badge>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Page Title */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about Chase the Pop&apos;s
              collectibles, shipping, and services.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-foreground">
                Quick Answers
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border border-border/50 rounded-lg px-6 py-2"
                  >
                    <AccordionTrigger className="hover:no-underline group">
                      <div className="flex items-center gap-3 text-left">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-all duration-300">
                          {faq.icon}
                        </div>
                        <span className="font-medium text-foreground">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-13 pt-4 text-muted-foreground">
                      {typeof faq.answer === "string" ? faq.answer : faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center bg-muted/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find what you&apos;re looking for? Feel free to reach
              out to us directly.
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

export default FAQ;