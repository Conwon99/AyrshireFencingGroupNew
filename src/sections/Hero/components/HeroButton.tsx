import { trackQuoteButton } from "@/utils/analytics";

export const HeroButton = () => {
  const handleClick = () => {
    trackQuoteButton('hero');
  };

  return (
    <a
      href="/contact"
      onClick={handleClick}
      className="text-white text-sm font-bold bg-[#787e59] box-border caret-transparent block leading-[19.6px] text-center border border-[#787e59] px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:bg-[#8a9168] hover:decoration-transparent shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300"
    >
      Get a free quote
    </a>
  );
};
