import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { ProjectsGrid } from "@/sections/ProjectsGrid";
import { CTASection } from "@/sections/CTASection";
import { FloatingCTA } from "@/components/FloatingCTA";

export const App = () => {
  return (
    <body className="text-neutral-600 text-lg not-italic normal-nums font-medium accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[27px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-manrope">
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <CTASection />
      <FloatingCTA />
    </body>
  );
};
