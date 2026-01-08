import { Header } from "@/sections/Header";
import { Hero } from "@/pages/service/sections/Hero";
import { ServiceDetail } from "@/pages/service/sections/ServiceDetail";
import { ServicesSection } from "@/pages/service/sections/ServicesSection";
import { FAQ } from "@/pages/service/sections/FAQ";
import { CTASection } from "@/sections/Footer/components/CTASection";
import { Footer } from "@/sections/Footer";

export const ServiceDetailPage = () => {
  return (
    <div className="text-neutral-600 text-lg not-italic normal-nums font-medium accent-auto bg-[#323232] box-border caret-transparent block tracking-[normal] leading-[27px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-manrope">
      <Header />
      <Hero />
      <ServiceDetail />
      <ServicesSection />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};
