"use client";

import { products } from "@/config/products";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

interface Section {
  title: string;
  content: string | string[];
}

export default function ProductDetail() {
  const params = useParams();
  const productId = params?.id as string;
  const lang = params?.lang as string;

  const product = products.find((item) => item.id === productId);
  const [expandedSection, setExpandedSection] = useState<string>("Details");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Product not found</h2>
          <Link
            href={`/${lang}/catalog`}
            className="text-primary hover:underline"
          >
            Return to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const sections: Section[] = [
    {
      title: "Details",
      content: product.description[lang]
    },
    {
      title: "Features",
      content: product.features[lang]
    },
    {
      title: "Specifications",
      content: [
        `Age Range: ${product.ageRange}`,
        `Maximum Weight: ${product.maxWeight}`,
        `Material: ${product.material}`,
        `Certification: ${product.certification}`
      ]
    }
  ];

  const toggleSection = (title: string) => {
    if (expandedSection === title) {
      setExpandedSection("Details");
    } else {
      setExpandedSection(title);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white dark:bg-gray-800 min-h-screen py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <Link href={`/${lang}/catalog`} className="hover:text-primary">
                    Catalog
                  </Link>
                </li>
                <li>•</li>
                <li>{product.category[lang]}</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
              {/* Product Images Section */}
              <div className="w-full">
                {/* Main Image */}
                <motion.div
                  className="h-[600px] relative w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0">
                    <div className="w-full h-full relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-700 group">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedImage}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full"
                        >
                          <Image
                            src={product.images[selectedImage]}
                            alt={`${product.name[lang]} - Image ${selectedImage + 1}`}
                            fill
                            className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>

                {/* Thumbnail Gallery */}
                {product.images.length > 1 && (
                  <div className="flex gap-3 justify-center mt-6">
                    {product.images.map((img: string, index: number) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden 
                          transition-all duration-200 ease-in-out
                          ${selectedImage === index
                            ? 'ring-2 ring-primary ring-offset-2 scale-110'
                            : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 opacity-70 hover:opacity-100'
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Image
                          src={img}
                          alt={`${product.name[lang]} - Thumbnail ${index + 1}`}
                          fill
                          className="object-contain"
                          sizes="64px"
                        />
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <motion.div
                className="lg:h-[600px] flex flex-col w-[500px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Fixed header section */}
                <div className="flex-none w-full">
                  <h1 className="text-4xl font-medium mb-4">{product.name[lang]}</h1>
                  <p className="text-3xl font-light mb-4">Rp {product.price.toLocaleString()}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
                    {product.category[lang]}
                  </p>
                </div>

                {/* Content section */}
                <div className="flex-grow">
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                    {sections.map((section) => (
                      <div
                        key={section.title}
                        className="border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      >
                        <button
                          onClick={() => toggleSection(section.title)}
                          className="w-full py-4 flex justify-between items-center text-left hover:text-primary transition-colors group"
                        >
                          <span className="text-base font-medium">{section.title}</span>
                          <motion.span
                            animate={{ rotate: expandedSection === section.title ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-400 group-hover:text-primary"
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.span>
                        </button>
                        <AnimatePresence mode="wait">
                          {expandedSection === section.title && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-6">
                                {Array.isArray(section.content) ? (
                                  <ul className="space-y-3">
                                    {section.content.map((item, index) => (
                                      <motion.li
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                                      >
                                        <span className="mr-3 text-primary flex-none">•</span>
                                        <span className="flex-1 leading-relaxed">{item}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {section.content}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colors section if available */}
                {product.colors && product.colors.length > 0 && (
                  <div className="flex-none py-6 border-t border-gray-100 dark:border-gray-700">
                    <h3 className="text-sm font-medium mb-4">Available Colors</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.colors.map((color: string) => (
                        <span
                          key={color}
                          className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Fixed footer section */}
                <div className="flex-none pt-6">
                  <Button
                    as="a"
                    href={siteConfig.headerLinks.find(link => link.name === 'shopee')?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    size="lg"
                    className="w-full font-medium text-base py-6"
                    endContent={<ExternalLink className="w-4 h-4 ml-2" />}
                  >
                    Buy on Shopee
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 