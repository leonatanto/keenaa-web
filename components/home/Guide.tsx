"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "1. Pick Your Favorite Color",
    description: "Select the color that matches your style and mood.",
    image: "/desc1.webp"
  },
  {
    title: "2. Adjust for a Custom Fit",
    description: "Easily fine-tune the straps and buckles to ensure both you and your baby feel secure and comfortable.",
    image: "/desc2.webp"
  },
  {
    title: "3. Position with Care",
    description: "Follow our simple guidelines to keep your baby safe, supported, and close to your heart.",
    image: "/desc3.webp"
  },
  {
    title: "4. Cherish Every Moment",
    description: "Stay hands-free and connected—enjoy every adventure together, big or small.",
    image: "/desc4.jpg"
  }
];

const Guide = () => {
  return (
    <section id="Guide" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How to Use Our Carriers
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enjoy safe, comfortable babywearing in just a few easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-square relative mb-6 rounded-lg overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/safety-guide"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            View Complete Safety Guide
            <svg
              className="ml-2 w-4 h-4"
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
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Guide; 