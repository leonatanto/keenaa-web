import { getProducts } from "@/lib/products";
import ProductCard from "./ProductCard";

interface CatalogPreviewProps {
  locale?: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
}

export default async function CatalogPreview({ locale }: CatalogPreviewProps) {
  if (!locale) return null;

  const products = await getProducts();
  const featuredProducts = products.slice(0, 4); // Show first 4 products

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            {locale.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {locale.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/catalog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
          >
            {locale.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
} 