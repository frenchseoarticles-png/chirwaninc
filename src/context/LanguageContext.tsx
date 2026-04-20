import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { fr, type TranslationKey } from "@/content/fr";
import { en } from "@/content/en";

type Lang = "fr" | "en";

interface LanguageContextValue {
  lang: Lang;
  toggleLanguage: () => void;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");
  const toggleLanguage = useCallback(() => setLang((l) => (l === "fr" ? "en" : "fr")), []);
  const t = useCallback(
    (key: TranslationKey) => (lang === "fr" ? fr[key] : en[key]) ?? key,
    [lang]
  );
  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
