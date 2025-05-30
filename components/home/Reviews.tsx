"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Mother of 2",
    image: "/images.jpg",
    content: "This carrier has truly changed my daily routine. The back support is amazing, and my baby feels so happy and secure being close to me.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "First-time Dad",
    image: "/images.jpg",
    content: "I was new to babywearing, but this carrier made it easy. The fit is perfect for both me and my wife, and our baby loves it too.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Mom & Pediatrician",
    image: "/images.jpg",
    content: "As a pediatrician, I value how this carrier supports healthy hip development. I confidently recommend it to other parents.",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Active Parent",
    image: "/images.jpg",
    content: "We love exploring outdoors with our baby. The thoughtful features like storage pockets and sun shade make every adventure easier.",
    rating: 5
  }
];

interface ReviewsProps {
  id: string;
  locale?: any;
}

export default function Reviews({ id, locale }: ReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

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
            What Parents Say
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real experiences from parents who love our carriers.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex w-full"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{review.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {review.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      &ldquo;{review.content}&rdquo;
                    </p>
                    <div className="mt-4 flex">
                      {[...Array(review.rating)].map((_, i) => (
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
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Previous review"
          >
            <svg
              className="w-6 h-6"
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
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Next review"
          >
            <svg
              className="w-6 h-6"
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

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index
                  ? "bg-primary w-4"
                  : "bg-gray-300 dark:bg-gray-700"
                  }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 