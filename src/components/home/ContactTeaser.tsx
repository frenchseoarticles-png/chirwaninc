import { siteConfig } from "@/content/config";
import { useLanguage } from "@/context/LanguageContext";
import { openWhatsApp } from "@/lib/whatsapp";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContactTeaser = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl mb-6">{t("section.contact.title")}</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-accent mt-1" />
              <div>
                <div className="text-sm text-primary-foreground/60">{t("contact.phone")}</div>
                <div className="font-semibold">{siteConfig.company.phone}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent mt-1" />
              <div>
                <div className="text-sm text-primary-foreground/60">{t("contact.address")}</div>
                <div className="font-semibold">{siteConfig.company.address}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-accent mt-1" />
              <div>
                <div className="text-sm text-primary-foreground/60">{t("contact.hours")}</div>
                <div className="font-semibold">{siteConfig.company.hours}</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-accent text-accent-foreground font-semibold btn-press"
          >
            {t("contact.cta")}
          </Link>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-whatsapp text-white font-semibold btn-press"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactTeaser;
