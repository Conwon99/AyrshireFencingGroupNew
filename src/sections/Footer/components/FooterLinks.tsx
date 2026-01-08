export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-2 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-2 md:gap-x-[60px] md:grid-cols-[1fr_1fr] md:gap-y-[60px]">
      <div className="items-start box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 md:gap-x-5 md:gap-y-5">
        <a
          href="/"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          About
        </a>
        <a
          href="/services"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Services
        </a>
        <a
          href="/projects"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Projects
        </a>
      </div>
      <div className="items-start box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 md:gap-x-5 md:gap-y-5">
        <a
          href="/contact"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Contact
        </a>
        <a
          href="/privacy-policy"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
};
