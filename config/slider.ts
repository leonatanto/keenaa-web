interface SlideData {
  image: string;
  title: string;
  description: string;
}

interface LocaleData {
  slides?: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}

export const getSlides = (locale?: LocaleData): SlideData[] => {
  if (locale?.slides) {
    return locale.slides;
  }

  // Fallback slides if no translations are provided
  return [
    {
      image: "/hero-1.jpg",
      title: "Effortless Carry, Always Fashionable",
      description: "Carry your little one with confidence, wherever you go. Our baby carrier blends modern style and ergonomic comfort, so you and your baby always feel at ease.",
    },
    {
      image: "/hero-2.jpeg",
      title: "Designed for You & Your Baby",
      description: "Experience freedom and closeness. Our carriers support healthy development and let you stay stylish on every adventure—big or small.",
    },
    {
      image: "/hero-3.jpg",
      title: "Wherever You Go, Stay Stylish & Comfortable",
      description: "From city strolls to family trips, our carriers are your perfect companion. Move with ease, bond with love.",
    },
  ];
};

// title1: locale.title1,
// title2: locale.title2,
// title3: locale.title3,