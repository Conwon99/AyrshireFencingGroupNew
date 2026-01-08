import { FAQItem } from "@/pages/service/sections/FAQ/components/FAQItem";

interface FAQProps {
  slug?: string;
}

// Get service-specific FAQs
const getFAQs = (slug: string | undefined) => {
  if (!slug) {
    return getDefaultFAQs();
  }

  // Fencing-related FAQs
  if (
    slug === "fencing" ||
    slug === "custom-fence-construction-irvine" ||
    slug === "wood-fence-installation-irvine" ||
    slug === "garden-fence-installation-irvine" ||
    slug === "composite-fencing-installation-irvine" ||
    slug === "chainlink-fencing-installation-irvine" ||
    slug === "wooden-fencing-irvine" ||
    slug === "composite-fencing-irvine" ||
    slug === "chainlink-fencing-irvine" ||
    slug === "nylofor-fencing-irvine" ||
    slug === "concrete-fencing-irvine" ||
    slug === "fence-design-irvine" ||
    slug === "privacy-fence-installation-irvine" ||
    slug === "security-fencing-and-metal-cage-installation-irvine"
  ) {
    return [
      {
        question: "What factors influence the price of a fencing project?",
        answer: "Several factors affect fencing pricing, including the size of the area, the type of materials used (wood, composite, chainlink, concrete, etc.), the complexity of the installation, ground conditions, and any additional features like gates or decorative elements. We provide free quotes that take all these factors into account."
      },
      {
        question: "How long does a fencing installation take?",
        answer: "The installation time depends on the size and complexity of your project. A typical residential fence installation can take 1-3 days, while larger or more complex projects may take longer. We'll provide a timeline during your free consultation."
      },
      {
        question: "What types of fencing materials do you offer?",
        answer: "We offer a wide range of fencing materials including wooden fencing, composite fencing, chainlink fencing, nylofor fencing, and concrete fencing. Each material has its own benefits in terms of durability, maintenance, and appearance. We'll help you choose the best option for your needs and budget."
      },
      {
        question: "Do you offer warranties on your fencing work?",
        answer: "Yes, we stand behind our work with warranties on both materials and installation. The specific warranty terms depend on the materials used and will be detailed in your quote. We use high-quality materials and expert installation to ensure long-lasting results."
      },
      {
        question: "What areas do you serve?",
        answer: "We serve Ayrshire, Glasgow, and the surrounding areas. Our team is fully qualified and insured, and we're happy to discuss projects throughout the region. Contact us for a free consultation to see if we can help with your fencing project."
      }
    ];
  }

  // Fence repairs FAQs
  if (slug === "fence-repairs" || slug === "fence-replacement-irvine") {
    return [
      {
        question: "What types of fence repairs do you offer?",
        answer: "We offer comprehensive fence repair services including fixing damaged panels, replacing broken posts, repairing gates, fixing loose or broken boards, and addressing weather damage. We can repair all types of fencing including wood, composite, chainlink, and concrete."
      },
      {
        question: "How quickly can you repair my fence?",
        answer: "We aim to respond quickly to repair requests, especially for urgent security issues. Response times depend on the extent of damage and our current schedule, but we'll work with you to address repairs as soon as possible. Contact us for an assessment and timeline."
      },
      {
        question: "When should I consider fence replacement instead of repair?",
        answer: "Fence replacement is typically recommended when the damage is extensive, the fence is very old and deteriorating, or when repairs would cost more than replacement. During our assessment, we'll advise whether repair or replacement is the better option for your situation."
      },
      {
        question: "Do you offer warranties on fence repairs?",
        answer: "Yes, we provide warranties on our repair work. The warranty terms depend on the type of repair and materials used. We ensure all repairs are completed to a high standard using quality materials to provide lasting results."
      },
      {
        question: "What areas do you serve for fence repairs?",
        answer: "We provide fence repair services throughout Ayrshire, Glasgow, and surrounding areas. Contact us for a free assessment of your fence repair needs."
      }
    ];
  }

  // Decking-related FAQs
  if (
    slug === "decking" ||
    slug === "timber-decking-irvine" ||
    slug === "composite-decking-irvine" ||
    slug === "wooden-decking-irvine" ||
    slug === "deck-construction-irvine" ||
    slug === "patio-construction-irvine" ||
    slug === "deck-repair-irvine" ||
    slug === "deck-replacement-irvine" ||
    slug === "deck-design-irvine" ||
    slug === "patio-decks-irvine" ||
    slug === "patio-design-irvine"
  ) {
    return [
      {
        question: "What factors influence the price of a decking project?",
        answer: "Decking project costs depend on the size of the area, the type of materials (timber vs composite), the complexity of the design, ground preparation requirements, and any additional features like railings, steps, or built-in seating. We provide free quotes that detail all costs."
      },
      {
        question: "How long does decking installation take?",
        answer: "Installation time varies based on the size and complexity of your decking project. A standard decking installation typically takes 2-5 days, including ground preparation and finishing. We'll provide a detailed timeline during your consultation."
      },
      {
        question: "What's the difference between timber and composite decking?",
        answer: "Timber decking offers natural beauty and can be more cost-effective initially, but requires regular maintenance like staining or sealing. Composite decking is low-maintenance, highly durable, and resistant to weather, but typically costs more upfront. Both have their advantages, and we can help you choose based on your preferences and budget."
      },
      {
        question: "Do you offer warranties on decking installations?",
        answer: "Yes, we provide warranties on both materials and installation work. Warranty terms vary depending on the materials chosen, and we'll detail these in your quote. We use quality materials and expert installation to ensure your decking lasts for years."
      },
      {
        question: "What areas do you serve for decking projects?",
        answer: "We serve Ayrshire, Glasgow, and surrounding areas for all decking projects. Contact us for a free consultation to discuss your decking needs and get a detailed quote."
      }
    ];
  }

  // Gates FAQs
  if (slug === "gates") {
    return [
      {
        question: "What types of gates do you install?",
        answer: "We install a wide variety of gates including garden gates, driveway gates, security gates, and custom-designed gates. We work with various materials including wood, composite, metal, and can create gates to match your property's style and security needs."
      },
      {
        question: "How long does gate installation take?",
        answer: "Gate installation typically takes 1-2 days, depending on the complexity of the gate and whether new posts need to be installed. Simple gate replacements can often be completed in a single day. We'll provide a timeline during your consultation."
      },
      {
        question: "Do you offer automated gate systems?",
        answer: "Yes, we can install automated gate systems for added convenience and security. We'll discuss your requirements and recommend the best automation solution for your gate type and usage needs."
      },
      {
        question: "What factors affect gate pricing?",
        answer: "Gate pricing depends on the size, materials, design complexity, whether new posts are needed, and any automation features. We provide free quotes that break down all costs so you know exactly what's included."
      },
      {
        question: "What areas do you serve for gate installation?",
        answer: "We provide gate installation services throughout Ayrshire, Glasgow, and surrounding areas. Contact us for a free consultation and quote for your gate project."
      }
    ];
  }

  // Sheds FAQs
  if (
    slug === "sheds" ||
    slug === "cabin-design-and-building-irvine" ||
    slug === "custom-shed-design-irvine" ||
    slug === "storage-shed-design-and-building-irvine"
  ) {
    return [
      {
        question: "What types of sheds do you build?",
        answer: "We build custom sheds in various sizes and styles, from small garden storage sheds to larger workshops and storage buildings. We can design sheds to match your property and meet your specific storage or workspace needs."
      },
      {
        question: "How long does shed construction take?",
        answer: "Shed construction time depends on the size and complexity of the design. A standard shed can typically be built in 2-5 days, while larger or more complex structures may take longer. We'll provide a timeline during your consultation."
      },
      {
        question: "What materials do you use for sheds?",
        answer: "We use high-quality timber and other durable materials to ensure your shed is built to last. We can discuss material options and finishes to match your preferences and budget during your consultation."
      },
      {
        question: "Do you offer custom shed designs?",
        answer: "Yes, we specialize in custom shed designs tailored to your specific needs. Whether you need specific dimensions, particular features, or a design that matches your property, we can create a shed that meets your requirements."
      },
      {
        question: "What areas do you serve for shed building?",
        answer: "We provide shed building services throughout Ayrshire, Glasgow, and surrounding areas. Contact us for a free consultation to discuss your shed requirements."
      }
    ];
  }

  // Garden Rooms FAQs
  if (slug === "garden-rooms") {
    return [
      {
        question: "What can garden rooms be used for?",
        answer: "Garden rooms are versatile spaces that can be used as home offices, studios, gyms, playrooms, guest accommodation, or simply as peaceful retreats. They provide additional living space without the need for planning permission in most cases."
      },
      {
        question: "How long does garden room installation take?",
        answer: "Installation time depends on the size and specifications of your garden room. A typical garden room installation takes 1-2 weeks, including foundation work, construction, and finishing. We'll provide a detailed timeline during your consultation."
      },
      {
        question: "Do garden rooms require planning permission?",
        answer: "Most garden rooms don't require planning permission if they meet certain criteria (size, height, location). However, regulations can vary, and we'll advise you on the requirements for your specific project. We can also help with planning applications if needed."
      },
      {
        question: "Are garden rooms insulated?",
        answer: "Yes, our garden rooms are fully insulated to ensure they're comfortable year-round. We use quality insulation materials to create a space that's warm in winter and cool in summer, making them suitable for year-round use."
      },
      {
        question: "What areas do you serve for garden room installation?",
        answer: "We provide garden room installation services throughout Ayrshire, Glasgow, and surrounding areas. Contact us for a free consultation to discuss your garden room project."
      }
    ];
  }

  // Default FAQs for other services
  return getDefaultFAQs();
};

