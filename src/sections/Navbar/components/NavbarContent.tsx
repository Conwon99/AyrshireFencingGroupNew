import { useState } from "react";
import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";
import { NavActions } from "@/sections/Navbar/components/NavActions";

export const NavbarContent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative items-center box-border caret-transparent gap-x-0 flex auto-cols-[1fr] grid-cols-[1fr_auto] grid-rows-[auto] justify-between gap-y-0 md:static md:flex md:w-full md:justify-between">
      <Logo />
      <div className="items-center box-border caret-transparent gap-x-4 flex md:gap-x-6">
        <DesktopNav isMobileMenuOpen={isMobileMenuOpen} onCloseMobileMenu={() => setIsMobileMenuOpen(false)} />
        <NavActions isMobileMenuOpen={isMobileMenuOpen} onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      </div>
    </div>
  );
};

