import { Header } from "@/sections/Header";
import { HeroSection } from "@/pages/contact/sections/HeroSection";
import { FAQSection } from "@/pages/contact/sections/FAQSection";
import { Footer } from "@/sections/Footer";

export const ContactPage = () => {
  return (
    <div className="text-neutral-600 text-lg not-italic normal-nums font-medium accent-auto bg-[#323232] box-border caret-transparent block tracking-[normal] leading-[27px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-manrope">
      <Header />
      <HeroSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

