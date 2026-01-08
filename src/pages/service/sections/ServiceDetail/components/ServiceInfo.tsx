import { PhoneLink } from "@/components/PhoneLink";

interface ServiceInfoProps {
  slug?: string;
}

export const ServiceInfo = ({ slug }: ServiceInfoProps = {}) => {
  const isDecking = slug === "decking" || slug === "timber-decking-irvine" || slug === "composite-decking-irvine" || slug === "wooden-decking-irvine";
  const isFencing = slug === "fencing" || slug === "custom-fence-construction-irvine" || slug === "wood-fence-installation-irvine" || slug === "garden-fence-installation-irvine" || slug === "composite-fencing-installation-irvine" || slug === "chainlink-fencing-installation-irvine" || slug === "wooden-fencing-irvine" || slug === "composite-fencing-irvine" || slug === "chainlink-fencing-irvine" || slug === "nylofor-fencing-irvine" || slug === "concrete-fencing-irvine";
  const isFenceRepairs = slug === "fence-repairs" || slug === "fence-replacement-irvine";
  const isGates = slug === "gates";
  const isSheds = slug === "sheds";
  const isGardenRooms = slug === "garden-rooms";
  
  // Specific service types
  const isCustomFence = slug === "custom-fence-construction-irvine";
  const isWoodFence = slug === "wood-fence-installation-irvine" || slug === "wooden-fencing-irvine";
  const isFenceReplacement = slug === "fence-replacement-irvine";
  const isGardenFence = slug === "garden-fence-installation-irvine";
  const isCompositeFence = slug === "composite-fencing-installation-irvine" || slug === "composite-fencing-irvine";
  const isChainlinkFence = slug === "chainlink-fencing-installation-irvine" || slug === "chainlink-fencing-irvine";
  const isNyloforFence = slug === "nylofor-fencing-irvine";
  const isConcreteFence = slug === "concrete-fencing-irvine";
  const isTimberDecking = slug === "timber-decking-irvine";
  const isCompositeDecking = slug === "composite-decking-irvine";
  const isWoodenDecking = slug === "wooden-decking-irvine";

  const getTitle = () => {
    if (isCompositeDecking) return "Need Expert Composite Decking In Ayrshire?";
    if (isWoodenDecking) return "Need Expert Wooden Decking In Ayrshire?";
    if (isNyloforFence) return "Need Expert Nylofor Fencing In Ayrshire?";
    if (isConcreteFence) return "Need Expert Concrete Fencing In Ayrshire?";
    if (isCustomFence) return "Need Expert Custom Fence Construction In Ayrshire?";
    if (isWoodFence) return "Need Expert Wood Fence Installation In Ayrshire?";
    if (isFenceReplacement) return "Need Expert Fence Replacement In Ayrshire?";
    if (isGardenFence) return "Need Expert Garden Fence Installation In Ayrshire?";
    if (isCompositeFence) return "Need Expert Composite Fencing Installation In Ayrshire?";
    if (isChainlinkFence) return "Need Expert Chainlink Fencing Installation In Ayrshire?";
    if (isTimberDecking) return "Need Expert Timber Decking In Ayrshire?";
    if (isDecking) return "Need Expert Decking In Ayrshire?";
    if (isFencing) return "Need Expert Fencing In Ayrshire?";
    if (isFenceRepairs) return "Need Expert Fence Repairs In Ayrshire?";
    if (isGates) return "Need Expert Gates In Ayrshire?";
    if (isSheds) return "Need Expert Sheds In Ayrshire?";
    if (isGardenRooms) return "Need Expert Garden Rooms In Ayrshire?";
    return "Need Expert Services In Ayrshire?";
  };

  const getDescription = () => {
    if (isCompositeDecking) return "Professional composite decking installation in Ayrshire. Our composite decking offers the beauty of wood with enhanced durability and minimal maintenance. Perfect for properties requiring a long-lasting, weather-resistant decking solution that maintains its appearance for years.";
    if (isWoodenDecking) return "Professional wooden decking installation in Ayrshire using high-quality timber. Our wooden decking provides natural beauty and warmth, creating a traditional and versatile outdoor space. We use premium timber that can be customized to match your property's style and preferences.";
    if (isNyloforFence) return "Nylofor fencing installation in Ayrshire providing modern, secure privacy solutions. Our nylofor fencing offers excellent privacy and weather resistance with a contemporary appearance. This durable fencing material is perfect for properties requiring both security and aesthetic appeal.";
    if (isConcreteFence) return "Concrete fencing installation in Ayrshire offering maximum durability and security. Our concrete fencing provides long-lasting protection with minimal maintenance, making it ideal for properties requiring robust, permanent boundary solutions. Perfect for both residential and commercial applications.";
    if (isCustomFence) return "Our custom fence construction services in Ayrshire provide bespoke fencing solutions tailored to your specific needs. We work closely with you to design and build fences that match your property's style, whether you need privacy, security, or aesthetic appeal.";
    if (isWoodFence) return "Professional wood fence installation in Ayrshire using high-quality timber. Our wooden fencing offers natural beauty and can be customized to match your property's style, providing both security and aesthetic appeal.";
    if (isFenceReplacement) return "Expert fence replacement services in Ayrshire. When your existing fence is beyond repair, we provide complete replacement services, removing old fencing and installing new, durable solutions that will last for years.";
    if (isGardenFence) return "Garden fence installation in Ayrshire designed to enhance your outdoor space. Our garden fencing solutions provide the perfect balance of privacy, security, and visual appeal for your garden and property boundaries.";
    if (isCompositeFence) return "Composite fencing installation in Ayrshire offering low-maintenance and durable solutions. Our composite fencing combines the look of wood with enhanced weather resistance, perfect for properties requiring minimal upkeep.";
    if (isChainlinkFence) return "Chainlink fencing installation in Ayrshire providing cost-effective and practical security solutions. Our chainlink fencing offers excellent visibility while maintaining strong boundaries and security for your property.";
    if (isTimberDecking) return "Professional timber decking installation in Ayrshire. We use high-quality timber to create beautiful, durable decking that transforms your outdoor space into a functional and attractive area for relaxation and entertainment.";
    if (isDecking) return "Our decking installation services are designed to transform your outdoor space with durable, high-quality timber decking. Whether you need decking for your garden, patio, or commercial property, we offer various materials and styles to suit your needs and enhance your outdoor living area.";
    if (isFencing) return "Our fencing installation services are designed to provide your property with durable, secure fencing that enhances both security and aesthetic appeal. We offer a wide range of fencing types to suit every need and budget.";
    if (isFenceRepairs) return "Expert repair services for all types of fencing. We fix damage, replace sections, and restore your fencing to its best condition, ensuring your property remains secure and well-maintained.";
    if (isGates) return "Supply and installation of gates for all purposes. From garden gates to secure access gates, we provide quality gate solutions to match your needs and enhance your property's security and appearance.";
    if (isSheds) return "Custom sheds designed and built to match your requirements. Professional installation of quality sheds for storage and garden use, providing practical and attractive solutions for your outdoor space.";
    if (isGardenRooms) return "Create additional living space with our professional garden room installations. High-quality garden rooms designed to enhance your outdoor living experience, providing versatile spaces for work, relaxation, or entertainment.";
    return "Our services are designed to provide your property with durable, weather-resistant solutions that enhance its look. We offer various materials and styles to suit your needs.";
  };

  return (
    <div className="items-start box-border caret-transparent gap-x-5 flex flex-col justify-start gap-y-5 md:gap-x-[50px] md:gap-y-[50px]">
      <div className="box-border caret-transparent">
        <h2 className="text-white text-[22px] font-bold box-border caret-transparent leading-[30.8px] mb-2.5 md:text-[34px] md:leading-[40.8px] md:mb-[30px]">
          {getTitle()}
        </h2>
        {(isCompositeDecking || isWoodenDecking) && (
          <p className="text-gray-200 box-border caret-transparent mb-3">
            <a href="/service/decking" className="text-[#787e59] hover:underline font-medium">
              ← Back to Decking Services
            </a>
          </p>
        )}
        {(slug === "wooden-fencing-irvine" || slug === "composite-fencing-irvine" || slug === "chainlink-fencing-irvine" || isNyloforFence || isConcreteFence) && (
          <p className="text-gray-200 box-border caret-transparent mb-3">
            <a href="/service/fencing" className="text-[#787e59] hover:underline font-medium">
              ← Back to Fencing Services
            </a>
          </p>
        )}
        <p className="text-gray-200 box-border caret-transparent mb-5 md:mb-6">
          {getDescription()}
        </p>
        <p className="text-gray-200 box-border caret-transparent mb-5 md:mb-6">
          {isDecking && "At Ayrshire Fencing Group, we understand that decking is more than just an outdoor surface - it's an extension of your living space. Our decking installations in Ayrshire and Glasgow are designed to create beautiful, functional areas where you can relax, entertain, and enjoy your garden year-round. We work with both timber and composite materials, each offering unique benefits for different applications and preferences."}
          {isFencing && !isWoodFence && !isCompositeFence && !isChainlinkFence && !isNyloforFence && !isConcreteFence && "Our fencing solutions in Ayrshire are designed to provide security, privacy, and aesthetic appeal for your property. Whether you need boundary fencing, privacy screening, or decorative fencing, we offer a comprehensive range of materials and styles to suit every requirement. From traditional wooden fencing to modern composite and concrete options, we help you choose the perfect solution for your property."}
          {isFenceRepairs && "When your fencing needs attention, our expert repair services in Ayrshire can restore it to perfect condition. We handle all types of fence repairs, from minor damage to complete section replacements. Our team quickly identifies issues and provides cost-effective solutions that extend the life of your fencing while maintaining its appearance and functionality."}
          {isGates && "Gates are an essential element of property security and access control. Our gate installation services in Ayrshire cover everything from garden gates to secure access gates, all designed to complement your property's style while providing reliable security. We work with various materials and designs to create gates that are both functional and attractive."}
          {isSheds && "Custom sheds provide valuable storage space and can enhance your property's functionality. Our shed building services in Ayrshire create practical, attractive storage solutions tailored to your specific needs. Whether you need a small garden shed or a larger storage building, we design and construct sheds that are built to last and complement your property."}
          {isGardenRooms && "Garden rooms offer versatile additional living space that can be used for work, relaxation, or entertainment. Our garden room installations in Ayrshire and Glasgow create comfortable, well-insulated spaces that extend your home's functionality. These versatile structures can serve as home offices, studios, gyms, or simply peaceful retreats in your garden."}
        </p>
        <div className="mb-5 md:mb-6">
          <PhoneLink
            variant="default"
            iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
            iconAlt="Phone"
            className="inline-flex items-center gap-x-3 text-white bg-[#787e59] hover:bg-[#8a9168] px-6 py-3 rounded-[100px] font-medium transition-colors duration-300 shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)]"
            displayClassName="text-base md:text-lg font-semibold"
            showIcon={true}
          />
        </div>
        {isDecking && !isCompositeDecking && !isWoodenDecking && !isTimberDecking && (
          <div className="box-border caret-transparent mt-5">
            <h3 className="text-white text-lg font-bold box-border caret-transparent leading-[25.2px] mb-3 md:text-xl md:leading-[28px]">
              Types of Decking We Install:
            </h3>
            <ul
              role="list"
              className="box-border caret-transparent mt-[15px] mb-2.5 pl-5 md:mt-[20px]"
            >
              <li className="text-gray-200 box-border caret-transparent mb-3">
                <strong><a href="/service/wooden-decking-irvine" className="text-[#787e59] hover:underline">Wooden Decking:</a></strong> Traditional and natural, wooden decking provides warmth and beauty. We use high-quality timber that can be customized to match your property's style.
              </li>
              <li className="text-gray-200 box-border caret-transparent mb-3">
                <strong><a href="/service/composite-decking-irvine" className="text-[#787e59] hover:underline">Composite Decking:</a></strong> Low-maintenance and durable, composite decking combines the look of wood with enhanced weather resistance and minimal upkeep requirements.
              </li>
            </ul>
          </div>
        )}
        {isFencing && !isWoodFence && !isCompositeFence && !isChainlinkFence && !isNyloforFence && !isConcreteFence && (
          <div className="box-border caret-transparent mt-5">
            <h3 className="text-white text-lg font-bold box-border caret-transparent leading-[25.2px] mb-3 md:text-xl md:leading-[28px]">
              Types of Fencing We Install:
            </h3>
            <ul
              role="list"
              className="box-border caret-transparent mt-[15px] mb-2.5 pl-5 md:mt-[20px]"
            >
              <li className="text-gray-200 box-border caret-transparent mb-3">
                <strong><a href="/service/wooden-fencing-irvine" className="text-[#787e59] hover:underline">Wooden Fencing:</a></strong> Traditional and versatile, wooden fencing offers natural beauty and can be customized to match your property's style.
              </li>
              <li className="text-gray-200 box-border caret-transparent mb-3">
                <strong><a href="/service/composite-fencing-irvine" className="text-[#787e59] hover:underline">Composite Fencing:</a></strong> Low-maintenance and durable, composite fencing combines the look of wood with enhanced weather resistance.
              </li>
              <li className="text-gray-200 box-border caret-transparent mb-3">
                <strong><a href="/service/chainlink-fencing-irvine" className="text-[#787e59] hover:underline">Chainlink Fencing:</a></strong> Cost-effective and practical, chainlink fencing provides security and visibility while maintaining boundaries.
              </li>
              <li className="text-gray-200 box-border caret-transparent mb-3">
                <strong><a href="/service/nylofor-fencing-irvine" className="text-[#787e59] hover:underline">Nylofor Fencing:</a></strong> Modern and secure, nylofor fencing offers excellent privacy and weather resistance with a contemporary appearance.
              </li>
              <li className="text-gray-200 box-border caret-transparent mb-3">
                <strong><a href="/service/concrete-fencing-irvine" className="text-[#787e59] hover:underline">Concrete Fencing:</a></strong> Maximum durability and security, concrete fencing provides long-lasting protection with minimal maintenance.
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="box-border caret-transparent">
        <h2 className="text-white text-[22px] font-bold box-border caret-transparent leading-[30.8px] mb-2.5 md:text-[34px] md:leading-[40.8px] md:mb-[30px]">
          Why choose our {isDecking ? "decking" : isFencing ? "fencing" : isFenceRepairs ? "fence repair" : isGates ? "gate" : isSheds ? "shed" : isGardenRooms ? "garden room" : ""} services?
        </h2>
        <p className="text-gray-200 box-border caret-transparent mb-2.5">
          {isDecking
            ? "Our decking installations combine top-quality timber materials and expert craftsmanship, ensuring durability and style for your outdoor space."
            : isFencing
            ? "Our fencing installations combine top-quality materials and expert craftsmanship, ensuring durability and style for your property's protection."
            : isFenceRepairs
            ? "Our fence repair services ensure your fencing is restored to its best condition, maintaining security and appearance for your property."
            : isGates
            ? "Our gate installations combine quality materials and expert craftsmanship, ensuring security and aesthetic appeal for your property."
            : isSheds
            ? "Our shed installations combine quality materials and expert craftsmanship, providing practical and attractive storage solutions."
            : isGardenRooms
            ? "Our garden room installations combine quality materials and expert craftsmanship, creating versatile and comfortable additional living spaces."
            : "Our installations combine top-quality materials and expert craftsmanship, ensuring durability and style."}
        </p>
        <ul
          role="list"
          className="box-border caret-transparent mt-[15px] mb-2.5 pl-5 md:mt-[30px]"
        >
          <li className="text-gray-200 box-border caret-transparent mb-5">
            High-quality materials for maximum durability and weather resistance.
          </li>
          <li className="text-gray-200 box-border caret-transparent mb-5">
            Fully qualified and experienced team for reliable craftsmanship.
          </li>
          <li className="text-gray-200 box-border caret-transparent mb-5">
            {isDecking
              ? "Various decking styles and finishes available to match your preferences."
              : isFencing
              ? "Wide range of fencing types available to suit your needs."
              : isFenceRepairs
              ? "Expert repair services for all types of fencing damage."
              : isGates
              ? "Various gate styles and designs available to match your property."
              : isSheds
              ? "Custom designs available to match your requirements and space."
              : isGardenRooms
              ? "Versatile designs to suit various uses and preferences."
              : "Various styles available to suit your needs."}
          </li>
          <li className="text-gray-200 box-border caret-transparent mb-5">
            Professional installation with attention to detail and quality.
          </li>
        </ul>
      </div>
      <div className="box-border caret-transparent">
        <h2 className="text-white text-[22px] font-bold box-border caret-transparent leading-[30.8px] mb-2.5 md:text-[34px] md:leading-[40.8px] md:mb-[30px]">
          {isDecking ? "Our installation process" : "Our installation process"}
        </h2>
        <p className="text-gray-200 box-border caret-transparent mb-2.5">
          We follow a thorough, step-by-step approach, from consultation to
          completion, ensuring a seamless experience and exceptional results for
          every project.
        </p>
        <ol
          role="list"
          className="box-border caret-transparent list-decimal mt-[15px] mb-2.5 pl-5 md:mt-[30px]"
        >
          <li className="text-gray-200 box-border caret-transparent mb-5">
            Consultation: We start with a free consultation to understand your
            needs.
          </li>
          <li className="text-gray-200 box-border caret-transparent mb-5">
            {isDecking ? "Site Assessment: A thorough assessment of your outdoor space to plan the decking layout." : "Site Inspection: A thorough site inspection to assess your requirements."}
          </li>
          <li className="text-gray-200 box-border caret-transparent mb-5">
            Proposal: A detailed proposal with clear timelines and pricing.
          </li>
          <li className="text-gray-200 box-border caret-transparent mb-5">
            Installation: Expert installation using top-tier materials,
            completed on time.
          </li>
        </ol>
      </div>
    </div>
  );
};
