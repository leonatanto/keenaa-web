"use client";
import { catalogItems } from "@/config/catalog";
import { getDictionary } from "@/lib/i18n";
import { Button, Input, Pagination, Select, SelectItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [translations, setTranslations] = useState({
    title: "Our Collection",
    subtitle: "Discover our complete range of baby carriers, designed for comfort, safety, and style. Each product is carefully crafted to provide the best experience for both parent and child.",
    searchPlaceholder: "Search products...",
    category: "Category",
    sortBy: "Sort by",
    showing: "Showing",
    products: "products",
    product: "product",
    noProducts: "No products found",
    clearFilters: "Clear filters",
    sortOptions: {
      default: "Default",
      priceAsc: "Price: Low to High",
      priceDesc: "Price: High to Low",
      nameAsc: "Name: A to Z",
      nameDesc: "Name: Z to A"
    }
  });

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const dict = await getDictionary(lang);
        if (dict.Catalog) {
          setTranslations(dict.Catalog);
        }
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };
    loadTranslations();
    setMounted(true);
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lang]);

  // Also scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set(catalogItems.map(item => item.category));
    return ["all", ...Array.from(uniqueCategories)];
  }, []);

  // Filter and sort items
  const filteredItems = useMemo(() => {
    return catalogItems
      .filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "name-asc":
            return a.name.localeCompare(b.name);
          case "name-desc":
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
  }, [searchQuery, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    router.push(`/${lang}/catalog?page=${page}`);
  };

  const containerAnimation = {
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

  if (!mounted) return null;

  return (
    <div className="min-h-screen pt-24 pb-16 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {translations.title}
          </motion.h1>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {translations.subtitle}
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Input
            placeholder={translations.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startContent={<Search className="text-gray-400" size={20} />}
            className="w-full"
          />
          <Select
            label={translations.category}
            selectedKeys={[selectedCategory]}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full"
          >
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </Select>
          <Select
            label={translations.sortBy}
            selectedKeys={[sortBy]}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full"
          >
            <SelectItem key="default" value="default">{translations.sortOptions.default}</SelectItem>
            <SelectItem key="price-asc" value="price-asc">{translations.sortOptions.priceAsc}</SelectItem>
            <SelectItem key="price-desc" value="price-desc">{translations.sortOptions.priceDesc}</SelectItem>
            <SelectItem key="name-asc" value="name-asc">{translations.sortOptions.nameAsc}</SelectItem>
            <SelectItem key="name-desc" value="name-desc">{translations.sortOptions.nameDesc}</SelectItem>
          </Select>
        </motion.div>

        {/* Results count */}
        <motion.div
          className="mb-6 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {translations.showing} {filteredItems.length} {filteredItems.length === 1 ? translations.product : translations.products}
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {currentItems.map((product) => (
            <motion.div
              key={product.id}
              variants={itemAnimation}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/${lang}/catalog/${product.id}`}
                className="group block"
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex justify-between items-center">
                    {product.category && (
                      <p className="text-sm text-gray-500">{product.category}</p>
                    )}
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      ${product.price}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {currentItems.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 text-lg mb-4">{translations.noProducts}</p>
            <Button
              color="primary"
              variant="light"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSortBy("default");
              }}
            >
              {translations.clearFilters}
            </Button>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Pagination
              total={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              showControls
              classNames={{
                wrapper: "gap-2",
                item: "w-8 h-8 text-sm",
                cursor: "bg-primary text-white font-medium",
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
} 