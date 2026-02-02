import { Search, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { categories, regions, getWinesByCategory, WineCategory } from "@/data/wines";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoriesScreenProps {
  onBack: () => void;
  onCategorySelect: (category: WineCategory) => void;
}

const categoryIcons: Record<WineCategory, string> = {
  red: '🍷',
  white: '🥂',
  rose: '🌸',
  sparkling: '✨',
  natural: '🌿',
};

export function CategoriesScreen({ onBack, onCategorySelect }: CategoriesScreenProps) {
  return (
    <div className="pb-4">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm px-4 py-3 border-b border-border/50">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">Categories</h1>
        </div>
        
        <div className="mt-3 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search categories"
            className="pl-10 bg-secondary border-0 rounded-full h-10"
          />
        </div>
      </header>

      {/* Shop by Type */}
      <section className="px-4 mt-4">
        <h2 className="text-lg font-bold mb-3">Shop wines by type</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onCategorySelect(category.id as WineCategory)}
              className={cn(
                "relative overflow-hidden rounded-2xl p-4 h-28 text-left",
                "flex flex-col justify-between"
              )}
              style={{ backgroundColor: category.color }}
            >
              <span className="text-3xl">{categoryIcons[category.id as WineCategory]}</span>
              <div>
                <p className="font-bold text-white text-shadow">{category.name}</p>
                <p className="text-xs text-white/80">
                  {getWinesByCategory(category.id as WineCategory).length} wines
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Best Offers Banner */}
      <section className="px-4 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-primary rounded-2xl p-6 text-white"
        >
          <h3 className="font-bold text-lg">Shop our best offers</h3>
          <p className="text-sm opacity-90 mt-1">Up to 60% off premium wines</p>
          <Button className="mt-3 bg-white text-primary hover:bg-white/90">
            Explore Deals
          </Button>
        </motion.div>
      </section>

      {/* Shop by Style/Region */}
      <section className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="text-lg font-bold">Shop wines by style</h2>
          <button className="text-sm text-primary font-medium">See all</button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto px-4 hide-scrollbar">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="flex-shrink-0 w-36"
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border/50">
                <div className="h-20 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl">{region.flag}</span>
                </div>
                <div className="p-3">
                  <p className="font-semibold text-sm truncate">{region.name}</p>
                  <p className="text-xs text-muted-foreground">{region.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
