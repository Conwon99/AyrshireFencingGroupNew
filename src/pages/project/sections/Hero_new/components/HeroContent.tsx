import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroStats } from "@/sections/Hero/components/HeroStats";

export const HeroContent = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-10 flex flex-col justify-between gap-y-10 md:items-end md:gap-x-[60px] md:flex-row md:gap-y-[60px]">
      <HeroText />
      <HeroStats />
    </div>
  );
};
