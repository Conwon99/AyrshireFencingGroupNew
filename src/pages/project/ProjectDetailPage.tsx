import { Header } from "@/sections/Header";
import { Hero } from "@/pages/project/sections/Hero";
import { ProjectContent } from "@/pages/project/sections/ProjectContent";
import { RelatedProjects } from "@/pages/project/sections/RelatedProjects";
import { CTASection } from "@/sections/Footer/components/CTASection";
import { Footer } from "@/sections/Footer";

export const ProjectDetailPage = () => {
  return (
    <div className="text-neutral-600 text-lg not-italic normal-nums font-medium accent-auto bg-[#323232] box-border caret-transparent block tracking-[normal] leading-[27px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-manrope">
      <Header />
      <Hero />
      <ProjectContent />
      <RelatedProjects />
      <CTASection />
      <Footer />
    </div>
  );
};
