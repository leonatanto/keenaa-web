"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ReviewsProps {
  id: string;
  locale?: {
    title: string;
    subtitle: string;
    reviews: Array<{
      name: string;
      role: string;
      content: string;
    }>;
  };
}

export default function Reviews({ id, locale }: ReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((current) => (current + 1) % (locale?.reviews.length || 1));
  };

  const prevReview = () => {
    setActiveIndex((current) => (current - 1 + (locale?.reviews.length || 1)) % (locale?.reviews.length || 1));
  };

  if (!locale) return null;

  return (
    <section id={id} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {locale.title}
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {locale.subtitle}
          </motion.p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Previous Button */}
          <motion.button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg z-10 hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Review Cards */}
          <div className="overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 md:w-20 md:h-20">
                      <Image
                        src="/images.jpg"
                        alt={locale.reviews[activeIndex].name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {locale.reviews[activeIndex].name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                      {locale.reviews[activeIndex].role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed italic">
                  &ldquo;{locale.reviews[activeIndex].content}&rdquo;
                </p>
                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg z-10 hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {locale.reviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                    ? "w-8 bg-primary"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-primary/50"
                  }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 