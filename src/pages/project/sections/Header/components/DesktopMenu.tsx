import { DropdownMenu } from "@/pages/project/components/DropdownMenu";

export const DesktopMenu = () => {
  return (
    <nav
      role="navigation"
      className="relative bg-slate-200 box-border caret-transparent hidden float-right justify-self-stretch min-h-0 min-w-0 mx-[15px] px-5 py-2.5 rounded-[10px] md:bg-transparent md:block md:justify-self-center md:min-h-[auto] md:min-w-[auto] md:mx-0 md:p-0 md:rounded-none"
    >
      <a
        href="/"
        className="relative text-gray-900 box-border caret-transparent block max-w-[1540px] text-left decoration-transparent underline decoration-2 underline-offset-[6px] align-top mx-0 my-2.5 md:inline-block md:mx-[25px] md:my-0 hover:decoration-gray-900"
      >
        Home
      </a>
      <DropdownMenu />
      <a
        href="/about"
        className="relative text-gray-900 box-border caret-transparent block max-w-[1540px] text-left decoration-transparent underline decoration-2 underline-offset-[6px] align-top mx-0 my-2.5 md:inline-block md:mx-[25px] md:my-0 hover:decoration-gray-900"
      >
        About
      </a>
      <a
        href="/services"
        className="relative text-gray-900 box-border caret-transparent block max-w-[1540px] text-left decoration-transparent underline decoration-2 underline-offset-[6px] align-top mx-0 my-2.5 md:inline-block md:mx-[25px] md:my-0 hover:decoration-gray-900"
      >
        Services
      </a>
    </nav>
  );
};
