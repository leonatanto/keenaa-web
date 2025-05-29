"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "Ergonomic Design",
    description: "Scientifically designed to support proper hip and spine development for your baby while ensuring parent comfort.",
    icon: "/icons/ergonomic.svg"
  },
  {
    title: "Multiple Positions",
    description: "Adaptable carrying positions to suit your baby's age and preferences, from newborn to toddler.",
    icon: "/icons/positions.svg"
  },
  {
    title: "Premium Materials",
    description: "Made with high-quality, breathable fabrics that are gentle on baby's skin and durable for daily use.",
    icon: "/icons/materials.svg"
  },
  {
    title: "Safety First",
    description: "Rigorously tested to meet and exceed all safety standards, giving you peace of mind.",
    icon: "/icons/safety.svg"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Our Carriers?
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Designed with both parent and baby in mind, our carriers provide the perfect blend of comfort, safety, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 