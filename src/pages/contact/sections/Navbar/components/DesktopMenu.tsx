import { Link } from "react-router-dom";

import { DropdownMenu } from "@/pages/contact/sections/Navbar/components/DropdownMenu";

export const DesktopMenu = () => {
  return (
    <nav
      role="navigation"
      className="relative bg-slate-200 box-border caret-transparent hidden float-right justify-self-stretch min-h-0 min-w-0 mx-[15px] px-5 py-2.5 rounded-[10px] md:bg-transparent md:block md:justify-self-center md:min-h-[auto] md:min-w-[auto] md:mx-0 md:p-0 md:rounded-none"
    >
      <Link
        to="/"
        className="relative text-gray-900 box-border caret-transparent block max-w-[1540px] min-h-0 min-w-0 text-left underline decoration-2 underline-offset-[6px] align-top mx-0 my-2.5 md:min-h-[auto] md:min-w-[auto] md:mx-[25px] md:my-0"
      >
        Home
      </Link>
      <DropdownMenu />
      <Link
        to="/about"
        className="relative text-gray-900 box-border caret-transparent block max-w-[1540px] min-h-0 min-w-0 text-left decoration-transparent underline decoration-2 underline-offset-[6px] align-top mx-0 my-2.5 md:min-h-[auto] md:min-w-[auto] md:mx-[25px] md:my-0 hover:decoration-gray-900"
      >
        About
      </Link>
      <Link
        to="/services"
        className="relative text-gray-900 box-border caret-transparent block max-w-[1540px] min-h-0 min-w-0 text-left decoration-transparent underline decoration-2 underline-offset-[6px] align-top mx-0 my-2.5 md:min-h-[auto] md:min-w-[auto] md:mx-[25px] md:my-0 hover:decoration-gray-900"
      >
        Services
      </Link>
    </nav>
  );
};

