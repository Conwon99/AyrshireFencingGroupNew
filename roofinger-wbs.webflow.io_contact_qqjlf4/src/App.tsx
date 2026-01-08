import { Navbar } from "@/sections/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { FAQSection } from "@/sections/FAQSection";
import { Footer } from "@/sections/Footer";
import { FloatingButton } from "@/components/FloatingButton";

export const App = () => {
  return (
    <body className="text-neutral-600 text-lg not-italic normal-nums font-medium accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[27px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-manrope">
      <Navbar />
      <HeroSection />
      <FAQSection />
      <Footer />
      <FloatingButton />
    </body>
  );
};
