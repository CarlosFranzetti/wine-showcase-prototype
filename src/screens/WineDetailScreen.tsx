import { ArrowLeft, Share2, ShoppingCart, Star, Heart, ListPlus, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getWineById } from "@/data/wines";
import { motion } from "framer-motion";

interface WineDetailScreenProps {
  wineId: string;
  onBack: () => void;
}

export function WineDetailScreen({ wineId, onBack }: WineDetailScreenProps) {
  const wine = getWineById(wineId);

  if (!wine) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Wine not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-b from-primary/20 to-background">
        {/* Header Controls */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="bg-white/80 backdrop-blur-sm rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur-sm rounded-full">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur-sm rounded-full relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-[10px] bg-primary">
                3
              </Badge>
            </Button>
          </div>
        </div>

        {/* Wine Bottle */}
        <div className="absolute inset-0 flex items-center justify-center pt-12">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={wine.image}
            alt={wine.name}
            className="h-64 w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 -mt-8 relative z-10">
        {/* Rating & Match */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="bg-card rounded-2xl p-4 shadow-lg flex items-center gap-3">
            <div className="text-center">
              <div className="text-3xl font-bold">{wine.rating}</div>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3 h-3 ${
                      star <= Math.floor(wine.rating)
                        ? "fill-warning text-warning"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {wine.reviewCount.toLocaleString()} ratings
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-4 shadow-lg">
            <div className="text-2xl font-bold text-success">{wine.matchPercentage}%</div>
            <p className="text-xs text-muted-foreground">Match</p>
          </div>

          <div className="bg-success/10 rounded-full px-3 py-1">
            <p className="text-xs font-medium text-success">Great price!</p>
          </div>
        </motion.div>

        {/* Wine Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">{wine.winery}</p>
            {wine.isVerified && (
              <CheckCircle className="w-4 h-4 text-primary fill-primary/20" />
            )}
          </div>
          <h1 className="text-xl font-bold mt-1">{wine.name}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {wine.countryFlag} {wine.region}, {wine.country} · {wine.year}
          </p>

          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            {wine.description}
          </p>

          {/* Price */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold">${wine.price.toFixed(2)}</span>
            <span className="text-lg text-muted-foreground line-through">
              ${wine.originalPrice.toFixed(2)}
            </span>
            <Badge className="bg-discount text-white">-{wine.discount}%</Badge>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 space-y-3"
        >
          <Button className="w-full h-12 bg-success hover:bg-success/90 text-lg font-semibold rounded-xl">
            Buy Now
          </Button>
          
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 gap-2 rounded-xl">
              <Star className="w-4 h-4" />
              Rate
            </Button>
            <Button variant="outline" className="flex-1 gap-2 rounded-xl">
              <Heart className="w-4 h-4" />
              Save
            </Button>
            <Button variant="outline" className="flex-1 gap-2 rounded-xl">
              <ListPlus className="w-4 h-4" />
              Add to list
            </Button>
          </div>
        </motion.div>

        {/* Spacer for bottom nav */}
        <div className="h-8" />
      </div>
    </motion.div>
  );
}
