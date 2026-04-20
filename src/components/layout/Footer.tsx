import { Link } from "react-router-dom";
import { siteConfig } from "@/content/config";
import { useLanguage } from "@/context/LanguageContext";
import { Facebook, Instagram, Globe, Wrench } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 font-extrabold text-xl">
            <span className="h-9 w-9 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
              <Wrench className="h-5 w-5" />
            </span>
            {siteConfig.company.name}
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-sm">
            {t("footer.description")}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
          <Link className="text-sm hover:text-accent" to="/">{t("nav.home")}</Link>
          <Link className="text-sm hover:text-accent" to="/services">{t("nav.services")}</Link>
          
          <Link className="text-sm hover:text-accent" to="/gallery">{t("nav.gallery")}</Link>
          <Link className="text-sm hover:text-accent" to="/testimonials">{t("nav.testimonials")}</Link>
          <Link className="text-sm hover:text-accent" to="/faq">{t("nav.faq")}</Link>
          <Link className="text-sm hover:text-accent" to="/contact">{t("nav.contact")}</Link>
        </div>

        <div className="md:text-right">
          <p className="text-sm text-primary-foreground/70">{siteConfig.company.address}</p>
          <p className="text-sm text-primary-foreground/70 mt-1">{siteConfig.company.phone}</p>
          <p className="text-sm text-primary-foreground/70">{siteConfig.company.email}</p>
          <div className="flex gap-3 mt-4 md:justify-end">
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.google} aria-label="Google" className="h-9 w-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {siteConfig.company.name}. {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
