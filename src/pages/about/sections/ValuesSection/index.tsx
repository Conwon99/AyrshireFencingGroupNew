import { ValueCard } from "@/pages/about/sections/ValuesSection/components/ValueCard";

export const ValuesSection = () => {
  return (
    <section className="box-border caret-transparent py-[70px] md:py-[140px] bg-[#323232]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent mb-[30px] md:mb-[50px]">
          <h2 className="text-white text-4xl font-bold box-border caret-transparent leading-[43.2px] mb-2.5 md:text-[56px] md:leading-[67.2px]">
            Our value
          </h2>
        </div>
        <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 md:gap-x-[50px] md:grid-cols-[1fr_1fr_1fr] md:gap-y-[50px]">
          <ValueCard
            variant="bg-[#787e59]"
            iconUrl="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/670f922a6c5c1d8102612221_service-02.svg"
            iconAlt="Service Icon"
            title="Quality craftsmanship"
            titleClassName="text-white"
            description="We take pride in delivering fencing and decking services that meet the highest standards of professionalism and reliability."
            descriptionClassName="text-gray-200"
          />
          <ValueCard
            variant="bg-gray-800"
            iconUrl="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/676a53cbd1ebce5fb0e1611a_value-06.svg"
            iconAlt=""
            title="Customer-centric approach"
            titleClassName="text-white"
            description="Our customers are at the heart of everything we do, and we strive to provide personalized service and clear communication."
            descriptionClassName="text-gray-200 opacity-90"
          />
          <ValueCard
            variant="bg-gray-700"
            iconUrl="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/670f922acd8bf79374aa2c10_service-01.svg"
            iconAlt="Service Icon"
            title="Long-term commitment"
            titleClassName="text-white"
            description="We value building lasting relationships with our clients and ensuring that our services exceed expectations every time."
            descriptionClassName="text-gray-200"
          />
        </div>
      </div>
    </section>
  );
};

