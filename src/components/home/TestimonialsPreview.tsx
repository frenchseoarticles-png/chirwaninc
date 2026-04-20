import { Link } from "react-router-dom";
import { siteConfig } from "@/content/config";
import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";
import type { TranslationKey } from "@/content/fr";

interface Props { limit?: number }

export const TestimonialList = ({ limit }: Props) => {
  const { t } = useLanguage();
  const items = limit ? siteConfig.testimonials.slice(0, limit) : siteConfig.testimonials;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {items.map((rev) => (
        <article key={rev.id} className="bg-card border border-border rounded-2xl p-6 card-hover">
          <div className="flex gap-0.5 text-yellow mb-3">
            {Array.from({ length: rev.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            "{t(rev.reviewKey as TranslationKey)}"
          </p>
          <div className="mt-4 font-bold">{rev.name}</div>
        </article>
      ))}
    </div>
  );
};

const TestimonialsPreview = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">{t("section.testimonials.title")}</h2>
        <TestimonialList limit={6} />
        <div className="text-center mt-10">
          <Link to="/testimonials" className="text-accent font-semibold hover:underline">
            {t("section.testimonials.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
