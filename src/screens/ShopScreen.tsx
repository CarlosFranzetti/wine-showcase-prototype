import { ShoppingCart, Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WineCard } from "@/components/WineCard";
import { wines } from "@/data/wines";
import { motion } from "framer-motion";

interface ShopScreenProps {
  onWineClick: (wineId: string) => void;
  onCategoriesClick: () => void;
}

export function ShopScreen({ onWineClick, onCategoriesClick }: ShopScreenProps) {
  return (
    <div className="pb-4">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm px-4 py-3 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Shop</h1>
            <p className="text-xs text-muted-foreground">{wines.length} wines available</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button>
              <Search className="w-5 h-5" />
            </button>
            <button className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-1.5 -right-1.5 h-4 w-4 flex items-center justify-center p-0 text-[10px] bg-primary">
                3
              </Badge>
            </button>
          </div>
        </div>
      </header>

      {/* Categories Button */}
      <div className="px-4 mt-3">
        <Button
          variant="outline"
          className="w-full justify-start gap-2 h-12 rounded-xl"
          onClick={onCategoriesClick}
        >
          <span className="text-lg">🍷</span>
          <span className="font-medium">Browse by Category</span>
        </Button>
      </div>

      {/* Sort & Filter */}
      <div className="flex gap-2 px-4 mt-3">
        <Button variant="outline" size="sm" className="flex-1 gap-2 rounded-full">
          <ArrowUpDown className="w-4 h-4" />
          Sort
        </Button>
        <Button variant="outline" size="sm" className="flex-1 gap-2 rounded-full">
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </Button>
      </div>

      {/* Wine List */}
      <div className="px-4 mt-4 space-y-3">
        {wines.map((wine, index) => (
          <motion.div
            key={wine.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <WineCard
              wine={wine}
              variant="vertical"
              onClick={() => onWineClick(wine.id)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
