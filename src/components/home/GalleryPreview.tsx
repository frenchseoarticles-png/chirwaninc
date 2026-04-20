import { Link } from "react-router-dom";
import { siteConfig } from "@/content/config";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props { limit?: number }

export const GalleryGrid = ({ limit }: Props) => {
  const [active, setActive] = useState<string | null>(null);
  const items = limit ? siteConfig.gallery.slice(0, limit) : siteConfig.gallery;
  return (
    <>
      <div className={cn("grid gap-4", limit ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3")}>
        {items.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(src)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors" />
          </button>
        ))}
      </div>
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button className="absolute top-6 right-6 h-10 w-10 bg-white/10 rounded-full text-white flex items-center justify-center hover:bg-white/20">
            <X />
          </button>
          <img src={active} alt="" className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain" />
        </div>
      )}
    </>
  );
};

const GalleryPreview = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">{t("section.gallery.title")}</h2>
        <GalleryGrid limit={3} />
        <div className="text-center mt-10">
          <Link to="/gallery" className="text-accent font-semibold hover:underline">
            {t("section.gallery.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
