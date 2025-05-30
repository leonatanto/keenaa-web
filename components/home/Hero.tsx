"use client";
import { getSlides } from "@/config/slider";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  locale?: {
    title1?: string;
    title2?: string;
    title3?: string;
    description?: string;
    slides?: Array<{
      image: string;
      title: string;
      description: string;
    }>;
  };
  langName: string;
  CTALocale?: any;
}

const Hero = ({ locale, langName, CTALocale }: HeroProps) => {
  const slides = getSlides(locale);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (!locale) return null;

  return (
    <section
      lang={langName}
      className="relative h-screen w-full overflow-hidden"
    >
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

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
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

      {/* CTA Button */}
      {/* TODO action to shop later */}
      {/* <div className="absolute bottom-6 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTAButton locale={CTALocale} />
        </div>
      </div> */}
    </section>
  );
};

// NOTES: how to use line with styling text
// <h1>
// {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
// </h1>

export default Hero;
