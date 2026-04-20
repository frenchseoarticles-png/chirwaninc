import PageHeader from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/home/GalleryPreview";

const GalleryPage = () => (
  <>
    <PageHeader titleKey="section.gallery.title" />
    <section className="py-20">
      <div className="container mx-auto px-4">
        <GalleryGrid />
      </div>
    </section>
  </>
);

export default GalleryPage;
