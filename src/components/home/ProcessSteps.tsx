import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/hooks/useReveal";
import { CalendarCheck, Search, Wrench, KeyRound } from "lucide-react";

const ProcessSteps = () => {
  const { t } = useLanguage();
  const ref = useReveal<HTMLDivElement>();
  const steps = [
    { Icon: CalendarCheck, label: t("process.book") },
    { Icon: Search, label: t("process.inspect") },
    { Icon: Wrench, label: t("process.repair") },
    { Icon: KeyRound, label: t("process.pickup") },
  ];
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div ref={ref} className="reveal container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-14">{t("section.process.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((s, i) => (
            <div key={s.label} className="text-center relative">
              <div className="relative mx-auto h-16 w-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-extrabold text-xl">
                <s.Icon className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-white text-primary text-sm flex items-center justify-center font-extrabold border-2 border-primary">
                  {i + 1}
                </span>
              </div>
              <div className="mt-4 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
