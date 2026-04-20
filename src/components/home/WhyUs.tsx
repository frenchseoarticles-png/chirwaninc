import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Clock, Tag, Award } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const WhyUs = () => {
  const { t } = useLanguage();
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { Icon: Award, label: t("why.certified") },
    { Icon: Clock, label: t("why.fast") },
    { Icon: Tag, label: t("why.transparent") },
    { Icon: ShieldCheck, label: t("why.warranty") },
  ];
  return (
    <section className="py-20">
      <div ref={ref} className="reveal container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12">{t("section.why.title")}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ Icon, label }) => (
            <div key={label} className="text-center p-6 rounded-2xl bg-card border border-border card-hover">
              <div className="h-14 w-14 mx-auto rounded-2xl bg-accent text-accent-foreground flex items-center justify-center mb-4">
                <Icon className="h-7 w-7" />
              </div>
              <div className="font-bold">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
