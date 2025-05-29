"use client";
import { catalogItems } from "@/config/catalog";
import { Pagination } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 9;

export default function CatalogPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalPages = Math.ceil(catalogItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = catalogItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    router.push(`/${lang}/catalog?page=${page}`);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen pt-24 pb-16 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Collection</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Discover our complete range of baby carriers, designed for comfort, safety, and style.
            Each product is carefully crafted to provide the best experience for both parent and child.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentItems.map((item) => (
            <Link
              href={`/${lang}/catalog/${item.id}`}
              key={item.id}
              className="group"
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
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

        {/* Pagination */}
        <div className="flex justify-center">
          <Pagination
            total={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            showControls
            classNames={{
              wrapper: "gap-2",
              item: "w-8 h-8",
            }}
          />
        </div>
      </div>
    </div>
  );
} 