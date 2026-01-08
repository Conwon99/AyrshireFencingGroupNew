import { ServiceImage } from "@/sections/ServiceDetail/components/ServiceImage";
import { ServiceInfo } from "@/sections/ServiceDetail/components/ServiceInfo";
import { BookingForm } from "@/sections/ServiceDetail/components/BookingForm";

export const ServiceDetail = () => {
  return (
    <section className="box-border caret-transparent mt-[-120px] md:mt-[-230px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="relative box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] mx-5 md:gap-x-[50px] md:grid-cols-[1fr_0.5fr] md:gap-y-[50px] md:mx-0">
          <div className="box-border caret-transparent">
            <ServiceImage />
            <ServiceInfo />
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
};
