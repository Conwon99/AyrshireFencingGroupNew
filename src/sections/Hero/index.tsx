import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section id="home" className="relative bg-[url('/hero-bg.webp')] bg-no-repeat bg-cover box-border caret-transparent min-h-screen w-full bg-[position:center_center] bg-[size:cover] pt-[100px] pb-[60px] md:pt-[120px] md:pb-[90px]">
      <div className="absolute inset-0 hero-gradient-overlay bg-gradient-to-r from-gray-900/85 via-gray-900/55 to-transparent"></div>
      <div className="relative z-10 box-border caret-transparent flex flex-col justify-end min-h-[calc(100vh-100px)] max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8 pb-8 md:pb-12">
          <HeroContent />
      </div>
    </section>
  );
};
