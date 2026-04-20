import { Link } from "react-router-dom";
import { siteConfig } from "@/content/config";
import { useLanguage } from "@/context/LanguageContext";
import { iconMap } from "@/lib/icons";
import type { TranslationKey } from "@/content/fr";
import { useReveal } from "@/hooks/useReveal";

interface Props { limit?: number }

const ServiceGrid = ({ limit }: Props) => {
  const { t } = useLanguage();
  const items = limit ? siteConfig.services.slice(0, limit) : siteConfig.services;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => {
        const Icon = iconMap[s.icon] ?? iconMap.Cog;
        return (
          <article
            key={s.id}
            className="card-hover group bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={s.image}
                alt={t(s.titleKey as TranslationKey)}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
              <div className="absolute top-4 left-4 h-12 w-12 rounded-xl bg-yellow text-yellow-foreground flex items-center justify-center shadow-lg">
                <Icon className="h-6 w-6" />
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold">{t(s.titleKey as TranslationKey)}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {t(s.descKey as TranslationKey)}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

const ServicesPreview = () => {
  const { t } = useLanguage();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 bg-secondary/40">
      <div ref={ref} className="reveal container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl">{t("section.services.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("section.services.subtitle")}</p>
        </div>
        <ServiceGrid limit={3} />
        <div className="text-center mt-10">
          <Link to="/services" className="text-accent font-semibold hover:underline">
            {t("section.services.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export { ServiceGrid };
export default ServicesPreview;
