import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import { Heart, Eye, ShoppingCart, TrendingUp } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Batman Dark Knight Funko Pop",
    category: "Funko Pop",
    price: "$15.99",
    originalPrice: "$19.99",
    rarity: "Common",
    image: "/images/image-placeholder.png",
    isNew: false,
    isTrending: true,
  },
  {
    id: 2,
    name: "Marvel Spider-Man Exclusive",
    category: "Funko Pop",
    price: "$89.99",
    originalPrice: null,
    rarity: "Chase",
    image: "/images/image-placeholder.png",
    isNew: true,
    isTrending: false,
  },
  {
    id: 3,
    name: "Popmart Skullpanda Series",
    category: "Popmart",
    price: "$12.99",
    originalPrice: "$15.99",
    rarity: "Secret",
    image: "/images/image-placeholder.png",
    isNew: false,
    isTrending: true,
  },
  {
    id: 4,
    name: "Disney Princess Collection",
    category: "Funko Pop",
    price: "$45.99",
    originalPrice: null,
    rarity: "Limited",
    image: "/images/image-placeholder.png",
    isNew: true,
    isTrending: false,
  },
  {
    id: 5,
    name: "Molly Designer Toy",
    category: "Popmart",
    price: "$25.99",
    originalPrice: "$32.99",
    rarity: "Rare",
    image: "/images/image-placeholder.png",
    isNew: false,
    isTrending: true,
  },
  {
    id: 6,
    name: "Anime Convention Exclusive",
    category: "Funko Pop",
    price: "$199.99",
    originalPrice: null,
    rarity: "Grail",
    image: "/images/image-placeholder.png",
    isNew: true,
    isTrending: true,
  },
];

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "Common":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    case "Rare":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Limited":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "Chase":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    case "Secret":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Grail":
      return "bg-primary text-primary-foreground";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  }
};

export function FeaturedProducts() {
  return (
    <section
      id="products"
      className="py-24 bg-background relative overflow-hidden"
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

      <div className="container relative px-4 md:px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Featured Collection
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Discover Your Next
            <span className="block text-primary">Treasure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
            Handpicked selection of the most sought-after collectibles from rare
            finds to exclusive drops
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-card"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-green-500 text-white shadow-lg">
                      NEW
                    </Badge>
                  )}
                  {product.isTrending && (
                    <Badge className="bg-orange-500 text-white shadow-lg flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      HOT
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-10 h-10 rounded-full p-0 shadow-lg"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-10 h-10 rounded-full p-0 shadow-lg"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg leading-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-secondary text-secondary-foreground"
                    >
                      {product.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Badge
                      className={`text-xs ${getRarityColor(product.rarity)}`}
                    >
                      {product.rarity}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 text-base border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}