"use client";
import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";
import { getSlides } from "@/config/slider";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = ({
  locale,
  langName,
  CTALocale,
}: {
  locale: any;
  langName: string;
  CTALocale: any;
}) => {
  const slides = getSlides(locale);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      lang={langName}
      className="relative h-screen w-full overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
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
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {slides[currentSlide].title1}{" "}
            <LineText>{slides[currentSlide].title2}</LineText>{" "}
            {slides[currentSlide].title3}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl tracking-tight text-white">
            {locale.description}
          </p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
              ? "bg-white w-8"
              : "bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTAButton locale={CTALocale} />
        </div>
      </div>
    </section>
  );
};

// NOTES: how to use line with styling text
// <h1>
// {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
// </h1>

export default Hero;
