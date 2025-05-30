"use client";

import { motion } from "framer-motion";

export default function LoadingOverlay() {
  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="text-center">
        {/* Simple loading animation */}
        <motion.div
          className="w-16 h-16 mb-8 relative mx-auto"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" />
        </motion.div>
      </div>
    </motion.div>
  );
} 