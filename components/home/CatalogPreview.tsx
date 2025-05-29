"use client";
import { catalogItems } from "@/config/catalog";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const CatalogPreview = () => {
  // Take first 6 items for preview
  const previewItems = catalogItems.slice(0, 6);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">New Arrivals</h2>
        <Link href="/catalog">
          <Button
            variant="light"
            className="font-medium text-base"
            endContent={
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            }
          >
            View All
          </Button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewItems.map((item) => (
          <Link
            href={`/catalog/${item.id}`}
            key={item.id}
            className="group"
          >
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                  {item.name}
                </h3>
                {item.category && (
                  <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                )}
              </div>
              <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                ${item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatalogPreview; 