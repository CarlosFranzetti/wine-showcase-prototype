import { Wine } from "@/data/wines";
import { Star, Bookmark, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface WineCardProps {
  wine: Wine;
  variant?: "horizontal" | "vertical";
  onClick?: () => void;
}

export function WineCard({ wine, variant = "vertical", onClick }: WineCardProps) {
  if (variant === "horizontal") {
    return (
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="flex-shrink-0 w-36 cursor-pointer"
      >
        <div className="relative bg-card rounded-xl p-3 shadow-sm border border-border/50">
          <Badge className="absolute top-2 left-2 bg-discount text-white text-[10px] px-1.5 py-0.5">
            -{wine.discount}%
          </Badge>
          <div className="h-28 flex items-center justify-center mb-2">
            <img
              src={wine.image}
              alt={wine.name}
              className="h-full w-auto object-contain"
            />
          </div>
          <p className="text-[10px] text-muted-foreground truncate">{wine.winery}</p>
          <p className="text-xs font-medium truncate leading-tight">{wine.name}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-3 h-3 fill-warning text-warning" />
            <span className="text-xs font-medium">{wine.rating}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-card rounded-xl shadow-sm border border-border/50 p-4 cursor-pointer"
    >
      <div className="flex gap-4">
        <div className="relative w-20 flex-shrink-0">
          <Badge className="absolute -top-1 -left-1 bg-discount text-white text-[10px] px-1.5 py-0.5 z-10">
            -{wine.discount}%
          </Badge>
          <div className="h-32 flex items-center justify-center bg-secondary/30 rounded-lg">
            <img
              src={wine.image}
              alt={wine.name}
              className="h-28 w-auto object-contain"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground">{wine.winery}</p>
          <h3 className="font-semibold text-sm leading-tight mt-0.5 line-clamp-2">
            {wine.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            {wine.countryFlag} {wine.region}, {wine.country}
          </p>

          <div className="flex items-center gap-1 mt-2">
            <Star className="w-3.5 h-3.5 fill-warning text-warning" />
            <span className="text-sm font-semibold">{wine.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({wine.reviewCount.toLocaleString()})
            </span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-bold">${wine.price.toFixed(2)}</span>
            <span className="text-sm text-muted-foreground line-through">
              ${wine.originalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Bookmark className="w-4 h-4" />
          </Button>
          <Button size="icon" className="h-8 w-8 bg-success hover:bg-success/90">
            <ShoppingCart className="w-4 h-4 text-white" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
