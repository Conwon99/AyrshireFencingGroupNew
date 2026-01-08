import { HeroImages } from "@/sections/Hero/components/HeroImages";

export const HeroContent = () => {
  return (
    <div className="relative bg-gray-900 box-border caret-transparent mb-[50px] mx-[15px] pt-[100px] rounded-[20px] md:mb-[200px] md:pt-[180px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center w-full mb-[30px] mx-auto md:w-4/5 md:mb-[50px]">
          <h1 className="text-white text-[38px] font-bold box-border caret-transparent leading-[49.4px] mb-5 md:text-[68px] md:leading-[88.4px]">
            Quality roofing solutions for every home
          </h1>
          <p className="text-slate-200 box-border caret-transparent max-w-full mx-auto md:max-w-[70%]">
            At{" "}
            <span className="text-yellow-500 box-border caret-transparent">
              Roofinger
            </span>
            , we specialize in providing top-quality roofing solutions tailored
            to meet the unique needs of every homeowner.
          </p>
        </div>
        <HeroImages />
      </div>
    </div>
  );
};
