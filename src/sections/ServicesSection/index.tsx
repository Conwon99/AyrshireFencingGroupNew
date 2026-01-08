
import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <section id="services" className="box-border caret-transparent pt-[70px] md:pt-[140px]">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[38px] sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            Our Services
          </h2>
        </div>
        <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:grid-cols-[1fr_1fr_1fr]">
          <ServiceCard
            href="/service/fencing"
            iconUrl="https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg"
            iconAlt="Fencing service icon"
            title="Fencing"
            description="Professional installation of all types of fencing including wooden, composite, chainlink, nylofor, and concrete fencing. Custom-designed solutions tailored to your specific needs for privacy, security, and aesthetic appeal."
          />
          <ServiceCard
            href="/service/fence-repairs"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a6c5c1d8102612221_service-02.svg"
            iconAlt="Fence repairs service icon"
            title="Fence Repairs"
            description="Expert repair services for all types of fencing. We fix damage, replace sections, and restore your fencing to its best condition."
          />
          <ServiceCard
            href="/service/decking"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a6c5c1d8102612221_service-02.svg"
            iconAlt="Decking service icon"
            title="Decking"
            description="Professional installation of timber decking for gardens and outdoor spaces. Transform your outdoor area with high-quality decking solutions."
          />
          <ServiceCard
            href="/service/gates"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a0e27a271e441091e_service-03.svg"
            iconAlt="Gate installation service icon"
            title="Gates"
            description="Supply and installation of gates for all purposes. From garden gates to secure access gates, we provide quality gate solutions to match your needs."
          />
          <ServiceCard
            href="/service/sheds"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a0e27a271e441091e_service-03.svg"
            iconAlt="Shed installation service icon"
            title="Sheds"
            description="Custom sheds designed and built to match your requirements. Professional installation of quality sheds for storage and garden use."
          />
          <ServiceCard
            href="/service/garden-rooms"
            iconUrl="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922ca00205c2937593ea_service-04.svg"
            iconAlt="Garden room installation service icon"
            title="Garden Rooms"
            description="Create additional living space with our professional garden room installations. High-quality garden rooms designed to enhance your outdoor living experience."
          />
        </div>
      </div>
    </section>
  );
};
