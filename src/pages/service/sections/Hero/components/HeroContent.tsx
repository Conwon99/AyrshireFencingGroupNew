const formatSlugToTitle = (slug: string) => {
  // Handle special cases for better display - format as "(Service) in (Service Area)"
  const titleMap: Record<string, string> = {
    "fencing": "Fencing in Ayrshire",
    "fence-repairs": "Fence Repairs in Ayrshire",
    "decking": "Decking in Ayrshire",
    "gates": "Gates in Ayrshire",
    "sheds": "Sheds in Ayrshire",
    "garden-rooms": "Garden Rooms in Ayrshire",
    "custom-fence-construction-irvine": "Custom Fence Construction in Ayrshire",
    "wood-fence-installation-irvine": "Wood Fence Installation in Ayrshire",
    "fence-replacement-irvine": "Fence Replacement in Ayrshire",
    "garden-fence-installation-irvine": "Garden Fence Installation in Ayrshire",
    "composite-fencing-installation-irvine": "Composite Fencing Installation in Ayrshire",
    "chainlink-fencing-installation-irvine": "Chainlink Fencing Installation in Ayrshire",
    "timber-decking-irvine": "Timber Decking in Ayrshire",
    // Decking sub-pages
    "composite-decking-irvine": "Composite Decking in Ayrshire",
    "wooden-decking-irvine": "Wooden Decking in Ayrshire",
    // Fencing sub-pages
    "wooden-fencing-irvine": "Wooden Fencing in Ayrshire",
    "composite-fencing-irvine": "Composite Fencing in Ayrshire",
    "chainlink-fencing-irvine": "Chainlink Fencing in Ayrshire",
    "nylofor-fencing-irvine": "Nylofor Fencing in Ayrshire",
    "concrete-fencing-irvine": "Concrete Fencing in Ayrshire",
  };
  
  if (titleMap[slug]) {
    return titleMap[slug];
  }
  
  // Default fallback
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") + " in Ayrshire";
};

const getServiceName = (slug: string) => {
  // Get the service name without location for subtitle
  const serviceMap: Record<string, string> = {
    "fencing": "fencing",
    "fence-repairs": "fence repairs",
    "decking": "decking",
    "gates": "gates",
    "sheds": "sheds",
    "garden-rooms": "garden rooms",
    "custom-fence-construction-irvine": "custom fence construction",
    "wood-fence-installation-irvine": "wood fence installation",
    "fence-replacement-irvine": "fence replacement",
    "garden-fence-installation-irvine": "garden fence installation",
    "composite-fencing-installation-irvine": "composite fencing installation",
    "chainlink-fencing-installation-irvine": "chainlink fencing installation",
    "timber-decking-irvine": "timber decking",
    "composite-decking-irvine": "composite decking",
    "wooden-decking-irvine": "wooden decking",
    "wooden-fencing-irvine": "wooden fencing",
    "composite-fencing-irvine": "composite fencing",
    "chainlink-fencing-irvine": "chainlink fencing",
    "nylofor-fencing-irvine": "nylofor fencing",
    "concrete-fencing-irvine": "concrete fencing",
  };
  
  return serviceMap[slug] || slug.split("-").join(" ");
};

