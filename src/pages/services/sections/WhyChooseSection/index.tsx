import { WhyChooseContent } from "@/pages/services/sections/WhyChooseSection/components/WhyChooseContent";
import { WhyChooseImage } from "@/pages/services/sections/WhyChooseSection/components/WhyChooseImage";

export const WhyChooseSection = () => {
  return (
    <section className="bg-slate-50 box-border caret-transparent py-[50px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="items-center box-border caret-transparent gap-x-10 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:gap-x-[110px] md:grid-cols-[1fr_1fr] md:gap-y-[110px]">
          <WhyChooseContent />
          <WhyChooseImage />
        </div>
      </div>
    </section>
  );
};

