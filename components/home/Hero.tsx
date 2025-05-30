import { getSlides } from "@/config/slider";
import HeroClient from "./HeroClient";

interface HeroProps {
  locale?: {
    title1?: string;
    title2?: string;
    title3?: string;
    description?: string;
    slides?: Array<{
      image: string;
      title: string;
      description: string;
    }>;
  };
  langName: string;
  CTALocale?: any;
}

export default function Hero({ locale, langName, CTALocale }: HeroProps) {
  if (!locale) return null;

  const slides = getSlides(locale);

  return (
    <section
      lang={langName}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Client-side interactive elements */}
      <HeroClient slides={slides} />
    </section>
  );
}

// NOTES: how to use line with styling text
// <h1>
// {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
// </h1>
