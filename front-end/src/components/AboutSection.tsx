import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Heart, Shield, Truck, Star, Users, Award, Globe } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Passion for Collecting",
    description: "Founded by collectors, for collectors. We understand the thrill of the hunt and the joy of finding that perfect piece.",
    color: "text-red-500"
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "Every item is carefully inspected and verified. We stand behind the authenticity of every collectible we offer.",
    color: "text-green-500"
  },
  {
    icon: Truck,
    title: "Secure Shipping",
    description: "Professional packaging and insured shipping ensure your treasures arrive safely at your doorstep.",
    color: "text-blue-500"
  },
  {
    icon: Star,
    title: "Exclusive Access",
    description: "Get early access to limited releases, convention exclusives, and rare finds before they hit the market.",
    color: "text-yellow-500"
  }
];

const stats = [
  { icon: Users, label: "Happy Collectors", value: "25,000+", color: "text-blue-500" },
  { icon: Award, label: "Years Experience", value: "8+", color: "text-green-500" },
  { icon: Globe, label: "Countries Served", value: "50+", color: "text-purple-500" },
  { icon: Star, label: "Items Sold", value: "100K+", color: "text-yellow-500" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
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
            More than just a store - we&apos;re a community of passionate collectors united by our love for pop culture treasures
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardContent className="p-0 space-y-3">
                <stat.icon className={`h-10 w-10 ${stat.color} mx-auto`} />
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Our Journey Begins</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Born from a passion for pop culture and collectibles, Chase the Pop has been connecting collectors with their dream pieces since our founding. We specialize in Funko Pop figures, Popmart designer toys, and exclusive collectibles that capture the essence of beloved characters and franchises.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team consists of dedicated collectors who understand the value of each piece, from common finds to holy grail rarities. We&apos;re committed to building a community where collectors can discover, trade, and celebrate their shared passion.
              </p>
            </div>

            {/* Mission Statement */}
            <Card className="border-l-4 border-l-primary bg-primary/5 border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-foreground mb-3">Our Mission</h4>
                <p className="text-muted-foreground">
                  To create the ultimate destination where collectors can find authentic, rare, and exclusive collectibles while building lasting connections within our passionate community.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <feature.icon className={`h-12 w-12 ${feature.color} mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}