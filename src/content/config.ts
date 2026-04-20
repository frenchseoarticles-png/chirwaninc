export const siteConfig = {
  company: {
    name: "Chirwan Inc",
    phone: "+1 (514) 931-1931",
    whatsapp: "15149311931",
    email: "contact@chirwaninc.com",
    address: "123 Main Street, Montreal, QC H1A 1A1",
    hours: "Lun–Ven: 8h–18h | Sam: 9h–16h | Dim: Fermé",
    founded: "2010",
  },
  hero: {
    backgroundImage:
      "https://images.unsplash.com/photo-1625047509249-03e2c940ee8f?w=1920",
  },
  // To add a new service: append an object below with a unique id, an icon
  // name from src/lib/icons.ts, an Unsplash image URL, and translation keys.
  // Then add the matching keys in src/content/fr.ts and src/content/en.ts.
  services: [
    {
      id: "general",
      icon: "Wrench",
      image: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da77?w=1200",
      titleKey: "services.general.title",
      descKey: "services.general.desc",
    },
    {
      id: "brakes",
      icon: "Disc",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200",
      titleKey: "services.brakes.title",
      descKey: "services.brakes.desc",
    },
    {
      id: "alignment",
      icon: "Crosshair",
      image: "https://images.unsplash.com/photo-1599256871679-1ee29b1c8a36?w=1200",
      titleKey: "services.alignment.title",
      descKey: "services.alignment.desc",
    },
    {
      id: "oil",
      icon: "Droplet",
      image: "https://images.unsplash.com/photo-1635770310557-bdb6df1ed099?w=1200",
      titleKey: "services.oil.title",
      descKey: "services.oil.desc",
    },
    {
      id: "tires",
      icon: "CircleDot",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200",
      titleKey: "services.tires.title",
      descKey: "services.tires.desc",
    },
    {
      id: "safety",
      icon: "ShieldCheck",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
      titleKey: "services.safety.title",
      descKey: "services.safety.desc",
    },
  ],
  // Add a brand here to feature it in the rolling banner.
  // Logos are SVGs from simpleicons.org (use the brand slug, lowercase).
  brands: [
    "Toyota", "Honda", "Ford", "Chevrolet", "Hyundai", "Nissan",
    "Mazda", "Volkswagen", "Subaru", "Kia", "BMW", "MercedesBenz",
    "Audi", "Jeep", "Dodge", "Lexus",
  ],
  // To add more reviews: append a new object below with a unique id, the customer
  // name, a 1-5 star rating, and a reviewKey. Then add the matching key/translation
  // in src/content/fr.ts and src/content/en.ts (e.g. "testimonials.t7": "...").
  testimonials: [
    { id: "t1", name: "Marie Tremblay", rating: 5, reviewKey: "testimonials.t1" },
    { id: "t2", name: "Jean Dubois", rating: 5, reviewKey: "testimonials.t2" },
    { id: "t3", name: "Sarah Martin", rating: 5, reviewKey: "testimonials.t3" },
    { id: "t4", name: "Ahmed Benali", rating: 5, reviewKey: "testimonials.t4" },
    { id: "t5", name: "Émilie Roy", rating: 5, reviewKey: "testimonials.t5" },
    { id: "t6", name: "David Chen", rating: 4, reviewKey: "testimonials.t6" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200",
    "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1200",
    "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da77?w=1200",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
  ],
  faq: [
    { id: "f1", questionKey: "faq.f1.q", answerKey: "faq.f1.a" },
    { id: "f2", questionKey: "faq.f2.q", answerKey: "faq.f2.a" },
    { id: "f3", questionKey: "faq.f3.q", answerKey: "faq.f3.a" },
    { id: "f4", questionKey: "faq.f4.q", answerKey: "faq.f4.a" },
    { id: "f5", questionKey: "faq.f5.q", answerKey: "faq.f5.a" },
    { id: "f6", questionKey: "faq.f6.q", answerKey: "faq.f6.a" },
  ],
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
};

export const whatsappUrl = `https://wa.me/${siteConfig.company.whatsapp}`;
