import PageHeader from "@/components/layout/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/content/config";
import { openWhatsApp } from "@/lib/whatsapp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, CheckCircle2 } from "lucide-react";

const ContactPage = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    name: z.string().min(1, t("form.error.name")),
    phone: z.string().min(1, t("form.error.phone")),
    email: z.string().email(t("form.error.email")),
    service: z.string().min(1),
    message: z.string().min(1, t("form.error.message")),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register, handleSubmit, formState: { errors, isSubmitting }, reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: "service.oil" },
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const services = ["service.general", "service.brakes", "service.alignment", "service.oil", "service.tires", "service.safety"] as const;

  return (
    <>
      <PageHeader titleKey="section.contact.title" />
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-1.5">{t("form.name")}</label>
                <input
                  {...register("name")}
                  placeholder={t("form.namePlaceholder")}
                  className="w-full h-11 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">{t("form.phone")}</label>
                <input
                  {...register("phone")}
                  placeholder={t("form.phonePlaceholder")}
                  className="w-full h-11 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">{t("form.email")}</label>
              <input
                {...register("email")}
                placeholder={t("form.emailPlaceholder")}
                className="w-full h-11 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">{t("form.service")}</label>
              <select
                {...register("service")}
                className="w-full h-11 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{t(s)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">{t("form.message")}</label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder={t("form.messagePlaceholder")}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-8 rounded-lg bg-accent text-accent-foreground font-semibold btn-press disabled:opacity-60 w-full sm:w-auto"
            >
              {isSubmitting ? t("form.submitting") : t("form.submit")}
            </button>
            {submitted && (
              <div className="flex items-center gap-2 text-whatsapp font-semibold animate-fade-in">
                <CheckCircle2 className="h-5 w-5" /> {t("form.success")}
              </div>
            )}
          </form>

          <aside className="bg-primary text-primary-foreground rounded-2xl p-8 space-y-5 h-fit">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent mt-1" />
              <div>
                <div className="text-sm text-primary-foreground/60">{t("contact.address")}</div>
                <div className="font-semibold">{siteConfig.company.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-accent mt-1" />
              <div>
                <div className="text-sm text-primary-foreground/60">{t("contact.phone")}</div>
                <div className="font-semibold">{siteConfig.company.phone}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-accent mt-1" />
              <div>
                <div className="text-sm text-primary-foreground/60">{t("contact.hours")}</div>
                <div className="font-semibold">{siteConfig.company.hours}</div>
              </div>
            </div>
            <button
              onClick={openWhatsApp}
              className="w-full h-12 rounded-lg bg-whatsapp text-white font-semibold btn-press flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </button>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
