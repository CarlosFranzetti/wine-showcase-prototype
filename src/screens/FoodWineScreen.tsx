import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FoodWineScreenProps {
  onBack: () => void;
}

export function FoodWineScreen({ onBack }: FoodWineScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-orange-200"
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="bg-white/80 backdrop-blur-sm rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-8xl mb-6"
        >
          🍝🍷
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-amber-900"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Food & Wine
        </motion.h1>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-light text-amber-800 mt-1"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Pairing
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-amber-700 mt-4 max-w-sm leading-relaxed"
        >
          Discover the perfect wine to complement any dish. From light salads to hearty steaks, 
          find your ideal pairing in seconds.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            className="mt-8 bg-amber-800 hover:bg-amber-900 text-white px-8 py-6 rounded-full text-lg font-semibold"
          >
            Get started
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
