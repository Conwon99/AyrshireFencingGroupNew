import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="text-white bg-[url('https://cdn.prod.website-files.com/689a8e2467db11e41193d52c/689be7949dc9bf3181583838_Rectangle%2034624171.webp')] bg-no-repeat bg-cover box-border caret-transparent h-auto bg-[position:0px_0px] pt-[140px] md:h-[1000px] md:pt-[100px]">
      <div className="box-border caret-transparent flex flex-col h-full justify-end max-w-[1204px] mx-auto pb-[90px] px-5 md:px-8">
        <HeroContent />
      </div>
    </section>
  );
};
