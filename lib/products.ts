// This is a placeholder for actual product data fetching
// In a real application, this would likely be fetching from an API or database
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export async function getProducts(): Promise<Product[]> {
  // Simulated async data fetch
  return [
    {
      id: "classic-carrier",
      name: "Classic Baby Carrier",
      price: 129.99,
      image: "/images/products/classic-carrier.jpg",
      category: "Classic Collection"
    },
    {
      id: "ergonomic-carrier",
      name: "Ergonomic Baby Carrier",
      price: 159.99,
      image: "/images/products/ergonomic-carrier.jpg",
      category: "Ergonomic Collection"
    },
    {
      id: "newborn-carrier",
      name: "Newborn Baby Carrier",
      price: 139.99,
      image: "/images/products/newborn-carrier.jpg",
      category: "Newborn Collection"
    },
    {
      id: "toddler-carrier",
      name: "Toddler Carrier",
      price: 169.99,
      image: "/images/products/toddler-carrier.jpg",
      category: "Toddler Collection"
    }
  ];
} 