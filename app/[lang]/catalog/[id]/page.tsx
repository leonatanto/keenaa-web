import { getDictionary } from "@/lib/i18n";
import ProductDetailClient from "./ProductDetailClient";

interface PageProps {
  params: {
    lang: 'en' | 'id';
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);
  return <ProductDetailClient params={params} dictionary={dictionary} />;
} 