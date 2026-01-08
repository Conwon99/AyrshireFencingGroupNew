import { NavbarContainer } from "@/sections/Navbar/components/NavbarContainer";

export const Navbar = () => {
  return (
    <div className="fixed backdrop-blur-sm bg-[#323232] box-border caret-transparent flex justify-center w-full z-[100] px-4 top-0 md:px-5 lg:px-6">
      <NavbarContainer />
    </div>
  );
};
