import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/content/fr";

interface Props { titleKey: TranslationKey; subtitleKey?: TranslationKey }

const PageHeader = ({ titleKey, subtitleKey }: Props) => {
  const { t } = useLanguage();
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl">{t(titleKey)}</h1>
        {subtitleKey && (
          <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto">{t(subtitleKey)}</p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
