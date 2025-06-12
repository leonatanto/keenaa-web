"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const timerRef = useRef<NodeJS.Timeout>();

  const startSlideTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, [slides.length]);

  useEffect(() => {
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    startSlideTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      clearTimeout(timer);
    };
  }, [startSlideTimer]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    startSlideTimer(); // Reset timer when manually changing slides
  };

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
        <motion.div
          initial={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 1 }}
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              {slides[0].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 1 }}
              className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl tracking-tight text-white/90"
            >
              {slides[0].description}
            </motion.p>
          </div>
        </motion.div>
      </>
    );
  }

  // Animated content after hydration
  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && <LoadingOverlay />}
      </AnimatePresence>

      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={`Hero Slide ${currentSlide + 1}`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence initial={false} mode="wait">
          <div key={`content-${currentSlide}`} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl tracking-tight text-white/90"
              >
                {slides[currentSlide].description}
              </motion.p>
            </div>
          </div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
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