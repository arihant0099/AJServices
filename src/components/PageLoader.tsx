import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingTexts = [
  "Loading creativity...",
  "Building ideas...",
  "Crafting code...",
  "Almost there...",
  "Unleashing innovation...",
];

const PageLoader: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);

  // change text every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900/95 z-[9999]"
    >
      {/* Rotating gradient ring */}
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-purple-400 blur-sm" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-l-pink-400 blur-md opacity-70" />
      </motion.div>

      {/* Smooth changing loading text */}
      <div className="mt-6 h-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={textIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            {loadingTexts[textIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PageLoader;
