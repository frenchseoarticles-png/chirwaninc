import { Link } from "react-router-dom";
import { siteConfig } from "@/content/config";
import { useLanguage } from "@/context/LanguageContext";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import type { TranslationKey } from "@/content/fr";

interface Props { limit?: number }

export const FaqAccordion = ({ limit }: Props) => {
  const { t } = useLanguage();
  const items = limit ? siteConfig.faq.slice(0, limit) : siteConfig.faq;
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {items.map((f) => (
        <AccordionItem key={f.id} value={f.id} className="border-border">
          <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-accent">
            {t(f.questionKey as TranslationKey)}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {t(f.answerKey as TranslationKey)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const FaqPreview = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-10">{t("section.faq.title")}</h2>
        <FaqAccordion limit={2} />
        <div className="text-center mt-10">
          <Link to="/faq" className="text-accent font-semibold hover:underline">
            {t("section.faq.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqPreview;
