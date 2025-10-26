import { useRouter, usePathname } from "next/navigation";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import { Package, Search, Calendar, Shield, Star, Mail } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Funko Pop Collectibles",
    subtitle: "Vinyl Figures Collection",
    description:
      "Discover Funko Pop vinyl figures spanning beloved franchise favourites, sought-after chase variants, exclusive convention editions, and limited-edition releases.",
    features: [
      "Regular Releases",
      "Chase Variants",
      "Convention Exclusives",
      "Limited Editions",
    ],
    icon: Package,
    image: "/images/image-placeholder.png",
    accent: "bg-blue-500",
    isHighlighted: true,
  },
  {
    id: 2,
    title: "Pop Mart Collectibles",
    subtitle: "Designer Art Toys Collection",
    description:
      "Explore Pop Mart designer toys and art collectibles featuring popular series such as Skullpanda, Hirono, and Labubu, plus exclusive artist collaborations and collectible limited-edition releases.",
    features: [
      "Skullpanda Collections",
      "Hirono Series",
      "Labubu Figures",
      "Artist Collaborations",
    ],
    icon: Star,
    image: "/images/image-placeholder.png",
    accent: "bg-red-500",
    isHighlighted: true,
  },
  {
    id: 3,
    title: "Pre-Order Services",
    subtitle: "Secure Your Next Grail",
    description:
      "Never miss out on the latest releases! We offer comprehensive pre-order services mainly for Funko Pop and Pop Mart collectibles, especially new releases with guaranteed authenticity and priority fulfillment.",
    features: [
      "Early Access",
      "New Releases",
      "Guaranteed Fulfillment",
      "Priority Processing",
    ],
    icon: Calendar,
    image: "/images/image-placeholder.png",
    accent: "bg-green-500",
    isHighlighted: true,
  },
  {
    id: 4,
    title: "Custom Sourcing",
    subtitle: "Hunt Your Holy Grail",
    description:
      "Looking for that elusive piece? We help you hunt and acquire specific collectibles, especially discontinued, vaulted, or rare items. Our global network specializes in finding your ultimate holy grail collectibles.",
    features: [
      "Discontinued Items",
      "Vaulted Collectibles",
      "Rare Finds",
      "Holy Grail",
    ],
    icon: Search,
    image: "/images/image-placeholder.png",
    accent: "bg-orange-500",
    isHighlighted: true,
  },
  {
    id: 5,
    title: "Collectible Assessment",
    subtitle: "Expert Authentication & Valuation",
    description:
      "Free assessment services to help fellow collectors verify authenticity and estimate condition, rarity, and market value, for your reference, insurance purposes, or resale planning.",
    features: [
      "Authentication Insights (Free)",
      "Condition & Rarity Overview",
      "Estimated Market Value",
      "Collector Support & Guidance",
    ],
    icon: Shield,
    image: "/images/image-placeholder.png",
    accent: "bg-purple-500",
    isHighlighted: true,
  },
];

export function FeaturedServices() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToContact = () => {
    if (pathname === "/") {
      // Already on home page (Scroll directly to contact)
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home first, then scroll
      router.push("/?scrollTo=contact");
    }
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-7">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
            What We Offer
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
            Our Collectibles
            <span className="block text-primary">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-[600px] lg:max-w-[700px] mx-auto leading-relaxed px-4 sm:px-0">
            Curated services for passionate collectors — from authentic in-hand
            inventory to trusted sourcing and expert assessments
          </p>
        </div>

        {/* Services Grid (Improved responsive layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-card w-full max-w-sm sm:max-w-none ${
                  service.isHighlighted ? "ring-2 ring-primary/20" : ""
                } ${
                  // First 3 cards take 2 columns each (2x3=6 columns total)
                  index < 3 ? "lg:col-span-2" : ""
                } ${
                  // Last 2 cards: position them centered (Spanning 3 columns each, offset by 1.5)
                  index === 3 ? "lg:col-span-2 lg:col-start-2" : ""
                } ${index === 4 ? "lg:col-span-2 lg:col-start-4" : ""}`}
              >
                {/* Service Image */}
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div
                      className={`p-2 sm:p-3 rounded-full ${service.accent} text-white shadow-lg`}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-1 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Service Info */}
                <CardContent className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-justify">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-2.5">
                    <h4 className="font-medium text-foreground text-xs sm:text-sm">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm text-muted-foreground leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact CTP */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-xl sm:max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              Ready to Start Your Collection Journey?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 leading-relaxed">
              Get in touch to discuss your collecting needs, ask about specific
              items, or learn more about our services.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group px-8 transform hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
