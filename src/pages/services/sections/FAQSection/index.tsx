import { FAQItem } from "@/pages/services/sections/FAQSection/components/FAQItem";
import { FAQCallToAction } from "@/pages/services/sections/FAQSection/components/FAQCallToAction";

const faqData = [
  {
    question: "How long does a fencing installation take?",
    answer: "Installation time varies depending on the size and complexity of your project. A typical residential fence installation can take 1-3 days, while larger or more complex projects may take longer. We'll provide a detailed timeline during your free consultation."
  },
  {
    question: "What types of fencing materials do you offer?",
    answer: "We offer a wide range of fencing materials including wooden fencing, composite fencing, chainlink fencing, nylofor fencing, and concrete fencing. Each material has its own benefits in terms of durability, maintenance, and appearance. We'll help you choose the best option for your needs and budget."
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes, we provide free, no-obligation quotes for all our services. Contact us today to discuss your requirements, and we'll provide you with a competitive, detailed quote tailored to your specific project. Our team will assess your needs and provide transparent pricing with no hidden costs."
  },
  {
    question: "How much does a decking installation cost?",
    answer: "Decking project costs depend on the size of the area, the type of materials (timber vs composite), the complexity of the design, ground preparation requirements, and any additional features like railings or steps. We provide free quotes that detail all costs so you know exactly what's included."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we provide warranties on both materials and installation work. Warranty terms vary depending on the materials chosen, and we'll detail these in your quote. We use quality materials and expert installation to ensure your project lasts for years."
  }
];

export const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="box-border caret-transparent py-[70px] md:py-[140px]" itemScope itemType="https://schema.org/FAQPage">
      <div className="box-border caret-transparent max-w-[980px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[43.2px] mb-2.5 md:text-[56px] md:leading-[67.2px]">
            Frequently asked questions
          </h2>
        </div>
        <div className="items-start box-border caret-transparent gap-x-[30px] flex flex-col justify-start gap-y-[30px]">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        <FAQCallToAction />
      </div>
    </section>
    </>
  );
};
