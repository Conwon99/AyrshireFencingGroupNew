import { PhoneLink } from "@/components/PhoneLink";

export const HeroText = () => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow max-w-[1100px]">
      <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-2 sm:gap-y-3">
        <h1 className="text-white text-xs font-bold box-border caret-transparent blur-0 leading-[20px] sm:text-sm sm:leading-[22px] md:text-base md:leading-[24px] drop-shadow-lg">
          [Fence Contractor in Ayrshire]
        </h1>
        <div className="text-white text-[32px] font-semibold box-border caret-transparent blur-0 tracking-[-1.2px] leading-[40px] sm:text-[40px] sm:leading-[48px] md:text-6xl md:leading-[68px]">
          Fencing & Decking{" "}
          <span className="text-[#8a9168] text-[32px] italic font-bold box-border caret-transparent leading-[40px] sm:text-[40px] sm:leading-[48px] md:text-6xl md:leading-[68px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Ayrshire
          </span>
        </div>
        <div className="text-white text-xs box-border caret-transparent blur-0 leading-[20px] sm:text-sm sm:leading-[22px] md:text-base md:leading-[24px]">
          Offering professional fence installation, fence repairs, decking, gates, sheds, and garden rooms in Ayrshire and Glasgow.
        </div>
      </div>
    </div>
  );
};

export const HeroButtons = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-6 flex blur-0 flex-wrap gap-y-6 mt-7 md:gap-x-8 md:gap-y-8 md:mt-8">
        <div className="box-border caret-transparent flex">
          <a
            href="/contact"
            className="text-white items-center bg-[#787e59] box-border caret-transparent gap-x-4 sm:gap-x-6 flex max-w-full gap-y-5 text-center border pl-6 pr-2 py-3 sm:pl-8 sm:py-2 md:pl-10 md:py-3 rounded-[100px] border-solid border-transparent hover:bg-[#8a9168] hover:border-[#787e59] min-h-[56px] sm:min-h-[60px] md:min-h-[64px] touch-manipulation shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300"
          >
            <div className="relative box-border caret-transparent overflow-hidden">
              <div className="box-border caret-transparent">
                <div className="relative text-lg font-bold box-border caret-transparent leading-7 z-[2] sm:text-xl sm:leading-8 sm:font-bold md:text-2xl md:leading-9 md:font-bold">
                  Get a free quote
                </div>
              </div>
              <div className="absolute box-border caret-transparent w-full">
                <div className="relative text-lg font-bold box-border caret-transparent leading-7 z-[2] sm:text-xl sm:leading-8 sm:font-bold md:text-2xl md:leading-9 md:font-bold">
                  Get a free quote
                </div>
              </div>
            </div>
            <div className="text-[#5a6045] items-center bg-white box-border caret-transparent flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 justify-center overflow-hidden rounded-[50%] flex-shrink-0">
              <div className="relative box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 before:accent-auto before:caret-transparent before:text-[#5a6045] before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-[#5a6045] after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                    <img
                      src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-4.svg"
                      alt="Arrow icon for Get a free quote button"
                      className="box-border caret-transparent h-full w-full"
                      style={{ filter: 'brightness(0.3) saturate(2) hue-rotate(0deg)' }}
                    />
                  </div>
                </div>
                <div className="absolute bottom-[-200%] box-border caret-transparent left-[-200%]">
                  <div className="box-border caret-transparent h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 before:accent-auto before:caret-transparent before:text-[#5a6045] before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-[#5a6045] after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                    <img
                      src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-4.svg"
                      alt="Arrow icon for Get a free quote button"
                      className="box-border caret-transparent h-full w-full"
                      style={{ filter: 'brightness(0.3) saturate(2) hue-rotate(0deg)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="box-border caret-transparent flex">
          <PhoneLink 
            variant="hero"
            trackingLocation="hero"
            iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
            iconAlt="Phone"
            className="text-white items-center bg-transparent box-border caret-transparent gap-x-3 flex max-w-full gap-y-2 border-2 border-white rounded-[100px] px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 hover:bg-white/10 hover:border-white min-h-[56px] sm:min-h-[60px] md:min-h-[64px] touch-manipulation transition-all duration-300"
            displayClassName="text-white text-lg font-semibold box-border caret-transparent leading-7 sm:text-xl sm:leading-8 md:text-2xl md:leading-9 lg:text-3xl lg:leading-10"
          />
        </div>
      </div>
  );
};

