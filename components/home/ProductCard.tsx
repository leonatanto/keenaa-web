"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/catalog/${product.id}`}
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
  );
} 