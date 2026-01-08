import { ServicesDropdown } from "@/sections/Navbar/components/ServicesDropdown";
import { PhoneLink } from "@/components/PhoneLink";
import { trackQuoteButton } from "@/utils/analytics";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 100; // Account for fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  // If it's an anchor link and we're on the homepage, scroll smoothly
  if (href.startsWith("#")) {
    e.preventDefault();
    const elementId = href.substring(1);
    smoothScrollTo(elementId);
  }
  // If it's a regular link (like /contact), let it navigate normally
};

interface DesktopNavProps {
  isMobileMenuOpen?: boolean;
  onCloseMobileMenu?: () => void;
}

export const DesktopNav = ({ isMobileMenuOpen = false, onCloseMobileMenu }: DesktopNavProps) => {
  const isHomePage = typeof window !== "undefined" && window.location.pathname === "/";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onCloseMobileMenu) {
      onCloseMobileMenu();
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      if (isHomePage) {
        smoothScrollTo(href.substring(1));
      } else {
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <nav
      role="navigation"
      className={`fixed box-border caret-transparent ${isMobileMenuOpen ? 'flex' : 'hidden'} basis-[0%] grow float-none justify-center min-h-0 min-w-0 inset-0 z-50 md:relative md:flex md:items-center md:float-right md:min-h-[auto] md:min-w-[auto] md:left-auto md:right-auto md:top-auto md:bottom-auto md:inset-auto md:z-auto`}
    >
      <ul
        role="list"
        className="absolute text-white items-center bg-[#323232] shadow-[rgba(0,0,0,0.3)_0px_8px_50px_0px] box-border caret-transparent gap-x-5 flex flex-col justify-start list-none min-h-screen min-w-full gap-y-6 w-full overflow-auto pt-20 pb-[30px] px-5 inset-0 md:static md:items-center md:bg-transparent md:shadow-none md:gap-x-1 md:flex-row md:justify-normal md:min-h-full md:min-w-[auto] md:gap-y-0 md:w-auto md:overflow-visible md:pt-0 md:pb-0 md:px-0 md:inset-auto md:m-0"
      >
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 w-full md:min-h-[auto] md:min-w-[auto] md:mx-1 lg:mx-1.5 md:w-auto md:flex md:items-center">
          <a
            href={isHomePage ? "#home" : "/"}
            onClick={(e) => handleLinkClick(e, isHomePage ? "#home" : "/")}
            className="text-white box-border caret-transparent flex justify-center items-center w-full text-center py-3 md:text-white hover:text-green-500 hover:border-green-500 text-lg md:text-sm lg:text-[15px] leading-6 md:leading-5 lg:leading-6"
          >
            Home
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 w-full md:min-h-[auto] md:min-w-[auto] md:mx-1 lg:mx-1.5 md:w-auto md:flex md:items-center">
          <a
            href="/about"
            onClick={() => {
              if (onCloseMobileMenu) {
                onCloseMobileMenu();
              }
            }}
            className="text-white box-border caret-transparent flex justify-center items-center w-full text-center py-3 md:text-white hover:text-green-500 hover:border-green-500 text-lg md:text-sm lg:text-[15px] leading-6 md:leading-5 lg:leading-6"
          >
            About
          </a>
        </li>
        <ServicesDropdown onCloseMobileMenu={onCloseMobileMenu} />
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 w-full md:min-h-[auto] md:min-w-[auto] md:mx-1 lg:mx-1.5 md:w-auto md:flex md:items-center">
          <a
            href="/projects"
            onClick={() => {
              if (onCloseMobileMenu) {
                onCloseMobileMenu();
              }
            }}
            className="text-white box-border caret-transparent flex justify-center items-center w-full text-center py-3 md:text-white hover:text-green-500 hover:border-green-500 text-lg md:text-sm lg:text-[15px] leading-6 md:leading-5 lg:leading-6"
          >
            Projects
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 w-full md:min-h-[auto] md:min-w-[auto] md:mx-1 lg:mx-1.5 md:w-auto md:flex md:items-center">
          <a
            href="/contact"
            onClick={() => {
              if (onCloseMobileMenu) {
                onCloseMobileMenu();
              }
            }}
            className="text-white box-border caret-transparent flex justify-center items-center w-full text-center py-3 md:text-white hover:text-green-500 hover:border-green-500 text-lg md:text-sm lg:text-[15px] leading-6 md:leading-5 lg:leading-6"
          >
            Contact
          </a>
        </li>
        {/* Mobile-only phone and CTA */}
        <li className="box-border caret-transparent flex flex-col gap-y-5 pt-6 border-t border-white/20 -mx-5 px-5 md:hidden md:mx-0 md:px-0 w-full">
          <PhoneLink
            iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
            iconAlt="Phone"
            showIcon={true}
            trackingLocation="mobile-menu"
            className="text-white items-center box-border caret-transparent gap-x-4 flex justify-center w-[calc(100%-10px)] mx-auto hover:text-[#8a9168] hover:decoration-transparent"
            displayClassName="text-white text-2xl font-semibold box-border caret-transparent"
          />
          <a
            href="/contact"
            onClick={() => {
              trackQuoteButton('mobile-menu');
              if (onCloseMobileMenu) {
                onCloseMobileMenu();
              }
            }}
            className="text-white items-center bg-[#787e59] box-border caret-transparent gap-x-2 flex justify-center w-[calc(100%-10px)] mx-auto text-center border px-8 py-4 rounded-[100px] border-solid border-transparent hover:bg-[#8a9168] hover:border-[#787e59] shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300"
          >
            <span className="text-xl font-bold box-border caret-transparent">
              Get a free quote
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

