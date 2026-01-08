import { Navbar } from "@/pages/project/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <div
      role="banner"
      className="relative box-border caret-transparent z-[1000] py-2.5 md:py-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope"
    >
      <Navbar />
      <div className="absolute box-border caret-transparent hidden w-full overflow-hidden top-full inset-x-0"></div>
    </div>
  );
};
