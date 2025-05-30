"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoadingOverlay from "../LoadingOverlay";

interface HeroClientProps {
  slides: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}

export default function HeroClient({ slides }: HeroClientProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideTimer);
    };
  }, [slides.length]);

  // Initial static render
  if (!isLoaded) {
    return (
      <>
        <div className="absolute inset-0">
          <Image
            src={slides[0].image}
            alt={slides[0].title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {slides[0].title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl tracking-tight text-white/90">
              {slides[0].description}
            </p>
          </div>
        </div>
      </>
    );
  }

  // Animated content after hydration
  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && <LoadingOverlay />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={slide.image}
                alt={`Hero Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl tracking-tight text-white/90"
          >
            {slides[currentSlide].description}
          </motion.p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${currentSlide === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
} 