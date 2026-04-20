import PageHeader from "@/components/layout/PageHeader";
import { ServiceGrid } from "@/components/home/ServicesPreview";
import { openWhatsApp } from "@/lib/whatsapp";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";

const ServicesPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader titleKey="section.services.title" subtitleKey="section.services.subtitle" />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ServiceGrid />

          <div className="mt-16 rounded-2xl bg-primary text-primary-foreground p-10 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold">
              {t("services.cta.title")}
            </h3>
            <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
              {t("services.cta.subtitle")}
            </p>
            <button
              onClick={openWhatsApp}
              className="mt-6 inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-yellow text-yellow-foreground font-bold btn-press shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              {t("hero.cta1")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
