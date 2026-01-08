import { useState, useEffect } from "react";

interface ServicesDropdownProps {
  onCloseMobileMenu?: () => void;
}

export const ServicesDropdown = ({ onCloseMobileMenu }: ServicesDropdownProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    { name: "Fencing", href: "/service/fencing" },
    { name: "Fence Repairs", href: "/service/fence-repairs" },
    { name: "Decking", href: "/service/decking" },
    { name: "Gates", href: "/service/gates" },
    { name: "Sheds", href: "/service/sheds" },
    { name: "Garden Rooms", href: "/service/garden-rooms" },
  ];

  const handleLinkClick = () => {
    if (onCloseMobileMenu) {
      onCloseMobileMenu();
    }
    setIsOpen(false);
  };

  return (
    <li
      className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 w-full md:min-h-[auto] md:min-w-[auto] md:mx-1 lg:mx-1.5 md:w-auto md:flex md:items-center relative"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <a
        href="/services"
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className="text-white box-border caret-transparent flex justify-center items-center w-full text-center py-3 md:text-white hover:text-green-500 hover:border-green-500 text-lg md:text-sm lg:text-[15px] leading-6 md:leading-5 lg:leading-6"
      >
        Services
      </a>
      {isOpen && (
        <nav className="absolute items-center box-border caret-transparent gap-x-2.5 flex flex-col justify-start w-full gap-y-2.5 pt-[5px] top-full left-0 z-50 md:min-w-[200px] md:w-auto md:items-start md:pt-2">
          <div className="items-center bg-white box-border caret-transparent gap-x-2.5 flex-col justify-start gap-y-3 border border-slate-200 shadow-lg pt-4 pb-4 px-5 rounded-[20px] border-solid w-full md:w-auto md:items-start">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                data-astro-prefetch="false"
                onClick={handleLinkClick}
                className="relative box-border caret-transparent block text-center w-full mb-3 text-lg text-gray-900 hover:text-[#787e59] hover:decoration-transparent last:mb-0 transition-colors md:text-left md:text-sm md:text-nowrap"
              >
                {service.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </li>
  );
};

