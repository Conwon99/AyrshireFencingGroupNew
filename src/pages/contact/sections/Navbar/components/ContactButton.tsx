import { Link } from "react-router-dom";

export const ContactButton = () => {
  return (
    <Link
      to="/contact"
      className="text-white text-sm font-bold bg-[#787e59] box-border caret-transparent inline-block leading-[19.6px] min-h-0 min-w-0 text-center border border-[#787e59] px-6 py-2 rounded-[50px] border-solid md:text-lg md:block md:leading-[25.2px] md:min-h-[auto] md:min-w-[auto] md:px-[30px] md:py-3 hover:bg-[#8a9168] hover:decoration-transparent shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300"
    >
      Contact us
    </Link>
  );
};

