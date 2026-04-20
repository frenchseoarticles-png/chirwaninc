import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
          else setVal(to);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

const TrustBadges = () => {
  const { t } = useLanguage();
  const items = [
    { value: 15, suffix: "+", label: t("trust.years") },
    { value: 12000, suffix: "+", label: t("trust.cars") },
    { value: 98, suffix: "%", label: t("trust.satisfaction") },
  ];
  return (
    <section className="bg-primary text-primary-foreground py-14">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {items.map((it) => (
          <div key={it.label}>
            <div className="text-4xl md:text-5xl font-extrabold text-accent">
              <Counter to={it.value} suffix={it.suffix} />
            </div>
            <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/70">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;
