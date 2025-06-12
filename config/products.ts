import { ProductType } from "@/types/product";

export const products: ProductType[] = [
  {
    id: "newborn-carrier",
    name: {
      en: "Newborn Essential Carrier",
      id: "Gendongan Bayi Newborn Essential"
    },
    price: 399000,
    images: [
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg"
    ],
    thumbnail: "/1.jpg",
    category: {
      en: "Newborn Carriers",
      id: "Gendongan Bayi Newborn"
    },
    description: {
      en: "Specially designed for newborns, providing the perfect blend of comfort and support for your precious little one.",
      id: "Dirancang khusus untuk bayi baru lahir, memberikan perpaduan sempurna antara kenyamanan dan dukungan untuk si kecil Anda."
    },
    features: {
      en: [
        "Ergonomic design supports healthy hip development",
        "Soft, breathable fabric perfect for newborn skin",
        "Adjustable head support for growing babies",
        "Easy-to-use buckle system",
        "Machine washable material"
      ],
      id: [
        "Desain ergonomis mendukung perkembangan pinggul yang sehat",
        "Bahan lembut dan bernapas, sempurna untuk kulit bayi baru lahir",
        "Penyangga kepala yang dapat disesuaikan untuk bayi yang sedang tumbuh",
        "Sistem gesper yang mudah digunakan",
        "Bahan yang dapat dicuci dengan mesin"
      ]
    },
    colors: ["Black", "Navy", "Grey", "Sage"],
    ageRange: "0-12 months",
    maxWeight: "12kg",
    material: "100% Cotton",
    certification: "SNI Certified"
  },
  {
    id: "toddler-carrier",
    name: {
      en: "Adventure Toddler Carrier",
      id: "Gendongan Bayi Adventure Toddler"
    },
    price: 499000,
    images: [
      "/2.jpg",
      "/3.jpg",
      "/4.jpg",
      "/1.jpg"
    ],
    thumbnail: "/2.jpg",
    category: {
      en: "Toddler Carriers",
      id: "Gendongan Bayi Toddler"
    },
    description: {
      en: "Perfect for active parents and growing toddlers, offering multiple carry positions and extra storage for your adventures.",
      id: "Sempurna untuk orang tua aktif dan balita yang sedang tumbuh, menawarkan berbagai posisi menggendong dan penyimpanan tambahan untuk petualangan Anda."
    },
    features: {
      en: [
        "Multiple carrying positions (front, back, hip)",
        "Extra padded shoulder straps",
        "Large storage pocket",
        "Adjustable seat width",
        "Removable hood for sun protection"
      ],
      id: [
        "Berbagai posisi menggendong (depan, belakang, pinggul)",
        "Tali bahu dengan bantalan ekstra",
        "Kantong penyimpanan besar",
        "Lebar dudukan yang dapat disesuaikan",
        "Tudung yang dapat dilepas untuk perlindungan dari matahari"
      ]
    },
    colors: ["Black", "Navy", "Olive", "Burgundy"],
    ageRange: "12-36 months",
    maxWeight: "20kg",
    material: "Premium Cotton Canvas",
    certification: "SNI Certified"
  },
  {
    id: "hip-carrier",
    name: {
      en: "Hip Seat Carrier",
      id: "Gendongan Bayi Hip Seat"
    },
    price: 449000,
    images: [
      "/3.jpg",
      "/4.jpg",
      "/1.jpg",
      "/2.jpg"
    ],
    thumbnail: "/3.jpg",
    category: {
      en: "Hip Carriers",
      id: "Gendongan Bayi Hip"
    },
    description: {
      en: "Innovative hip seat design that provides ergonomic support for both parent and child, perfect for extended carrying.",
      id: "Desain hip seat inovatif yang memberikan dukungan ergonomis untuk orang tua dan anak, sempurna untuk menggendong dalam waktu lama."
    },
    features: {
      en: [
        "Ergonomic hip seat design",
        "Adjustable waist belt",
        "Removable shoulder straps",
        "Multiple carrying positions",
        "Extra storage pockets"
      ],
      id: [
        "Desain hip seat ergonomis",
        "Sabuk pinggang yang dapat disesuaikan",
        "Tali bahu yang dapat dilepas",
        "Berbagai posisi menggendong",
        "Kantong penyimpanan tambahan"
      ]
    },
    colors: ["Black", "Grey", "Navy", "Pink"],
    ageRange: "4-36 months",
    maxWeight: "20kg",
    material: "Premium Polyester",
    certification: "SNI Certified"
  },
  {
    id: "mesh-carrier",
    name: {
      en: "Breathable Mesh Carrier",
      id: "Gendongan Bayi Mesh Breathable"
    },
    price: 549000,
    images: [
      "/4.jpg",
      "/1.jpg",
      "/2.jpg",
      "/3.jpg"
    ],
    thumbnail: "/4.jpg",
    category: {
      en: "All-Season Carriers",
      id: "Gendongan Bayi All-Season"
    },
    description: {
      en: "Stay cool and comfortable in any weather with our breathable mesh carrier, perfect for tropical climates.",
      id: "Tetap sejuk dan nyaman di segala cuaca dengan gendongan mesh bernapas kami, sempurna untuk iklim tropis."
    },
    features: {
      en: [
        "Breathable mesh material",
        "All-weather comfort",
        "6 carrying positions",
        "Foldable sun hood",
        "Quick-dry fabric"
      ],
      id: [
        "Bahan mesh bernapas",
        "Kenyamanan segala cuaca",
        "6 posisi menggendong",
        "Tudung matahari lipat",
        "Kain cepat kering"
      ]
    },
    colors: ["Grey", "Black", "Navy", "Teal"],
    ageRange: "0-48 months",
    maxWeight: "20kg",
    material: "Premium Mesh",
    certification: "SNI Certified"
  }
]; 