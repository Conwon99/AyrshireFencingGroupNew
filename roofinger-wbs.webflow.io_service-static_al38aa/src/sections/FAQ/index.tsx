import { FAQItem } from "@/sections/FAQ/components/FAQItem";

export const FAQ = () => {
  return (
    <section className="box-border caret-transparent py-[70px] md:py-[140px]">
      <div className="box-border caret-transparent max-w-[980px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[43.2px] mb-2.5 md:text-[56px] md:leading-[67.2px]">
            Frequently asked questions
          </h2>
        </div>
        <div className="items-start box-border caret-transparent gap-x-[30px] flex flex-col justify-start gap-y-[30px]">
          <FAQItem
            question="What factors influence the price of a roofing project?"
            answer="Several factors affect pricing, including the size of the roof, the type of materials used, the complexity of the installation, and any additional services required."
            isOpen={true}
          />
          <FAQItem
            question="How long does a roof installation take?"
            isOpen={false}
          />
          <FAQItem
            question="Do you offer warranties on your roofing services?"
            isOpen={false}
          />
          <FAQItem
            question="Do you provide emergency roofing services?"
            isOpen={false}
          />
          <FAQItem
            question="Are there any hidden costs associated with your pricing plans?"
            isOpen={false}
          />
        </div>
      </div>
    </section>
  );
};
