import { ContactInfo } from "@/sections/Footer/components/ContactInfo";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const FooterContact = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 flex flex-col justify-between gap-y-5 md:gap-x-[30px] md:gap-y-[30px]">
      <ContactInfo />
      <SocialLinks />
    </div>
  );
};
