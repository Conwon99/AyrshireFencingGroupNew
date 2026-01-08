import { Header } from "@/sections/Header";
import { Hero } from "@/pages/about/sections/Hero";
import { AboutSection } from "@/pages/about/sections/AboutSection";
import { ValuesSection } from "@/pages/about/sections/ValuesSection";
import { CTASection } from "@/sections/Footer/components/CTASection";
import { Footer } from "@/sections/Footer";

export const AboutPage = () => {
  return (
    <div className="text-neutral-600 text-lg not-italic normal-nums font-medium accent-auto bg-[#323232] box-border caret-transparent block tracking-[normal] leading-[27px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-manrope">
      <Header />
      <Hero />
      <AboutSection />
      <ValuesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

