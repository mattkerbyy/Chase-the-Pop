import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import {
  PhilippinePeso,
  Truck,
  MapPin,
  Clock,
  Camera,
  Package,
} from "lucide-react";
import ImageWithSkeleton from "../../components/ui/ImageWithSkeleton";

function ShippingInfo() {
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
            <Truck className="w-4 h-4 mr-2" />
            Shipping
          </Badge>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          {/* Page title */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Shipping Information
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our delivery options, schedules,
              and policies.
            </p>
          </div>

          {/* Payment methods */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <PhilippinePeso className="w-6 h-6 text-primary" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We accept the following payment methods on a{" "}
                <span className="font-semibold text-foreground">
                  payment-first basis
                </span>
                :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-primary">GCash</h4>
                    <div className="overflow-hidden rounded-md w-6 h-6">
                      <ImageWithSkeleton
                        src="/images/shippingInfoPage/gcash-logo.png"
                        alt="GCash Logo"
                        width={24}
                        height={24}
                        className="object-contain image-render-crisp"
                        skeletonClassName="bg-muted-foreground/20"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fast and secure mobile payment through GCash app
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-primary">
                      Bank Transfer
                    </h4>
                    <div className="overflow-hidden w-6 h-6">
                      <ImageWithSkeleton
                        src="/images/shippingInfoPage/bank-transfer-logo.png"
                        alt="Bank Transfer Logo"
                        width={24}
                        height={24}
                        className="object-contain image-render-crisp"
                        skeletonClassName="bg-muted-foreground/20"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Direct bank-to-bank transfer for your convenience
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery options */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Package className="w-6 h-6 text-primary" />
                Delivery Options
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* LBC shipping */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    LBC Courier (Provincial Shipping)
                  </h3>
                  <div className="overflow-hidden rounded-md w-6 h-6">
                    <ImageWithSkeleton
                      src="/images/shippingInfoPage/lbc-logo.png"
                      alt="LBC Logo"
                      width={24}
                      height={24}
                      className="object-contain image-render-crisp"
                      skeletonClassName="bg-muted-foreground/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted/30 p-5 rounded-lg border border-border/50">
                    <h4 className="font-semibold text-foreground mb-3">
                      Branch Pickup (COP)
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Cash-on-Pick-Up system
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Collect at designated LBC branch
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Pay only shipping fee upon pickup
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-5 rounded-lg border border-border/50">
                    <h4 className="font-semibold text-foreground mb-3">
                      Door-to-Door (COD)
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        Cash-on-Delivery system
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        Delivered to your doorstep
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        Pay only shipping fee upon delivery
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Lalamove */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Lalamove (Local Delivery)
                  </h3>
                  <div className="overflow-hidden rounded-md w-6 h-6">
                    <ImageWithSkeleton
                      src="/images/shippingInfoPage/lalamove-logo.png"
                      alt="Lalamove Logo"
                      width={24}
                      height={24}
                      className="object-contain image-render-crisp"
                      skeletonClassName="bg-muted-foreground/20"
                    />
                  </div>
                </div>

                <div className="bg-accent/5 p-5 rounded-lg border border-accent/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-accent mb-2">
                        Same-Day Delivery
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Available for nearby customers with booking required
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent mb-2">
                        Quick & Convenient
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Available once payment is confirmed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping schedule */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Clock className="w-6 h-6 text-primary" />
                Shipping Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">
                    LBC Shipments
                  </h4>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-foreground">
                        Regular Schedule:
                      </span>{" "}
                      Every weekend
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">
                        Early Shipping:
                      </span>{" "}
                      Weekday shipping available if our schedule permits
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">
                    Lalamove Delivery
                  </h4>
                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">
                        Same-Day:
                      </span>{" "}
                      Available once payment is confirmed
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important notes */}
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Camera className="w-6 h-6 text-primary" />
                Our Commitment to You
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary mb-3">
                  Photo Documentation
                </h4>
                <p className="text-muted-foreground mb-4">
                  For your peace of mind and assurance, we provide comprehensive
                  photo documentation of your order:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Photos of items once carefully packed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Photos after shipping/handover to courier
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Complete transparency throughout the process
                  </li>
                </ul>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg border border-accent/10">
                <h4 className="font-semibold text-accent mb-3">
                  Shipping Fees
                </h4>
                <p className="text-muted-foreground">
                  All shipping fees are covered by the buyer. We&apos;ll provide
                  accurate shipping cost calculations before processing your
                  order.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ShippingInfo;