const getSubtitle = (slug: string) => {
  const serviceName = getServiceName(slug);
  
  // Service-specific benefits
  const benefitsMap: Record<string, string> = {
    "fencing": "with professional installation, expert craftsmanship, and quality materials. Transform your property with durable, secure fencing solutions tailored to your needs.",
    "fence-repairs": "with expert repair services, quality materials, and professional craftsmanship. Restore your fencing to its best condition, ensuring your property remains secure and well-maintained.",
    "decking": "with professional installation, high-quality timber, and expert craftsmanship. Transform your outdoor space with beautiful, durable decking solutions.",
    "gates": "with professional installation, quality materials, and expert craftsmanship. Enhance your property's security and appearance with custom gate solutions.",
    "sheds": "with custom design, professional installation, and quality materials. Create practical and attractive storage solutions for your property.",
    "garden-rooms": "with professional installation, quality materials, and expert craftsmanship. Create versatile additional living spaces for work, relaxation, or entertainment.",
    "custom-fence-construction-irvine": "with bespoke design, professional installation, and quality materials. Get custom fencing solutions tailored to your specific needs and property style.",
    "wood-fence-installation-irvine": "with professional installation, high-quality timber, and expert craftsmanship. Enhance your property with natural, beautiful wooden fencing.",
    "fence-replacement-irvine": "with complete removal and professional installation of new, durable fencing. Get long-lasting solutions that will protect your property for years.",
    "garden-fence-installation-irvine": "with professional installation, quality materials, and expert craftsmanship. Enhance your garden with the perfect balance of privacy, security, and visual appeal.",
    "composite-fencing-installation-irvine": "with professional installation, low-maintenance materials, and expert craftsmanship. Get durable fencing that combines the look of wood with enhanced weather resistance.",
    "chainlink-fencing-installation-irvine": "with professional installation, cost-effective materials, and expert craftsmanship. Get practical security solutions with excellent visibility and strong boundaries.",
    "timber-decking-irvine": "with professional installation, high-quality timber, and expert craftsmanship. Transform your outdoor space into a functional and attractive area.",
    "composite-decking-irvine": "with professional installation, low-maintenance materials, and expert craftsmanship. Get beautiful decking that maintains its appearance for years with minimal upkeep.",
    "wooden-decking-irvine": "with professional installation, premium timber, and expert craftsmanship. Create a traditional and versatile outdoor space with natural beauty and warmth.",
    "wooden-fencing-irvine": "with professional installation, high-quality timber, and expert craftsmanship. Enhance your property with natural, beautiful wooden fencing that can be customized to match your style.",
    "composite-fencing-irvine": "with professional installation, low-maintenance materials, and expert craftsmanship. Get durable fencing that combines the look of wood with enhanced weather resistance.",
    "chainlink-fencing-irvine": "with professional installation, cost-effective materials, and expert craftsmanship. Get practical security solutions with excellent visibility and strong boundaries.",
    "nylofor-fencing-irvine": "with professional installation, modern materials, and expert craftsmanship. Get secure privacy solutions with excellent weather resistance and contemporary appearance.",
    "concrete-fencing-irvine": "with professional installation, maximum durability materials, and expert craftsmanship. Get long-lasting protection with minimal maintenance for both residential and commercial properties.",
  };
  
  const benefits = benefitsMap[slug] || "with professional installation, expert craftsmanship, and quality materials. Transform your property with durable, secure solutions tailored to your needs.";
  
  return `We provide ${serviceName} in Ayrshire and Glasgow and the surrounding area ${benefits}`;
};

import { PhoneLink } from "@/components/PhoneLink";
import { RatingDisplay } from "@/sections/ExperienceSection/components/RatingDisplay";

interface HeroContentProps {
  slug?: string;
}

export const HeroContent = ({ slug }: HeroContentProps) => {
  const title = slug ? formatSlugToTitle(slug) : "Service in Ayrshire";
  const subtitle = slug ? getSubtitle(slug) : "We provide services in Ayrshire and Glasgow and the surrounding area.";

  return (
    <div className="box-border caret-transparent text-center w-full mb-[30px] mx-auto md:w-4/5 md:mb-[50px]">
      <h1 className="text-white text-[38px] font-bold box-border caret-transparent leading-[49.4px] mb-5 md:text-[68px] md:leading-[88.4px]">
        {title}
      </h1>
      <p className="text-slate-200 box-border caret-transparent max-w-full mx-auto md:max-w-[70%] mb-6 md:mb-8">
        {subtitle}
      </p>
      <div className="flex justify-center">
        <PhoneLink
          variant="default"
          iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
          iconAlt="Phone"
          className="inline-flex items-center gap-x-3 text-white bg-[#787e59] hover:bg-[#8a9168] px-6 py-3 rounded-[100px] font-medium transition-colors duration-300 shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)]"
          displayClassName="text-base md:text-lg font-semibold"
          showIcon={true}
        />
      </div>
      <div className="flex justify-center mt-6 md:mt-8">
        <RatingDisplay />
      </div>
    </div>
  );
};
