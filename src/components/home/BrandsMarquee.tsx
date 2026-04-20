import { siteConfig } from "@/content/config";
import { useLanguage } from "@/context/LanguageContext";

const brandSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

const BrandsMarquee = () => {
  const { t } = useLanguage();
  const brands = [...siteConfig.brands, ...siteConfig.brands]; // duplicate for seamless loop

  return (
    <section className="py-14 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-2xl md:text-3xl">
          {t("section.brands.title")}
        </h2>
        <p className="mt-2 text-primary-foreground/70 text-sm md:text-base">
          {t("section.brands.subtitle")}
        </p>
      </div>

      <div className="relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent z-10" />

        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {brands.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex items-center gap-3 shrink-0 px-4"
            >
              <img
                src={`https://cdn.simpleicons.org/${brandSlug(brand)}/FFC107`}
                alt={brand}
                loading="lazy"
                className="h-10 w-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="text-lg font-semibold tracking-wide text-primary-foreground/90">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
