import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/content/config";
import { openWhatsApp } from "@/lib/whatsapp";
import { Menu, X, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", labelKey: "nav.home" as const },
  { to: "/services", labelKey: "nav.services" as const },
  
  { to: "/gallery", labelKey: "nav.gallery" as const },
  { to: "/testimonials", labelKey: "nav.testimonials" as const },
  { to: "/faq", labelKey: "nav.faq" as const },
  { to: "/contact", labelKey: "nav.contact" as const },
];

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-40 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="h-9 w-9 rounded-lg bg-yellow text-yellow-foreground flex items-center justify-center shadow-md">
            <Wrench className="h-5 w-5" />
          </span>
          <span>{siteConfig.company.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-semibold transition-colors hover:text-accent",
                  isActive ? "text-accent" : "text-foreground/80"
                )
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 text-sm">
            <button
              onClick={() => setLang("fr")}
              className={cn(
                "px-1.5 transition-all",
                lang === "fr" ? "font-bold underline underline-offset-4 text-accent" : "text-muted-foreground hover:text-foreground"
              )}
            >
              FR
            </button>
            <span className="text-muted-foreground">|</span>
            <button
              onClick={() => setLang("en")}
              className={cn(
                "px-1.5 transition-all",
                lang === "en" ? "font-bold underline underline-offset-4 text-accent" : "text-muted-foreground hover:text-foreground"
              )}
            >
              EN
            </button>
          </div>
          <button
            onClick={openWhatsApp}
            className="hidden md:inline-flex h-10 items-center rounded-lg bg-accent px-4 text-sm font-semibold text-accent-foreground btn-press shadow-md"
          >
            {t("nav.cta")}
          </button>
          <button
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-md hover:bg-secondary"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-2 text-base font-semibold border-b border-border/50",
                    isActive ? "text-accent" : "text-foreground"
                  )
                }
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setLang("fr")}
                className={cn("px-2 py-1 rounded", lang === "fr" ? "font-bold underline text-accent" : "text-muted-foreground")}
              >
                FR
              </button>
              <span>|</span>
              <button
                onClick={() => setLang("en")}
                className={cn("px-2 py-1 rounded", lang === "en" ? "font-bold underline text-accent" : "text-muted-foreground")}
              >
                EN
              </button>
            </div>
            <button
              onClick={openWhatsApp}
              className="mt-2 h-11 rounded-lg bg-accent text-accent-foreground font-semibold btn-press"
            >
              {t("nav.cta")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
