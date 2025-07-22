import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Clock, Instagram, Twitter, Facebook, Phone, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "hello@chasethepop.com",
    color: "text-blue-500"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+1 (555) 123-4567",
    color: "text-green-500"
  },
  {
    icon: MapPin,
    title: "Visit Our Store",
    description: "Come see our collection",
    contact: "123 Collector's Lane, Pop City, PC 12345",
    color: "text-red-500"
  },
  {
    icon: Clock,
    title: "Store Hours",
    description: "We're open",
    contact: "Mon-Sat: 10AM-8PM, Sunday: 12PM-6PM",
    color: "text-purple-500"
  }
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
  { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-blue-500" },
  { icon: Facebook, label: "Facebook", href: "#", color: "hover:text-blue-600" }
];

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%), linear-gradient(45deg, transparent 75%, currentColor 75%), linear-gradient(-45deg, transparent 75%, currentColor 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
      </div>

      <div className="container relative px-4 md:px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Let&apos;s
            <span className="text-primary"> Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
            Have questions about our collection or looking for something specific? We&apos;d love to help you find your next treasure!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-card">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Send us a message</h3>
                <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="John" className="border-2 focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Doe" className="border-2 focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="john@example.com" className="border-2 focus:border-primary transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input placeholder="Looking for a specific collectible" className="border-2 focus:border-primary transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about what you're looking for or any questions you have..."
                    className="border-2 focus:border-primary transition-colors min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card border-0 shadow-lg">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <method.icon className={`h-10 w-10 ${method.color} mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{method.title}</h4>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      <p className="text-sm font-medium text-foreground">{method.contact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <h4 className="text-xl font-bold text-foreground">Visit Our Store</h4>
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-xl bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <h4 className="text-xl font-bold text-foreground">Follow Our Journey</h4>
                <p className="text-muted-foreground">Stay updated with our latest finds and exclusive drops</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="outline" size="lg" className={`transition-all duration-300 transform hover:scale-110 ${social.color}`}>
                      <social.icon className="h-5 w-5 mr-2" />
                      {social.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}