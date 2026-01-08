import { ContactInfoCards } from "@/sections/HeroSection/components/ContactInfoCards";
import { ContactFormSection } from "@/sections/HeroSection/components/ContactFormSection";

export const HeroSection = () => {
  return (
    <section className="box-border caret-transparent pt-5 md:pt-20">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center w-full mb-[30px] mx-auto md:w-[70%] md:mb-[50px]">
          <h1 className="text-gray-900 text-[42px] font-bold box-border caret-transparent leading-[54.6px] mb-2.5 md:text-[62px] md:leading-[80.6px]">
            We’re here to help!
          </h1>
          <p className="box-border caret-transparent mb-2.5">
            Have questions? We&#39;re here to help! Contact us for assistance or
            a free quote today!
          </p>
        </div>
        <ContactInfoCards />
        <ContactFormSection />
      </div>
    </section>
  );
};
