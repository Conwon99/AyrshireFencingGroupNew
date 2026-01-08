import { ServiceCard } from "@/pages/service/sections/ServicesSection/components/ServiceCard";

interface ServicesSectionProps {
  slug?: string;
}

// Map slugs to their main service category
const getServiceCategory = (slug: string | undefined): string | null => {
  if (!slug) return null;
  
  // Fencing-related services
  if (
    slug === "fencing" ||
    slug === "fence-repairs" ||
    slug === "custom-fence-construction-irvine" ||
    slug === "wood-fence-installation-irvine" ||
    slug === "fence-replacement-irvine" ||
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
    return "fencing";
  }
  
  // Decking-related services
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
    return "decking";
  }
  
  // Gates
  if (slug === "gates") {
    return "gates";
  }
  
  // Sheds
  if (
    slug === "sheds" ||
    slug === "cabin-design-and-building-irvine" ||
    slug === "custom-shed-design-irvine" ||
    slug === "storage-shed-design-and-building-irvine"
  ) {
    return "sheds";
  }
  
  // Garden Rooms
  if (slug === "garden-rooms") {
    return "garden-rooms";
  }
  
  // Other/repairs
  if (slug === "repairs-and-maintenance-irvine" || slug === "landscape-installations-irvine" || slug === "outdoor-step-construction-irvine") {
    return null; // These don't have a main category, show all services
  }
  
  return null;
};

export const ServicesSection = ({ slug }: ServicesSectionProps = {}) => {
  const currentCategory = getServiceCategory(slug);
  
  // All available services
  const allServices = [
    {
      href: "/service/fencing",
      iconUrl: "https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a6c5c1d8102612221_service-02.svg",
      iconAlt: "Fencing service icon",
      title: "Fencing",
      description: "Custom-designed fences tailored to your specific needs. Whether you need privacy, security, or aesthetic appeal, we create fencing solutions that match your requirements.",
      category: "fencing"
    },
    {
      href: "/service/decking",
      iconUrl: "https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a0e27a271e441091e_service-03.svg",
      iconAlt: "Decking service icon",
      title: "Decking",
      description: "Professional installation of timber decking for gardens and outdoor spaces. Transform your outdoor area with high-quality decking solutions.",
      category: "decking"
    },
    {
      href: "/service/gates",
      iconUrl: "https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922ca00205c2937593ea_service-04.svg",
      iconAlt: "Gates service icon",
      title: "Gates",
      description: "Supply and installation of gates. From garden gates to secure access gates, custom solutions to match your property style and security needs.",
      category: "gates"
    },
    {
      href: "/service/sheds",
      iconUrl: "https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922ca00205c2937593ea_service-04.svg",
      iconAlt: "Sheds service icon",
      title: "Sheds",
      description: "Custom sheds designed and built to match your requirements. Professional installation of quality sheds for storage and garden use.",
      category: "sheds"
    },
    {
      href: "/service/garden-rooms",
      iconUrl: "https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a0e27a271e441091e_service-03.svg",
      iconAlt: "Garden rooms service icon",
      title: "Garden Rooms",
      description: "Create additional living space with our professional garden room installations. High-quality garden rooms designed to enhance your outdoor living experience.",
      category: "garden-rooms"
    },
    {
      href: "/service/fence-repairs",
      iconUrl: "https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922a6c5c1d8102612221_service-02.svg",
      iconAlt: "Fence repairs service icon",
      title: "Fence Repairs",
      description: "Expert repair services for all types of fencing. We fix damage, replace sections, and restore your fencing to its best condition.",
      category: "fencing"
    }
  ];
  
  // Filter out the current service category
  const otherServices = allServices.filter(service => service.category !== currentCategory);
  
  // Show top 3 other services
  const servicesToShow = otherServices.slice(0, 3);
  
  return (
    <section className="box-border caret-transparent pt-[70px] md:pt-[140px]">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
          <h2 className="text-white text-4xl font-bold box-border caret-transparent leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            Other services
          </h2>
        </div>
        <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:grid-cols-[1fr_1fr_1fr]">
          {servicesToShow.map((service) => (
          <ServiceCard
              key={service.href}
              href={service.href}
              iconUrl={service.iconUrl}
              iconAlt={service.iconAlt}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
