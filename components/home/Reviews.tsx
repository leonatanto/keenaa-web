"use client";
import { motion } from "framer-motion";
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
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {locale.subtitle}
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Previous Button */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg z-10"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
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
          </button>

          {/* Review Card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src={"/images.jpg"}
                alt={locale.reviews[activeIndex].name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  {locale.reviews[activeIndex].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {locale.reviews[activeIndex].role}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg italic">
              &ldquo;{locale.reviews[activeIndex].content}&rdquo;
            </p>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_: undefined, i: number) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>

          {/* Next Button */}
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg z-10"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
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
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {locale.reviews.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === activeIndex
                  ? "bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-600"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 