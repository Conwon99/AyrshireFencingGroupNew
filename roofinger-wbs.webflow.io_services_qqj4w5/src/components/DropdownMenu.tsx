export const DropdownMenu = () => {
  return (
    <div className="relative box-border caret-transparent max-w-[1540px] min-h-0 min-w-0 text-left z-[900] md:min-h-[auto] md:min-w-[auto]">
      <div
        role="button"
        className="relative text-gray-900 box-border caret-transparent block decoration-transparent underline decoration-2 underline-offset-[6px] text-nowrap align-top mx-0 my-2.5 pr-5 md:inline-block md:mx-[25px] md:my-0 hover:decoration-gray-900"
      >
        <div className="box-border caret-transparent underline-offset-[6px] text-nowrap">
          Pages
        </div>
        <div className="absolute font-normal box-border caret-transparent h-[18px] leading-[18px] underline-offset-[6px] text-nowrap w-[18px] ml-auto my-auto right-0 inset-y-0 font-webflow_icons before:accent-auto before:caret-transparent before:text-gray-900 before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-webflow_icons"></div>
      </div>
      <nav className="absolute items-start box-border caret-transparent gap-x-2.5 hidden flex-col justify-start min-w-full gap-y-2.5 pt-[5px] md:min-w-[230px] md:pt-5">
        <div className="items-start bg-white box-border caret-transparent gap-x-2.5 flex-col justify-start gap-y-2.5 border border-slate-200 pt-5 pb-2.5 px-5 rounded-[20px] border-solid">
          <a
            href="/"
            className="relative box-border caret-transparent block text-nowrap align-top w-full mb-2.5 mx-auto hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
          >
            Home{" "}
          </a>
          <a
            href="/home-2"
            className="relative box-border caret-transparent block text-nowrap align-top w-full mb-2.5 mx-auto hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
          >
            Home 2
          </a>
          <a
            href="/about"
            className="relative box-border caret-transparent block text-nowrap align-top w-full mb-2.5 mx-auto hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
          >
            About
          </a>
          <a
            href="/projects"
            className="relative box-border caret-transparent block text-nowrap align-top w-full mb-2.5 mx-auto hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
          >
            Projects
          </a>
          <a
            href="/services"
            className="relative text-gray-900 box-border caret-transparent block text-nowrap align-top w-full mb-2.5 mx-auto hover:decoration-transparent"
          >
            Services
          </a>
          <a
            href="/service-static"
            className="relative box-border caret-transparent block text-nowrap align-top w-full mb-2.5 mx-auto hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
          >
            Service Static
          </a>
          <a
            href="/pricing"
            className="relative box-border caret-transparent block text-nowrap align-top w-full mb-2.5 mx-auto hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
          >
            Pricing
          </a>
          <a
            href="/blog"
            className="relative box-border caret-transparent block text-nowrap align-top w-full mb-2.5 mx-auto hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="relative box-border caret-transparent block text-nowrap align-top w-full mb-2.5 mx-auto hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
          >
            Contact
          </a>
          <a
            href="/privacy-policy"
            className="relative box-border caret-transparent block text-nowrap align-top w-full mb-2.5 mx-auto hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
          >
            Privacy Policy
          </a>
        </div>
      </nav>
    </div>
  );
};
