import { CTABanner } from "@/pages/contact/sections/Footer/components/CTABanner";
import { FooterContent } from "@/pages/contact/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="box-border caret-transparent pt-[60px] pb-[50px] md:pt-[130px]">
      <div className="relative bg-gray-900 box-border caret-transparent mx-[15px] rounded-[20px] md:mx-[30px]">
        <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
          <CTABanner />
          <FooterContent />
          <div className="items-start box-border caret-transparent flex justify-center">
            <div className="relative text-sm items-start bg-white box-border caret-transparent flex justify-center leading-[21px] mx-2.5 pt-2.5 px-[15px] rounded-t-[10px] md:text-lg md:leading-[27px] md:mx-[42px] md:pt-5 md:px-[30px] md:rounded-t-none">
              <p className="text-gray-900 text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px]">
                Designed by{" "}
                <a
                  href="https://webestica.com/"
                  className="text-[#787e59] text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px] hover:text-[#8a9168] hover:decoration-transparent hover:border-[#8a9168]"
                >
                  Webestica
                </a>
                , Powered by{" "}
                <a
                  href="https://webflow.com/"
                  className="text-[#787e59] text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px] hover:text-[#8a9168] hover:decoration-transparent hover:border-[#8a9168]"
                >
                  Webflow
                </a>
              </p>
              <img
                src="https://c.animaapp.com/mhqqiiyn5JzZir/assets/67a313f1157f16b6f57c2e09_shape-01.svg"
                alt="Shape 01"
                className="absolute text-sm box-border caret-transparent hidden h-full leading-[21px] max-w-full transform-none -left-8 top-[0%] md:text-lg md:block md:left-[-42px] md:leading-[27px]"
              />
              <img
                src="https://c.animaapp.com/mhqqiiyn5JzZir/assets/67a313f1157f16b6f57c2e09_shape-01.svg"
                alt="Shape 01"
                className="absolute text-sm box-border caret-transparent hidden h-full leading-[21px] max-w-full transform-none -right-8 bottom-[0%] md:text-lg md:block md:leading-[27px] md:right-[-42px] md:scale-x-[-1px] md:scale-y-[-1px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

