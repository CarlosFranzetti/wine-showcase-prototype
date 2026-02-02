import { ShoppingCart, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const wineTypes = ['Red', 'White', 'Rosé', 'Sparkling', 'Natural'];
const emojis = ['😔', '😐', '😊', '😄'];

export function MyWinesScreen() {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);

  const handleEmojiSelect = (emojiIndex: number) => {
    setSelectedEmoji(emojiIndex);
    setTimeout(() => {
      setSelectedEmoji(null);
      if (currentTypeIndex < wineTypes.length - 1) {
        setCurrentTypeIndex(prev => prev + 1);
      }
    }, 500);
  };

  return (
    <div className="pb-4">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm px-4 py-3 border-b border-border/50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">My Wines</h1>
          
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
      </header>

      {/* Empty State with Questionnaire */}
      <div className="px-4 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🍷</span>
            </div>
            <h2 className="text-lg font-bold">Tell us your preferences</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Help us recommend wines you'll love by rating your preferences
            </p>

            {/* Progress */}
            <div className="flex gap-1 justify-center mt-4">
              {wineTypes.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 w-8 rounded-full transition-colors ${
                    index <= currentTypeIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            {/* Question */}
            <motion.div
              key={currentTypeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-6"
            >
              <p className="text-lg font-semibold">
                Do you enjoy {wineTypes[currentTypeIndex]} wine?
              </p>
              
              <div className="flex justify-center gap-4 mt-4">
                {emojis.map((emoji, index) => (
                  <motion.button
                    key={index}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleEmojiSelect(index)}
                    className={`text-4xl p-2 rounded-full transition-all ${
                      selectedEmoji === index
                        ? 'bg-primary/20 scale-110'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    {emoji}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </Card>
        </motion.div>

        {/* Future wines will appear here */}
        <div className="mt-6 text-center text-muted-foreground">
          <p className="text-sm">Your saved wines will appear here</p>
        </div>
      </div>
    </div>
  );
}
