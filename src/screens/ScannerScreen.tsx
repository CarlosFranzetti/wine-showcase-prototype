import { X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ScannerScreenProps {
  onClose: () => void;
}

export function ScannerScreen({ onClose }: ScannerScreenProps) {
  const [mode, setMode] = useState<'label' | 'list'>('label');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black"
    >
      {/* Camera View Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-72 h-72">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-white rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-white rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-white rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-white rounded-br-xl" />
          
          {/* Scanning line animation */}
          <motion.div
            initial={{ top: 0 }}
            animate={{ top: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>
      </div>

      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-white hover:bg-white/20"
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Mode Toggle */}
        <div className="flex bg-white/20 rounded-full p-1">
          <button
            onClick={() => setMode('label')}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-full transition-colors",
              mode === 'label' ? 'bg-white text-black' : 'text-white'
            )}
          >
            Wine label
          </button>
          <button
            onClick={() => setMode('list')}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-full transition-colors",
              mode === 'list' ? 'bg-white text-black' : 'text-white'
            )}
          >
            Wine list
          </button>
        </div>

        <div className="w-10" /> {/* Spacer for alignment */}
      </div>

      {/* Bottom Sheet */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 pb-10"
      >
        <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-4" />
        
        <p className="text-center text-lg font-semibold">
          Take a photo of a {mode === 'label' ? 'wine label' : 'wine list'}
        </p>
        <p className="text-center text-sm text-muted-foreground mt-1">
          {mode === 'label' 
            ? 'Position the wine bottle label within the frame'
            : 'Capture the wine list to see ratings and prices'
          }
        </p>

        <div className="flex items-center justify-center gap-8 mt-6">
          {/* Gallery button */}
          <button className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-muted-foreground" />
          </button>

          {/* Capture button */}
          <button className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary" />
          </button>

          {/* Spacer for alignment */}
          <div className="w-12" />
        </div>
      </motion.div>
    </motion.div>
  );
}
