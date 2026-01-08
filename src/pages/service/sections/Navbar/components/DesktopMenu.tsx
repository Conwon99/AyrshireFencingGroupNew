import { DropdownMenu } from "@/pages/service/sections/Navbar/components/DropdownMenu";

export const DesktopMenu = () => {
  return (
    <nav
      role="navigation"
      className="relative items-start bg-slate-50 box-border caret-transparent hidden float-right justify-center justify-self-stretch min-h-0 min-w-0 border border-slate-200 mx-[30px] p-2.5 rounded-[20px] border-solid md:bg-white md:flex md:justify-self-auto md:min-h-[auto] md:min-w-[auto] md:border-neutral-600 md:mx-[65px] md:px-0 md:py-5 md:rounded-none md:border-0 md:border-none"
    >
      <a
        href="/"
        className="relative text-gray-900 box-border caret-transparent block max-w-[1540px] min-h-0 min-w-0 text-left decoration-transparent underline decoration-2 underline-offset-[6px] align-top mx-0 my-2.5 md:min-h-[auto] md:min-w-[auto] md:mx-[25px] md:my-0 hover:decoration-gray-900"
      >
        Home
      </a>
      <DropdownMenu />
      <a
        href="/about"
        className="relative text-gray-900 box-border caret-transparent block max-w-[1540px] min-h-0 min-w-0 text-left decoration-transparent underline decoration-2 underline-offset-[6px] align-top mx-0 my-2.5 md:min-h-[auto] md:min-w-[auto] md:mx-[25px] md:my-0 hover:decoration-gray-900"
      >
        About
      </a>
      <a
        href="/services"
        className="relative text-gray-900 box-border caret-transparent block max-w-[1540px] min-h-0 min-w-0 text-left decoration-transparent underline decoration-2 underline-offset-[6px] align-top mx-0 my-2.5 md:min-h-[auto] md:min-w-[auto] md:mx-[25px] md:my-0 hover:decoration-gray-900"
      >
        Services
      </a>
      <img
        src="https://c.animaapp.com/mial13ktyN5Jkh/assets/67a313f1157f16b6f57c2e09_shape-01.svg"
        alt="Shape 01"
        className="absolute box-border caret-transparent hidden h-full left-[-61px] max-w-full top-[0%] md:block"
      />
      <img
        src="https://c.animaapp.com/mial13ktyN5Jkh/assets/67a313f1157f16b6f57c2e09_shape-01.svg"
        alt="Shape 01"
        className="absolute box-border caret-transparent hidden h-full max-w-full right-[-61px] transform-none bottom-[0%] md:block"
      />
    </nav>
  );
};
