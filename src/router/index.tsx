import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ServicesPage from "@/components/pages/ServicesPage";
import GalleryPage from "@/components/pages/GalleryPage";
import TestimonialsPage from "@/components/pages/TestimonialsPage";
import FaqPage from "@/components/pages/FaqPage";
import ContactPage from "@/components/pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "services", element: <ServicesPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "testimonials", element: <TestimonialsPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
