import { FooterNewsletter } from "@/pages/projects/sections/Footer/components/FooterNewsletter";
import { FooterLinks } from "@/pages/projects/sections/Footer/components/FooterLinks";
import { FooterContact } from "@/pages/projects/sections/Footer/components/FooterContact";
import { FooterCopyright } from "@/pages/projects/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
      <div className="relative bg-white box-border caret-transparent mt-[-50px] mx-[30px] pb-2.5 px-2.5 rounded-[20px] md:mt-[-130px] md:mx-[60px] md:pb-5 md:px-5">
        <img
          src="https://c.animaapp.com/mhqqgvrna0ssg4/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt="Shape 02"
          className="absolute box-border caret-transparent h-5 max-w-full rotate-90 w-5 -left-5 top-[50px] md:top-[130px]"
        />
        <img
          src="https://c.animaapp.com/mhqqgvrna0ssg4/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt="Shape 02"
          className="absolute box-border caret-transparent h-5 max-w-full w-5 -right-5 top-[50px] md:top-[130px]"
        />
        <div className="relative bg-slate-200 box-border caret-transparent gap-x-[15px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[15px] p-[15px] rounded-[20px] md:gap-x-[100px] md:grid-cols-[1fr_0.75fr] md:gap-y-[100px] md:p-[70px]">
          <h2 className="text-gray-900 text-2xl font-bold box-border caret-transparent leading-[28.8px] md:text-[50px] md:leading-[60px]">
            Get a free quote today
          </h2>
          <div className="items-start box-border caret-transparent gap-x-5 flex flex-col justify-between gap-y-5 text-left md:items-end md:text-right">
            <p className="box-border caret-transparent text-left mb-2.5 md:text-right">
              A typical roof installation takes 1-3 days depending on the size
              of the roof.
            </p>
            <a
              href="/contact"
              className="text-white text-sm font-bold bg-[#787e59] box-border caret-transparent block leading-[19.6px] text-center border border-[#787e59] px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:bg-[#8a9168] hover:decoration-transparent shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300"
            >
              Request a free quote
            </a>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1.25fr] grid-rows-[auto] gap-y-[30px] mt-[30px] mb-10 md:gap-x-20 md:grid-cols-[0.75fr_1.25fr_0.5fr] md:gap-y-20 md:my-20">
        <FooterNewsletter />
        <FooterLinks />
        <FooterContact />
      </div>
      <FooterCopyright />
    </div>
  );
};

