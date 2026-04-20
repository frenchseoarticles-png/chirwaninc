import { useLanguage } from "@/context/LanguageContext";
import { openWhatsApp } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const [hover, setHover] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {hover && (
        <span className="hidden md:inline-block bg-primary text-primary-foreground text-sm font-semibold px-3 py-2 rounded-lg shadow-lg animate-fade-in">
          {t("wa.tooltip")}
        </span>
      )}
      <button
        aria-label={t("wa.tooltip")}
        onClick={openWhatsApp}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="wa-pulse h-14 w-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
      >
        <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
        <svg viewBox="0 0 32 32" className="absolute h-7 w-7" fill="white" aria-hidden>
          <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.89 1.21 3.09.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;
