import PageHeader from "@/components/layout/PageHeader";
import { TestimonialList } from "@/components/home/TestimonialsPreview";

const TestimonialsPage = () => (
  <>
    <PageHeader titleKey="section.testimonials.title" />
    <section className="py-20">
      <div className="container mx-auto px-4">
        <TestimonialList />
      </div>
    </section>
  </>
);

export default TestimonialsPage;
