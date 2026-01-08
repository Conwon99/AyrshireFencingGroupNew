import { HeroText, HeroButtons } from "@/sections/Hero/components/HeroText";
import { HeroStats } from "@/sections/Hero/components/HeroStats";

export const HeroContent = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-10 flex flex-col justify-between gap-y-10 md:items-end md:gap-x-[60px] md:flex-row md:gap-y-[60px]">
      <div className="flex flex-col w-full md:w-auto basis-[0%] grow max-w-[1100px]">
        <div className="order-1">
          <HeroText />
        </div>
        <div className="order-2">
          <HeroButtons />
        </div>
        <div className="order-3 md:order-3 md:hidden mt-6">
          <HeroStats />
        </div>
      </div>
      <div className="hidden md:block order-2">
        <HeroStats />
      </div>
    </div>
  );
};
