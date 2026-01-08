export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-2 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-2 md:gap-x-[60px] md:grid-cols-[1fr_1fr_1.5fr] md:gap-y-[60px]">
      <div className="items-start box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 md:gap-x-5 md:gap-y-5">
        <a
          href="/"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Home 1
        </a>
        <a
          href="/home-2"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Home 2
        </a>
        <a
          href="/about"
          className="text-orange-500 box-border caret-transparent block"
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
          href="/service-static"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Service Static
        </a>
        <a
          href="/projects"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Projects
        </a>
        <a
          href="/pricing"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Pricing
        </a>
      </div>
      <div className="items-start box-border caret-transparent gap-x-2 flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start gap-y-2 md:gap-x-5 md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto md:gap-y-5">
        <a
          href="/blog"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Blog
        </a>
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
        <a
          href="/utility-pages/style-guide"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Style Guide
        </a>
        <a
          href="/utility-pages/instructions"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Instructions
        </a>
        <a
          href="/utility-pages/licenses"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Licenses
        </a>
        <a
          href="/utility-pages/changelog"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Changelog
        </a>
      </div>
      <div className="items-start box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 md:gap-x-5 md:gap-y-5">
        <a
          href="/utility-pages/coming-soon"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Coming Soon
        </a>
        <a
          href="/utility-pages/link-in-bio"
          className="text-white box-border caret-transparent block hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          Link in Bio
        </a>
      </div>
    </div>
  );
};

