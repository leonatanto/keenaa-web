"use client";
import { catalogItems } from "@/config/catalog";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CatalogPreview = () => {
  const params = useParams();
  const lang = (params?.lang as string) || "en";
  const [translations, setTranslations] = useState({
    title: "New Arrivals",
    viewAll: "View All"
  });

  // Take first 6 items for preview
  const previewItems = catalogItems.slice(0, 6);

  useEffect(() => {
    const loadTranslations = async () => {
      const { getDictionary } = await import("@/lib/i18n");
      const dict = await getDictionary(lang);
      setTranslations(dict.CatalogPreview || {
        title: "New Arrivals",
        viewAll: "View All"
      });
    };
    loadTranslations();
  }, [lang]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          {translations.title}
        </motion.h2>
        <Link href={`/${lang}/catalog`}>
          <Button
            variant="light"
            className="font-medium text-base group"
            endContent={
              <motion.span
                className="ml-2 group-hover:translate-x-1 transition-transform"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            }
          >
            {translations.viewAll}
          </Button>
        </Link>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
      >
        {previewItems.map((product) => (
          <motion.div
            key={product.id}
            variants={itemAnimation}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={`/${lang}/catalog/${product.id}`}
              className="block group"
            >
              <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <motion.div
                className="mt-6 flex justify-between items-start"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  {product.category && (
                    <p className="mt-2 text-sm text-gray-500">{product.category}</p>
                  )}
                </div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  ${product.price}
                </p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CatalogPreview; 