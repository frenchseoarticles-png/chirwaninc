import PageHeader from "@/components/layout/PageHeader";
import { FaqAccordion } from "@/components/home/FaqPreview";

const FaqPage = () => (
  <>
    <PageHeader titleKey="section.faq.title" />
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FaqAccordion />
      </div>
    </section>
  </>
);

export default FaqPage;
