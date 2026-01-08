import { PhoneLink as TrackedPhoneLink } from "@/components/PhoneLink";

export const PhoneLink = () => {
  return (
    <TrackedPhoneLink
      variant="hero"
      iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
      iconAlt=""
      className="text-white items-center box-border caret-transparent gap-x-2.5 flex justify-start max-w-full gap-y-2.5 hover:text-[#787e59] hover:decoration-transparent hover:border-[#787e59]"
      displayClassName="box-border caret-transparent"
    />
  );
};
