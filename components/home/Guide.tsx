"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface GuideProps {
  locale?: {
    title: string;
    subtitle: string;
    viewGuide: string;
    steps: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
}

const Guide = ({ locale }: GuideProps) => {
  if (!locale) return null;

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
            {locale.title}
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {locale.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locale.steps.map((step, index) => (
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
        {/* TODO View Complete Safety Guide
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
            {locale.viewGuide}
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default Guide; 