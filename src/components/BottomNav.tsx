import { Home, Store, Camera, Wine, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'shop', label: 'Shop', icon: Store },
  { id: 'scan', label: 'Scan', icon: Camera },
  { id: 'my-wines', label: 'My Wines', icon: Wine },
  { id: 'more', label: 'More', icon: MoreHorizontal },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-primary/20 safe-area-inset-bottom">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isScan = tab.id === 'scan';
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative flex flex-col items-center justify-center transition-all duration-200",
                isScan ? "w-16 -mt-4" : "flex-1 h-full",
              )}
            >
              {isScan ? (
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg"
                >
                  <tab.icon className="w-6 h-6 text-primary" />
                </motion.div>
              ) : (
                <>
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <tab.icon 
                      className={cn(
                        "w-5 h-5 transition-colors",
                        isActive ? "text-white" : "text-white/60"
                      )} 
                    />
                    <span 
                      className={cn(
                        "text-[10px] font-medium transition-colors",
                        isActive ? "text-white" : "text-white/60"
                      )}
                    >
                      {tab.label}
                    </span>
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
