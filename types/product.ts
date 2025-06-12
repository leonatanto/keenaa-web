export interface MultilingualText {
  en: string;
  id: string;
}

export interface MultilingualStringArray {
  en: string[];
  id: string[];
}

export interface ProductType {
  id: string;
  name: MultilingualText;
  price: number;
  images: string[];
  thumbnail: string;
  category: MultilingualText;
  description: MultilingualText;
  features: MultilingualStringArray;
  colors: string[];
  ageRange: string;
  maxWeight: string;
  material: string;
  certification: string;
} 