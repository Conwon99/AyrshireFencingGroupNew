import { CTABanner } from "@/pages/services/sections/Footer/components/CTABanner";
import { FooterContent } from "@/pages/services/sections/Footer/components/FooterContent";
import { FooterCopyright } from "@/pages/services/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="box-border caret-transparent pt-[60px] pb-[50px] md:pt-[130px]">
      <div className="relative bg-gray-900 box-border caret-transparent mx-[15px] rounded-[20px] md:mx-[30px]">
        <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
          <CTABanner />
          <FooterContent />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};

