import { PhoneLink } from "@/components/PhoneLink";
import { trackQuoteButton } from "@/utils/analytics";

interface NavActionsProps {
  isMobileMenuOpen?: boolean;
  onToggleMobileMenu?: () => void;
}

export const NavActions = ({ isMobileMenuOpen = false, onToggleMobileMenu }: NavActionsProps) => {
  return (
    <div className="items-center box-border caret-transparent flex basis-auto grow-0 shrink-0 justify-end justify-self-end md:basis-[0%] md:grow md:shrink md:mr-0 md:ml-auto">
      <div className="items-center box-border caret-transparent gap-x-2 hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto] md:gap-x-8 lg:gap-x-12 md:flex-nowrap md:whitespace-nowrap">
        <PhoneLink
          iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
          iconAlt="Phone"
          showIcon={true}
          trackingLocation="nav"
          className="text-white items-center box-border caret-transparent gap-x-1.5 flex justify-start max-w-full gap-y-1.5 whitespace-nowrap hover:text-[#787e59] hover:decoration-transparent hover:border-[#787e59] relative z-0"
          displayClassName="box-border caret-transparent text-base font-medium md:text-lg md:font-semibold lg:text-xl lg:font-semibold text-white"
        />
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <div className="box-border caret-transparent flex">
            <a
              href="/contact"
              onClick={() => trackQuoteButton('nav')}
              className="text-white items-center bg-[#787e59] box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 text-center border px-3 py-1.5 rounded-[100px] border-solid border-transparent md:min-h-[auto] md:min-w-[auto] md:px-5 md:py-2 lg:px-6 lg:py-2 hover:bg-[#8a9168] hover:border-[#787e59] whitespace-nowrap flex-shrink-0 relative z-10 shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300"
            >
              <div className="relative box-border caret-transparent min-h-0 min-w-0 overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                <div className="box-border caret-transparent">
                  <div className="relative text-xs font-bold box-border caret-transparent leading-4 z-[2] md:text-sm md:leading-5 md:font-bold lg:text-base lg:leading-6 lg:font-bold">
                    Get a free quote
                  </div>
                </div>
                <div className="absolute box-border caret-transparent w-full">
                  <div className="relative text-xs font-bold box-border caret-transparent leading-4 z-[2] md:text-sm md:leading-5 md:font-bold lg:text-base lg:leading-6 lg:font-bold">
                    Get a free quote
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                <div className="items-center box-border caret-transparent flex h-4 justify-center w-4 before:accent-auto before:caret-transparent before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist before:md:min-h-[auto] before:md:min-w-[auto] md:h-5 md:w-5 lg:h-6 lg:w-6 after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist after:md:min-h-[auto] after:md:min-w-[auto]">
                  <img
                    src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-3.5 w-4 md:h-4 md:w-5 lg:h-5 lg:w-6"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <button
        aria-label={isMobileMenuOpen ? "close menu" : "open menu"}
        onClick={onToggleMobileMenu}
        className="relative text-white text-2xl box-border caret-transparent block float-right min-h-[44px] min-w-[44px] p-3 cursor-pointer touch-manipulation md:hidden z-[60]"
      >
        <div className="text-white box-border caret-transparent w-6 h-6 flex items-center justify-center">
          {isMobileMenuOpen ? (
            <svg
              className="w-full h-full text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-full h-full text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

