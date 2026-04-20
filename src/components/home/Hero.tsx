import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/content/config";
import { openWhatsApp } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Wrench } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-primary">
      {/* Background image with Ken Burns */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-hero-zoom"
        style={{ backgroundImage: `url(${siteConfig.hero.backgroundImage})` }}
      />
      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--yellow)/0.18),transparent_60%)]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--yellow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--yellow)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-24 text-primary-foreground">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow text-yellow-foreground text-xs md:text-sm font-bold mb-6 shadow-lg">
            <Wrench className="h-4 w-4" />
            {siteConfig.company.name} — Montréal • {siteConfig.company.founded}
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
            {t("hero.title")}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-yellow text-yellow-foreground font-bold btn-press shadow-2xl text-base"
            >
              {t("hero.cta1")} <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-white/10 backdrop-blur border border-white/30 text-white font-semibold btn-press"
            >
              <MessageCircle className="h-5 w-5" /> {t("hero.cta2")}
            </button>
          </div>

          {/* Quick trust strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
            {[
              { icon: ShieldCheck, key: "hero.badge.certified" as const },
              { icon: Clock, key: "hero.badge.fast" as const },
              { icon: Wrench, key: "hero.badge.allBrands" as const },
            ].map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="flex items-center gap-2 text-sm text-primary-foreground/90"
              >
                <span className="h-9 w-9 rounded-lg bg-yellow/20 border border-yellow/40 flex items-center justify-center text-yellow">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-semibold">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-primary-foreground/60">
        <span className="text-xs uppercase tracking-widest">scroll</span>
        <span className="h-10 w-[2px] bg-gradient-to-b from-yellow to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
