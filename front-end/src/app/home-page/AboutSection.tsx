import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import {
  Heart,
  Shield,
  Star,
  MapPin,
  Calendar,
  Target,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Collector's Passion",
    description:
      "Founded by collectors, for collectors. We understand the thrill of the hunt and the joy of finding that perfect piece for your collection.",
    color: "text-red-500",
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description:
      "Every item is carefully inspected and verified. We stand behind the authenticity of every Funko Pop and Pop Mart collectible we offer.",
    color: "text-green-500",
  },
  {
    icon: Target,
    title: "Specialized Focus",
    description:
      "We concentrate exclusively on Funko Pop and Pop Mart collectibles, ensuring deep expertise and comprehensive inventory in these areas.",
    color: "text-blue-500",
  },
  {
    icon: Star,
    title: "Pre-Order & Sourcing",
    description:
      "Our core services include pre-order management for new releases and custom sourcing for rare, discontinued, and vaulted items.",
    color: "text-yellow-500",
  },
];

const milestones = [
  {
    icon: Calendar,
    label: "Founded",
    value: "Nov 2024",
    color: "text-primary",
    description: "Started our journey",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "San Fernando, Pampanga",
    color: "text-green-500",
    description: "Philippines",
  },
  {
    icon: Users,
    label: "Happy Collectors",
    value: "Growing",
    color: "text-blue-500",
    description: "Community members",
  },
  {
    icon: Target,
    label: "Specialties",
    value: "2 Main",
    color: "text-purple-500",
    description: "Funko Pop & Pop Mart",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative px-4 md:px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Our Story
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            About
            <span className="text-primary"> Chase the Pop</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto leading-relaxed">
            A fresh start in the collectibles world — bringing passion,
            expertise, and dedication to Funko Pop and Pop Mart enthusiasts in
            the Philippines
          </p>
        </div>

        {/* Milestones Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {milestones.map((milestone, index) => (
            <Card
              key={index}
              className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card"
            >
              <CardContent className="p-0 space-y-3">
                <milestone.icon
                  className={`h-10 w-10 ${milestone.color} mx-auto`}
                />
                <div className="space-y-1">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {milestone.value}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {milestone.label}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {milestone.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Our Journey Begins
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Chase the Pop</strong> started in{" "}
                <strong>November 2024</strong> from our base in{" "}
                <strong>San Fernando, Pampanga, Philippines</strong>. Born from
                a genuine passion for collectibles, we specialize exclusively in{" "}
                <strong>Funko Pop and Pop Mart collectibles</strong>, ensuring
                deep expertise and comprehensive knowledge in these specific
                areas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We focus primarily on providing{" "}
                <strong>pre-order services</strong> for the latest releases and{" "}
                <strong>custom sourcing services</strong> to help collectors
                find those elusive pieces. Our team consists of dedicated
                collectors who understand the value of each piece, from common
                finds to holy grail rarities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Though we&apos;re new to the scene, our commitment to
                authenticity, customer service, and building a strong collector
                community drives everything we do. We&apos;re here to help you
                chase your next grail!
              </p>
            </div>

            {/* Mission Statement */}
            <Card className="border-l-4 border-l-primary bg-primary/5 border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-foreground mb-3">
                  Our Mission
                </h4>
                <p className="text-muted-foreground">
                  To become the Philippines&apos; most trusted destination for
                  Funko Pop and Pop Mart collectibles, connecting passionate
                  collectors with authentic items through expert pre-order and
                  sourcing services.
                </p>
              </CardContent>
            </Card>

            {/* Location Highlight */}
            <Card className="border-l-4 border-l-accent bg-accent/5 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <h4 className="font-bold text-lg text-foreground">
                    Based in San Fernando, Pampanga
                  </h4>
                </div>
                <p className="text-muted-foreground">
                  Proudly serving collectors across the Philippines with fast,
                  reliable shipping and local expertise in the collectibles
                  market.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card border-0 shadow-lg"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <feature.icon
                      className={`h-12 w-12 ${feature.color} mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}