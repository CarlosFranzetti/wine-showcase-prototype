import { ShoppingCart, Bell, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { WineCard } from "@/components/WineCard";
import { getBestOffers } from "@/data/wines";
import { motion } from "framer-motion";

interface HomeScreenProps {
  onWineClick: (wineId: string) => void;
}

export function HomeScreen({ onWineClick }: HomeScreenProps) {
  const bestOffers = getBestOffers(6);

  return (
    <div className="pb-4">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm px-4 py-3 border-b border-border/50">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1.5 bg-secondary rounded-full px-3 py-1.5">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">Ship to: New York</span>
          </button>
          
          <div className="flex items-center gap-3">
            <button className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-1.5 -right-1.5 h-4 w-4 flex items-center justify-center p-0 text-[10px] bg-primary">
                3
              </Badge>
            </button>
            <button className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-destructive rounded-full" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mt-3 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search any wine"
            className="pl-10 bg-secondary border-0 rounded-full h-10"
          />
        </div>
      </header>

      {/* Promo Banner */}
      <div className="px-4 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 text-white"
        >
          <div className="relative z-10">
            <p className="text-xs font-medium opacity-90">Limited Time Offer</p>
            <h2 className="text-xl font-bold mt-1">Up to 60% Off</h2>
            <p className="text-sm opacity-90 mt-1">Premium wine collection</p>
            <button className="mt-3 bg-white text-primary text-sm font-semibold px-4 py-2 rounded-full">
              Shop Now
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-32 opacity-20">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle cx="80" cy="50" r="60" fill="white" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Best Offers */}
      <section className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="text-lg font-bold">Best Offers</h2>
          <button className="text-sm text-primary font-medium">See all</button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto px-4 hide-scrollbar snap-x-mandatory">
          {bestOffers.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="snap-start"
            >
              <WineCard
                wine={wine}
                variant="horizontal"
                onClick={() => onWineClick(wine.id)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Wines */}
      <section className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="text-lg font-bold">Featured Wines</h2>
          <button className="text-sm text-primary font-medium">See all</button>
        </div>
        
        <div className="px-4 space-y-3">
          {bestOffers.slice(0, 3).map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <WineCard
                wine={wine}
                variant="vertical"
                onClick={() => onWineClick(wine.id)}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
