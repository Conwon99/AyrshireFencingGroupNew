import { Logo } from "@/components/Logo";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";
import { ContactButton } from "@/sections/Header/components/ContactButton";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Navbar = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-[50px] grid auto-cols-[1fr] [grid-template-areas:'._Area'] grid-cols-[1fr_auto] grid-rows-[auto] justify-items-stretch gap-y-[50px] md:items-end md:gap-x-5 md:[grid-template-areas:none] md:grid-cols-[0.5fr_1fr_0.5fr] md:gap-y-5">
      <Logo />
      <DesktopMenu />
      <div className="items-center box-border caret-transparent gap-x-5 hidden col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-end min-h-0 min-w-0 gap-y-5 md:gap-x-[35px] md:flex md:min-h-[auto] md:min-w-[auto] md:gap-y-[35px]">
        <ContactButton />
      </div>
      <MobileMenuButton />
    </div>
  );
};
