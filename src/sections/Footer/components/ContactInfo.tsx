import { PhoneLink } from "@/components/PhoneLink";

export const ContactInfo = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-[15px] flex flex-col justify-start gap-y-[15px] md:gap-x-5 md:gap-y-5">
      <div className="text-white items-start box-border caret-transparent gap-x-2.5 flex justify-start gap-y-2.5">
        <img
          src="https://c.animaapp.com/mhooxuovKXaEfR/assets/67108bda6761bcf051e210eb_envelope.svg"
          alt="Email icon"
          className="box-border caret-transparent h-6 max-w-full w-6 mt-1"
        />
        <a
          href="mailto:ayrshirefencinggroup@gmail.com"
          className="box-border caret-transparent block underline hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        >
          ayrshirefencinggroup@gmail.com
        </a>
      </div>
      <div className="text-white items-start box-border caret-transparent gap-x-2.5 flex justify-start gap-y-2.5">
        <img
          src="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
          alt="Phone icon"
          className="box-border caret-transparent h-6 max-w-full w-6 mt-1"
        />
        <PhoneLink
          variant="footer"
          showIcon={false}
          className="box-border caret-transparent block underline hover:text-orange-500 hover:decoration-transparent hover:border-orange-500"
        />
      </div>
      <div className="text-white items-start box-border caret-transparent gap-x-2.5 flex justify-start gap-y-2.5">
        <img
          src="https://c.animaapp.com/mhooxuovKXaEfR/assets/67108bda6d31254d6c320ce3_location-01.svg"
          alt="Location icon - Ayrshire Fencing Group service area"
          className="box-border caret-transparent h-6 max-w-full w-6 mt-1"
        />
        <div className="box-border caret-transparent">
          Serving Ayrshire, Scotland
        </div>
      </div>
    </div>
  );
};
