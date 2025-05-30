"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BenefitCardProps {
  benefit: {
    title: string;
    description: string;
    icon: string;
  };
}

export default function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <motion.div
        className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 relative z-10"
        whileHover={{ y: -5 }}
      >
        <div className="w-32 h-32 mx-auto mb-6 relative">
          <motion.div
            className="w-full h-full rounded-full bg-primary/10 dark:bg-primary/5 absolute"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <Image
            src={benefit.icon}
            alt={benefit.title}
            fill
            className="object-contain p-4 relative z-10"
          />
        </div>
        <motion.h3
          className="text-xl font-medium mb-3 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {benefit.title}
        </motion.h3>
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {benefit.description}
        </motion.p>
      </motion.div>

      {/* Background gradient effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-2xl opacity-0 group-hover:opacity-15 blur transition duration-500" />
    </motion.div>
  );
} 