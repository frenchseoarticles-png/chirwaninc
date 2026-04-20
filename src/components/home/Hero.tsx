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
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
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

      {/* ─── Custom keyframes ─── */}
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-22px) rotate(1deg); }
        }
        @keyframes ring-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ring-spin-rev {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%       { opacity: 0.7;  transform: scale(1.08); }
        }
        @keyframes spark-rise {
          0%   { transform: translateY(0)   scale(1);   opacity: 0.9; }
          100% { transform: translateY(-70px) scale(0); opacity: 0; }
        }
        @keyframes badge-pop {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.07); }
        }
        .anim-float    { animation: hero-float  4.5s ease-in-out infinite; }
        .anim-ring1    { animation: ring-spin     14s linear      infinite; }
        .anim-ring2    { animation: ring-spin-rev  9s linear      infinite; }
        .anim-glow     { animation: glow-pulse     3s ease-in-out infinite; }
        .anim-badge    { animation: badge-pop      3s ease-in-out infinite; }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 py-24 text-primary-foreground">
        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ─────────── LEFT : existing content ─────────── */}
          <div className="animate-fade-in">
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
                { icon: Clock,       key: "hero.badge.fast"      as const },
                { icon: Wrench,      key: "hero.badge.allBrands" as const },
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

          {/* ─────────── RIGHT : animated visual ─────────── */}
          <div className="hidden lg:flex items-center justify-center relative h-[480px]">

            {/* Outer glow orb */}
            <div
              className="anim-glow absolute rounded-full"
              style={{
                width: 340, height: 340,
                background: "radial-gradient(circle, hsl(var(--yellow)/0.18) 0%, transparent 70%)",
                filter: "blur(32px)",
              }}
            />

            {/* Rotating rings */}
            <div
              className="anim-ring1 absolute rounded-full"
              style={{
                width: 420, height: 420,
                border: "1.5px dashed hsl(var(--yellow)/0.25)",
              }}
            />
            <div
              className="anim-ring2 absolute rounded-full"
              style={{
                width: 320, height: 320,
                border: "1.5px solid hsl(var(--yellow)/0.15)",
              }}
            />

            {/* ── Floating car SVG ── */}
            <div className="anim-float relative z-10" style={{ filter: "drop-shadow(0 20px 40px hsl(var(--yellow)/0.35))" }}>
              <svg viewBox="0 0 480 220" width="440" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Shadow under car */}
                <ellipse cx="240" cy="205" rx="170" ry="10" fill="hsl(var(--yellow)/0.12)" />

                {/* Body */}
                <path
                  d="M55 148 L90 88 L175 58 L305 58 L390 88 L425 148 Z"
                  fill="hsl(var(--yellow))"
                />
                {/* Roof */}
                <path
                  d="M115 88 L148 52 L332 52 L365 88 Z"
                  fill="hsl(var(--yellow)/0.75)"
                />
                {/* Front window */}
                <path d="M315 86 L345 58 L332 52 L290 52 L278 86 Z" fill="#0f1e36" opacity="0.85"/>
                {/* Rear window */}
                <path d="M165 86 L148 52 L195 52 L200 86 Z" fill="#0f1e36" opacity="0.85"/>
                {/* Middle window */}
                <path d="M210 86 L213 52 L280 52 L268 86 Z" fill="#0f1e36" opacity="0.7"/>

                {/* Door line */}
                <path d="M155 148 L155 92 M250 148 L250 88" stroke="hsl(var(--yellow)/0.4)" strokeWidth="1.5"/>

                {/* Rear wheel */}
                <circle cx="145" cy="152" r="36" fill="#0d1b2e"/>
                <circle cx="145" cy="152" r="26" fill="#162440"/>
                <circle cx="145" cy="152" r="14" fill="#0d1b2e"/>
                <circle cx="145" cy="152" r="6"  fill="hsl(var(--yellow))"/>
                {/* Wheel spokes */}
                {[0,60,120,180,240,300].map((deg) => (
                  <line
                    key={deg}
                    x1="145" y1="152"
                    x2={145 + 20 * Math.cos((deg * Math.PI) / 180)}
                    y2={152 + 20 * Math.sin((deg * Math.PI) / 180)}
                    stroke="hsl(var(--yellow)/0.5)" strokeWidth="2"
                  />
                ))}

                {/* Front wheel */}
                <circle cx="335" cy="152" r="36" fill="#0d1b2e"/>
                <circle cx="335" cy="152" r="26" fill="#162440"/>
                <circle cx="335" cy="152" r="14" fill="#0d1b2e"/>
                <circle cx="335" cy="152" r="6"  fill="hsl(var(--yellow))"/>
                {[0,60,120,180,240,300].map((deg) => (
                  <line
                    key={deg}
                    x1="335" y1="152"
                    x2={335 + 20 * Math.cos((deg * Math.PI) / 180)}
                    y2={152 + 20 * Math.sin((deg * Math.PI) / 180)}
                    stroke="hsl(var(--yellow)/0.5)" strokeWidth="2"
                  />
                ))}

                {/* Headlight */}
                <ellipse cx="415" cy="128" rx="14" ry="9" fill="hsl(var(--yellow))" opacity="0.95"/>
                <ellipse cx="415" cy="128" rx="8"  ry="5"  fill="white" opacity="0.6"/>
                {/* Headlight beam */}
                <path d="M429 120 L460 108 M429 128 L465 128 M429 136 L460 148" stroke="hsl(var(--yellow)/0.35)" strokeWidth="1.5" strokeLinecap="round"/>

                {/* Taillight */}
                <ellipse cx="62" cy="128" rx="10" ry="7" fill="#ff4444" opacity="0.8"/>

                {/* Exhaust smoke puffs */}
                <circle cx="52" cy="160" r="6" fill="white" opacity="0.08"/>
                <circle cx="40" cy="155" r="5" fill="white" opacity="0.05"/>
                <circle cx="30" cy="148" r="4" fill="white" opacity="0.03"/>
              </svg>
            </div>

            {/* ── Floating spark particles ── */}
            {[
              { left: "18%", bottom: "30%", delay: "0s",    dur: "2.2s" },
              { left: "30%", bottom: "22%", delay: "0.4s",  dur: "2.8s" },
              { left: "55%", bottom: "28%", delay: "0.8s",  dur: "2s"   },
              { left: "70%", bottom: "35%", delay: "0.2s",  dur: "3s"   },
              { left: "80%", bottom: "20%", delay: "1.1s",  dur: "2.4s" },
              { left: "42%", bottom: "18%", delay: "0.6s",  dur: "2.6s" },
            ].map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 6, height: 6,
                  left: p.left,
                  bottom: p.bottom,
                  background: "hsl(var(--yellow))",
                  boxShadow: "0 0 6px hsl(var(--yellow))",
                  animation: `spark-rise ${p.dur} ease-out infinite`,
                  animationDelay: p.delay,
                }}
              />
            ))}

            {/* ── Floating badge: Certified ── */}
            <div
              className="anim-badge absolute top-10 right-6 flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-sm"
              style={{
                background: "hsl(var(--yellow)/0.15)",
                border: "1px solid hsl(var(--yellow)/0.4)",
                animationDelay: "0s",
              }}
            >
              <ShieldCheck className="h-5 w-5 text-yellow-400" style={{ color: "hsl(var(--yellow))" }} />
              <span className="text-xs font-bold text-white/90">Certifié</span>
            </div>

            {/* ── Floating badge: Rapide ── */}
            <div
              className="anim-badge absolute bottom-20 right-4 flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                animationDelay: "1.5s",
              }}
            >
              <Clock className="h-5 w-5" style={{ color: "white" }} />
              <span className="text-xs font-bold text-white/90">Service rapide</span>
            </div>

            {/* ── Floating badge: Toutes marques ── */}
            <div
              className="anim-badge absolute top-24 left-4 flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                animationDelay: "0.8s",
              }}
            >
              <Wrench className="h-5 w-5" style={{ color: "hsl(var(--yellow))" }} />
              <span className="text-xs font-bold text-white/80">Toutes marques</span>
            </div>

          </div>
          {/* ─────────── END RIGHT ─────────── */}

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