const getDefaultFAQs = () => {
  return [
    {
      question: "What factors influence the price of a project?",
      answer: "Several factors affect pricing, including the size of the area, the type of materials used, the complexity of the installation, ground preparation requirements, and any additional services or features required. We provide free quotes that detail all costs."
    },
    {
      question: "How long does installation take?",
      answer: "Installation time varies depending on the size and complexity of your project. We'll provide a detailed timeline during your free consultation, and we work efficiently to complete projects on schedule."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we provide warranties on both materials and installation work. Warranty terms depend on the materials and services provided, and we'll detail these in your quote. We stand behind our work with quality materials and expert craftsmanship."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Ayrshire, Glasgow, and the surrounding areas. Our team is fully qualified and insured, and we're happy to discuss projects throughout the region. Contact us for a free consultation."
    },
    {
      question: "Are there any hidden costs?",
      answer: "No, we believe in transparent pricing. Our free quotes include all costs, and we'll discuss any potential additional expenses upfront. There are no hidden fees, and we'll keep you informed throughout the project."
    }
  ];
};

export const FAQ = ({ slug }: FAQProps = {}) => {
  const faqs = getFAQs(slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
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
          <h2 className="text-white text-4xl font-bold box-border caret-transparent leading-[43.2px] mb-2.5 md:text-[56px] md:leading-[67.2px]">
            Frequently asked questions
          </h2>
        </div>
        <div className="items-start box-border caret-transparent gap-x-[30px] flex flex-col justify-start gap-y-[30px]">
          {faqs.map((faq, index) => (
          <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
