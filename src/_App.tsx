import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages/home/HomePage";
import { AboutPage } from "@/pages/about/AboutPage";
import { ServicesPage } from "@/pages/services/ServicesPage";
import { ProjectsPage } from "@/pages/projects/ProjectsPage";
import { ContactPage } from "@/pages/contact/ContactPage";
import { ProjectDetailPage } from "@/pages/project/ProjectDetailPage";
import { ServiceDetailPage } from "@/pages/service/ServiceDetailPage";
import { ScrollToTop } from "@/components/ScrollToTop";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:slug" element={<ProjectDetailPage />} />
        <Route path="/service/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
