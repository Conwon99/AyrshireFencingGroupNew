import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { NavbarCTA } from "@/sections/Navbar/components/NavbarCTA";
import { MobileMenuButton } from "@/sections/Navbar/components/MobileMenuButton";

export const NavbarContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[30px] md:px-[50px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
      <div className="items-center box-border caret-transparent gap-x-[50px] grid auto-cols-[1fr] [grid-template-areas:'._Area'] grid-cols-[1fr_auto] grid-rows-[auto] justify-items-stretch gap-y-[50px] md:items-end md:gap-x-5 md:[grid-template-areas:none] md:grid-cols-[0.5fr_1fr_0.5fr] md:gap-y-5">
        <NavbarLogo />
        <DesktopMenu />
        <NavbarCTA />
        <MobileMenuButton />
      </div>
    </div>
  );
};
