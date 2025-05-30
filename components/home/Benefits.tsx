"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "Ergonomic Support",
    description: "Thoughtfully engineered to nurture healthy hip and spine development, while keeping you comfortable on every journey.",
    icon: "/desc1.webp"
  },
  {
    title: "Versatile Carrying Options",
    description: "Easily switch between multiple positions to match your baby’s needs—from cozy newborn snuggles to curious toddler adventures.",
    icon: "/desc2.webp"
  },
  {
    title: "*Premium, Gentle Materials",
    description: "Made from soft, breathable fabrics that are kind to your baby’s skin and built to last through every moment.",
    icon: "/desc3.webp"
  },
  {
    title: "Safety You Can Trust",
    description: "Tested and certified for peace of mind, so you can focus on making memories together.",
    icon: "/desc4.jpg"
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
            Discover the perfect balance of comfort, safety, and style—crafted for both you and your little one.
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
              <div className="w-32 h-32 mx-auto mb-4 relative">
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