import { Settings, ChevronRight, Building2, Users, UtensilsCrossed, Map, Crown, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProfileScreenProps {
  onFoodWineClick: () => void;
}

const menuItems = [
  { icon: Building2, label: 'Explore Wineries', color: 'text-primary' },
  { icon: Users, label: 'Friends Feed', color: 'text-blue-500' },
  { icon: UtensilsCrossed, label: 'Food & Wine', color: 'text-orange-500', action: 'foodWine' },
  { icon: Map, label: 'Wine Adventures', color: 'text-green-500' },
  { icon: Crown, label: 'My Premium Benefits', color: 'text-yellow-500' },
  { icon: HelpCircle, label: 'Help & Support', color: 'text-muted-foreground' },
];

export function ProfileScreen({ onFoodWineClick }: ProfileScreenProps) {
  const handleMenuClick = (action?: string) => {
    if (action === 'foodWine') {
      onFoodWineClick();
    }
  };

  return (
    <div className="pb-4">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm px-4 py-3 border-b border-border/50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Profile</h1>
          <button>
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="px-4 mt-4">
        {/* User Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-lg">John Doe</h2>
                  <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                    <Crown className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Wine enthusiast since 2020</p>
              </div>
            </div>

            <div className="flex gap-8 mt-4 pt-4 border-t">
              <div className="text-center">
                <p className="text-xl font-bold">247</p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">182</p>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">89</p>
                <p className="text-xs text-muted-foreground">Reviews</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Menu Items */}
        <div className="mt-6 space-y-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card
                className="p-4 cursor-pointer hover:bg-secondary/50 transition-colors"
                onClick={() => handleMenuClick(item.action)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-secondary flex items-center justify-center ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="flex-1 font-medium">{item.label}</span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
