export interface CatalogItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  features?: string[];
  colors?: string[];
}

export const catalogItems: CatalogItem[] = [
  {
    id: "1",
    name: "Classic Comfort Carrier",
    price: 149.99,
    image: "/1.jpg",
    category: "Baby Carriers",
    description: "Ergonomic design for maximum comfort",
    features: ["4-position carrying", "Breathable mesh", "Adjustable straps"],
    colors: ["Gray", "Black", "Navy"]
  },
  {
    id: "2",
    name: "Infant Wrap Carrier",
    price: 79.99,
    image: "/2.jpg",
    category: "Baby Wraps",
    description: "Soft and stretchy fabric for newborns",
    features: ["Skin-to-skin contact", "Machine washable", "One size fits all"],
    colors: ["Beige", "Light Gray", "Sage"]
  },
  {
    id: "3",
    name: "Adventure Hiking Carrier",
    price: 199.99,
    image: "/3.jpg",
    category: "Outdoor Carriers",
    description: "Perfect for outdoor activities",
    features: ["Storage pockets", "Sun canopy", "Sturdy frame"],
    colors: ["Green", "Gray", "Orange"]
  },
  {
    id: "4",
    name: "Hip Seat Carrier",
    price: 129.99,
    image: "/4.jpg",
    category: "Hip Carriers",
    description: "Ergonomic hip support for parents",
    features: ["Removable seat", "Lumbar support", "Multiple positions"],
    colors: ["Black", "Navy", "Pink"]
  },
  {
    id: "5",
    name: "Newborn Essential Carrier",
    price: 89.99,
    image: "/1.jpg",
    category: "Baby Carriers",
    description: "Specially designed for newborns",
    features: ["Head support", "Easy buckling", "Soft padding"],
    colors: ["Light Blue", "Pink", "Gray"]
  },
  {
    id: "6",
    name: "Convertible Mesh Carrier",
    price: 169.99,
    image: "/2.jpg",
    category: "Baby Carriers",
    description: "All-season breathable carrier",
    features: ["Cool mesh material", "6 carrying positions", "Foldable hood"],
    colors: ["Gray", "Black", "Teal"]
  }
]; 