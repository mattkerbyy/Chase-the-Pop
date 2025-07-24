"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Mail,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Facebook,
  Send,
  MessageCircleMore,
} from "lucide-react";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "chasethepopz@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: MessageCircleMore,
    title: "Message Us on Facebook",
    description: "Speak with our team",
    contact: "facebook.com/ChasethePopFB",
    color: "text-green-500",
  },
  {
    icon: MapPin,
    title: "Visit Our Store",
    description: "Come see our collection",
    contact: "COMING SOON",
    color: "text-red-500",
  },
  {
    icon: Clock,
    title: "Store Hours",
    description: "We're open",
    contact: "Mon-Sat: 8AM-8PM, Sunday: CLOSED",
    color: "text-purple-500",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/ChasethePopFB",
    color: "hover:text-blue-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "",
    color: "hover:text-pink-500",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "",
    color: "hover:text-blue-500",
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      toast.error("Please enter your first name");
      return false;
    }
    if (!formData.lastName.trim()) {
      toast.error("Please enter your last name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error("Please enter a subject");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }
    return true;
  };

  const sendEmailJS = async (): Promise<void> => {
    try {
      // Import EmailJS -
      const emailjs = await import("@emailjs/browser");

      // EmailJS configurations
      const serviceId = "service_contact";
      const templateId = "template_contact";
      const publicKey = "h56tHY2SnKBJ7SpZA";

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        to_email: "chasethepopz@gmail.com",
        subject: formData.subject,
        message: formData.message,
        to_name: "Chase the Pop Team",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success(
        "Message sent successfully! We'll get back to you within 24 hours."
      );

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        "Failed to send message. Please try again or contact us directly at chasethepopz@gmail.com"
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await sendEmailJS();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-primary/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
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
            Have questions about our collection or looking for something
            specific? We&apos;d love to help you find your next treasure!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-card">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  Send us a message
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name *
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="border-2 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name *
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="border-2 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="border-2 focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Looking for a specific collectible"
                    className="border-2 focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about what you're looking for or any questions you have..."
                    className="border-2 focus:border-primary transition-colors min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  formNoValidate
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card border-0 shadow-lg"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <method.icon
                        className={`h-10 w-10 ${method.color} mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {method.contact}
                      </p>
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
                    <h4 className="text-xl font-bold text-foreground">
                      Visit Our Store
                    </h4>
                    <p className="text-muted-foreground">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-xl bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <h4 className="text-xl font-bold text-foreground">
                  Follow Our Journey
                </h4>
                <p className="text-muted-foreground">
                  Stay updated with our latest finds and exclusive drops
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => {
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        asChild
                        onClick={(e) => {
                          if (social.href) {
                            window.open(social.href, "_blank", "noopener");
                          } else {
                            e.preventDefault();
                          }
                        }}
                        className={`cursor-default transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Follow us on ${social.label}`}
                        >
                          <social.icon className="h-5 w-5 mr-2" />
                          {social.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}