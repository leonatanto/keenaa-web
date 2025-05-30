import Benefits from "@/components/home/Benefits";
import CatalogPreview from "@/components/home/CatalogPreview";
import Guide from "@/components/home/Guide";
import Hero from "@/components/home/Hero";
import Reviews from "@/components/home/Reviews";
import { getDictionary } from "@/lib/i18n";

const HomeIndex = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="w-full">
        <Hero locale={dict.Hero} langName={lang} CTALocale={dict.CTAButton} />
      </div>

      {/* Main Content */}
      <div className="mt-16">
        {/* New Arrivals Section */}
        <div id="Products" className="mb-24">
          <CatalogPreview />
        </div>

        {/* Benefits Section */}
        <div id="Benefits" className="mb-24">
          <Benefits locale={dict.Benefits} />
        </div>

        {/* Guide Section */}
        <div id="Guide" className="mb-24">
          <Guide locale={dict.Guide} />
        </div>

        {/* Reviews Section */}
        <div id="Reviews" className="mb-24">
          <Reviews locale={dict.Reviews} id="Reviews" />
        </div>

        {/* CTA Section */}
        {/* <div className="mb-16">
          <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
        </div> */}
      </div>
    </main>
  );
};

export default HomeIndex;
