
import { PhoneLink } from "@/components/PhoneLink";

export const CTASection = () => {
  return (
    <section className="box-border caret-transparent pt-[60px] pb-[50px] md:pt-[130px] md:pb-[70px]">
      <div className="relative bg-gray-800 box-border caret-transparent mx-[15px] pb-2.5 px-2.5 rounded-[20px] md:mx-[30px] md:pb-5 md:px-5">
        <div className="relative bg-gray-700 box-border caret-transparent flex flex-col items-center gap-y-5 p-[15px] rounded-[20px] text-center md:gap-y-[30px] md:p-[70px]">
          <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[28.8px] md:text-[50px] md:leading-[60px]">
            Get a free quote today
          </h2>
          <p className="text-gray-200 box-border caret-transparent max-w-md mb-2.5">
            Get your free quote today for bespoke fencing, sheds & gates, trellis, decking, palisade fencing, or fencing repairs. Fully qualified and insured contractors with over 13 years' experience.
          </p>
          <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
            <a href="/contact"
              className="text-white text-xl font-bold bg-[#787e59] box-border caret-transparent inline-flex items-center justify-center gap-x-4 leading-[28px] text-center border border-[#787e59] px-8 py-4 rounded-[50px] border-solid md:text-2xl md:leading-[36px] md:px-12 md:py-6 hover:bg-[#8a9168] hover:decoration-transparent shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300 min-h-[64px] md:min-h-[80px] w-full"
            >
              Request a free quote
            </a>
            <PhoneLink
              variant="default"
              iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
              iconAlt="Phone"
              className="text-white text-lg font-semibold bg-[#787e59] box-border caret-transparent inline-flex items-center justify-center gap-x-3 text-center border border-[#787e59] px-8 py-4 rounded-[50px] border-solid md:text-xl md:leading-[28px] md:px-12 md:py-6 hover:bg-[#8a9168] hover:decoration-transparent shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300 min-h-[64px] md:min-h-[80px] w-full"
              displayClassName="text-white text-lg font-semibold md:text-xl"
              showIcon={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
