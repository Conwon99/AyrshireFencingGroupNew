import { PhoneLink } from "@/components/PhoneLink";

export const FooterContact = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 flex flex-col justify-between gap-y-5 md:gap-x-[30px] md:gap-y-[30px]">
      <div className="items-start box-border caret-transparent gap-x-[15px] flex flex-col justify-start gap-y-[15px] md:gap-x-5 md:gap-y-5">
        <div className="text-white items-start box-border caret-transparent gap-x-2.5 flex justify-start gap-y-2.5">
          <img
            src="https://c.animaapp.com/mhqqiiyn5JzZir/assets/67108bda6761bcf051e210eb_envelope.svg"
            alt="Email icon"
            className="box-border caret-transparent h-6 max-w-full w-6 mt-1"
          />
          <a
            href="mailto:ayrshirefencinggroup@gmail.com"
            className="box-border caret-transparent block underline hover:text-[#787e59] hover:decoration-transparent hover:border-[#787e59]"
          >
            ayrshirefencinggroup@gmail.com
          </a>
        </div>
        <div className="text-white items-start box-border caret-transparent gap-x-2.5 flex justify-start gap-y-2.5">
          <img
            src="https://c.animaapp.com/mhqqiiyn5JzZir/assets/670f86de88858acaf330ddd9_phone.svg"
            alt="Phone icon"
            className="box-border caret-transparent h-6 max-w-full w-6 mt-1"
          />
          <PhoneLink
            variant="footer"
            showIcon={false}
            className="box-border caret-transparent block underline hover:text-[#787e59] hover:decoration-transparent hover:border-[#787e59]"
          />
        </div>
        <div className="text-white items-start box-border caret-transparent gap-x-2.5 flex justify-start gap-y-2.5">
          <img
            src="https://c.animaapp.com/mhqqiiyn5JzZir/assets/67108bda6d31254d6c320ce3_location-01.svg"
            alt="Location icon - Ayrshire Fencing Group service area"
            className="box-border caret-transparent h-6 max-w-full w-6 mt-1"
          />
          <div className="box-border caret-transparent">
            Serving Ayrshire, Scotland
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-[15px] flex gap-y-[15px]">
        <a
          href="https://www.instagram.com/"
          className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-[#787e59] hover:decoration-transparent"
        >
          <img
            src="https://c.animaapp.com/mhqqiiyn5JzZir/assets/670f58e333797fd0eb9fa085_instagram.svg"
            alt="Instagram icon - Follow Ayrshire Fencing Group on Instagram"
            className="box-border caret-transparent h-5 max-w-full w-5"
          />
        </a>
        <a
          href="https://www.facebook.com/100089970103885/"
          className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-[#787e59] hover:decoration-transparent"
        >
          <img
            src="https://c.animaapp.com/mhqqiiyn5JzZir/assets/670f58e375e253beb4db0e54_facebook.svg"
            alt="Facebook icon - Follow Ayrshire Fencing Group on Facebook"
            className="box-border caret-transparent h-5 max-w-full w-5"
          />
        </a>
        <a
          href="https://twitter.com/"
          className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-[#787e59] hover:decoration-transparent"
        >
          <img
            src="https://c.animaapp.com/mhqqiiyn5JzZir/assets/670f58e3c0bab665af9c269a_twitter-x.svg"
            alt="Twitter icon - Follow Ayrshire Fencing Group on Twitter"
            className="box-border caret-transparent h-5 max-w-full w-5"
          />
        </a>
      </div>
    </div>
  );
};

