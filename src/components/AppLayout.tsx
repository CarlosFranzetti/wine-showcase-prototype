import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BottomNav } from "./BottomNav";

interface AppLayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const pageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  in: {
    x: 0,
    opacity: 1,
  },
  out: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const pageTransition = {
  type: "tween" as const,
  ease: "easeInOut" as const,
  duration: 0.25,
};

export function AppLayout({ children, activeTab, onTabChange }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background pb-20">
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={activeTab}
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
          custom={1}
          transition={pageTransition}
          className="min-h-screen"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
