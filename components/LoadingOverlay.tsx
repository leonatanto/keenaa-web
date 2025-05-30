"use client";

import { motion } from "framer-motion";
import { LoadingDots } from "./icons";
import LoadingMessage from "./LoadingMessage";

export default function LoadingOverlay() {
  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="text-center px-4">
        <div className="scale-150 sm:scale-150">
          <LoadingDots />
        </div>
        <LoadingMessage />
      </div>
    </motion.div>
  );
} 