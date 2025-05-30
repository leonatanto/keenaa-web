"use client";
import { catalogItems } from "@/config/catalog";
import { Button } from "@nextui-org/react";
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

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-semibold">{translations.title}</h2>
        <Link href={`/${lang}/catalog`}>
          <Button
            variant="light"
            className="font-medium text-base"
            endContent={
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            }
          >
            {translations.viewAll}
          </Button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {previewItems.map((item) => (
          <Link
            href={`/${lang}/catalog/${item.id}`}
            key={item.id}
            className="group transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>
                {item.category && (
                  <p className="mt-2 text-sm text-gray-500">{item.category}</p>
                )}
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
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