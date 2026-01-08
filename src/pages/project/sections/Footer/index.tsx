import { CTASection } from "@/pages/project/sections/Footer/components/CTASection";

export const Footer = () => {
  return (
    <footer className="box-border caret-transparent pt-[60px] pb-[50px] md:pt-[130px]">
      <div className="relative bg-gray-900 box-border caret-transparent mx-[15px] rounded-[20px] md:mx-[30px]">
        <CTASection />
      </div>
    </footer>
  );
};
