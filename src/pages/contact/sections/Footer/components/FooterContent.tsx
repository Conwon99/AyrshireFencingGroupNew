import { FooterNewsletter } from "@/pages/contact/sections/Footer/components/FooterNewsletter";
import { FooterLinks } from "@/pages/contact/sections/Footer/components/FooterLinks";
import { FooterContact } from "@/pages/contact/sections/Footer/components/FooterContact";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1.25fr] grid-rows-[auto] gap-y-[30px] mt-[30px] mb-10 md:gap-x-20 md:grid-cols-[0.75fr_1.25fr_0.5fr] md:gap-y-20 md:my-20">
      <FooterNewsletter />
      <FooterLinks />
      <FooterContact />
    </div>
  );
};

