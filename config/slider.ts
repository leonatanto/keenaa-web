interface SlideData {
  image: string;
  title: string;
  description: string;
}

export const getSlides = (locale: any): SlideData[] => [
  {
    image: "/hero-1.jpg",
    title: "Everywhere",
    description: "lorem ipsum dolor sit amet",
  },
  {
    image: "/hero-2.jpeg",
    title: "Stylish",
    description: "lorem ipsum dolor sit amet",
  },
  {
    image: "/hero-3.jpg",
    title: "Comfortable",
    description: "lorem ipsum dolor sit amet",
  },
];

// title1: locale.title1,
// title2: locale.title2,
// title3: locale.title3,