import { useState } from "react";

export const HomepageContentSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="box-border caret-transparent pt-[50px] pb-0 md:pt-[70px] md:pb-0 bg-transparent">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px]">
        
        {/* Accordion Button - Always Visible */}
        <div className="box-border caret-transparent text-center mb-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white box-border caret-transparent inline-flex items-center justify-center gap-2 text-center px-4 py-2 rounded text-sm md:text-base transition-colors hover:decoration-transparent"
            aria-expanded={isOpen}
            aria-controls="homepage-content-accordion"
          >
            <span>{isOpen ? "Hide" : "View"} All Services & Information</span>
            <svg
              className={`box-border caret-transparent h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Accordion Content - All content in HTML source for SEO */}
        <div
          id="homepage-content-accordion"
          className={`box-border caret-transparent transition-all duration-300 ${
            isOpen 
              ? "max-h-[99999px] opacity-100 overflow-visible" 
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            // Content always in DOM for SEO - only visually hidden when closed
            display: "block",
          }}
        >
          <div className="box-border caret-transparent">

            {/* Fence Contractor Services - Primary Category */}
            <div className="box-border caret-transparent mb-12 md:mb-16">
              <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">
                Fence Contractor Services
              </h2>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-8">
                As professional fence contractors in Ayrshire, we provide comprehensive fencing solutions for residential and commercial properties. Our expert team offers custom fence construction, installation, repair, and replacement services using high-quality materials including wooden, composite, chainlink, nylofor, and concrete fencing. With over 13 years of experience, we deliver durable, secure, and aesthetically pleasing fencing solutions tailored to your specific needs. <a href="/fence-contractor-irvine" className="text-[#787e59] hover:underline font-medium">Learn more about our fence contractor services in Ayrshire</a>.
              </p>
            </div>

            {/* Deck Builder - Secondary Category */}
            <div className="box-border caret-transparent mb-12 md:mb-16">
              <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">
                Deck Builder
              </h2>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6 md:mb-8">
                Our professional deck building services in Ayrshire transform outdoor spaces with beautiful, durable decking solutions. We specialize in designing and installing high-quality timber and composite decking that enhances your property's functionality and aesthetic appeal. Whether you need decking for your garden, patio, or commercial property, our expert deck builders provide comprehensive services with attention to detail and quality craftsmanship. <a href="/deck-builder-irvine" className="text-[#787e59] hover:underline font-medium">Explore our deck building services in Ayrshire</a>.
              </p>

              <h3 className="text-white text-xl font-bold box-border caret-transparent leading-[28px] mb-4 sm:text-2xl sm:leading-[32px]">
                Decking Installation
              </h3>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6">
                Professional decking installation services in Ayrshire and Glasgow designed to create beautiful, functional outdoor spaces. Our decking installations combine top-quality timber and composite materials with expert craftsmanship, ensuring durability and style for your outdoor area. We work closely with you to design decking solutions that match your property's style and meet your specific requirements. <a href="/service/decking" className="text-[#787e59] hover:underline font-medium">Learn more about our decking installation services</a>.
              </p>

              <h3 className="text-white text-xl font-bold box-border caret-transparent leading-[28px] mb-4 sm:text-2xl sm:leading-[32px]">
                Timber Decking
              </h3>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6">
                Premium timber decking installation in Ayrshire using high-quality timber that provides natural beauty and warmth to your outdoor space. Our timber decking solutions are designed to create traditional and versatile outdoor areas that enhance your property's appeal. We use premium timber that can be customized to match your property's style and preferences, ensuring a perfect fit for your outdoor living needs. <a href="/service/timber-decking-irvine" className="text-[#787e59] hover:underline font-medium">Discover our timber decking solutions</a>.
              </p>
            </div>

            {/* Shed Builder - Secondary Category */}
            <div className="box-border caret-transparent mb-12 md:mb-16">
              <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">
                Shed Builder
              </h2>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6 md:mb-8">
                Professional shed building services in Ayrshire and Glasgow for custom sheds designed and built to match your specific requirements. Our experienced shed builders work with you to create practical, attractive storage solutions that enhance your property's functionality. From design to installation, we ensure quality craftsmanship and attention to detail, providing sheds that are built to last and complement your property. <a href="/shed-builder-irvine" className="text-[#787e59] hover:underline font-medium">Find out more about our shed building services</a>.
              </p>

              <h3 className="text-white text-xl font-bold box-border caret-transparent leading-[28px] mb-4 sm:text-2xl sm:leading-[32px]">
                Shed Installation
              </h3>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6">
                Expert shed installation services in Ayrshire providing professional installation of custom sheds for storage and garden use. Our shed installation process ensures that your new shed is properly positioned, secured, and finished to the highest standards. We handle everything from site preparation to final installation, ensuring your shed is ready for immediate use. <a href="/service/sheds" className="text-[#787e59] hover:underline font-medium">Get started with shed installation</a>.
              </p>
            </div>

            {/* Contractor - Secondary Category */}
            <div className="box-border caret-transparent mb-12 md:mb-16">
              <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">
                Contractor
              </h2>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6 md:mb-8">
                As experienced contractors in Ayrshire, we provide comprehensive construction and installation services including deck construction, patio construction, fencing, decking, gates, sheds, and garden rooms. Our professional contractors serve residential and commercial clients throughout Ayrshire and Glasgow with over 13 years of experience. <a href="/contractor-irvine" className="text-[#787e59] hover:underline font-medium">Learn more about our contractor services in Ayrshire</a>.
              </p>

              <h3 className="text-white text-xl font-bold box-border caret-transparent leading-[28px] mb-4 sm:text-2xl sm:leading-[32px]">
                Deck Construction
              </h3>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6">
                Professional deck construction services in Ayrshire and Glasgow. We build decks from scratch, planning everything properly so it lasts. Deck construction in Ayrshire means using materials that can handle our weather. <a href="/service/deck-construction-irvine" className="text-[#787e59] hover:underline font-medium">Learn more about deck construction</a>.
              </p>

              <h3 className="text-white text-xl font-bold box-border caret-transparent leading-[28px] mb-4 sm:text-2xl sm:leading-[32px]">
                Patio Construction
              </h3>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6">
                Patio construction gives you a solid outdoor area. We build patios using paving stones, concrete, or other materials. Patio construction needs proper base preparation, especially in areas with heavy rain like we get in Ayrshire. <a href="/service/patio-construction-irvine" className="text-[#787e59] hover:underline font-medium">Discover patio construction services</a>.
              </p>
            </div>

            {/* Landscape Designer - Secondary Category */}
            <div className="box-border caret-transparent mb-12 md:mb-16">
              <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">
                Landscape Designer
              </h2>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6 md:mb-8">
                Landscape design helps tie everything together. We design outdoor spaces that work well and look good. From planning where things go to actually building them, we handle the whole process. Our landscape designers in Ayrshire understand how to create outdoor spaces that enhance your property's value. <a href="/landscape-designer-irvine" className="text-[#787e59] hover:underline font-medium">Explore our landscape design services</a>.
              </p>

              <h3 className="text-white text-xl font-bold box-border caret-transparent leading-[28px] mb-4 sm:text-2xl sm:leading-[32px]">
                Landscape Installations
              </h3>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6">
                Landscape installations include everything from paths to steps to planting areas. We install all the hard landscaping elements that make your garden functional and attractive. <a href="/service/landscape-installations-irvine" className="text-[#787e59] hover:underline font-medium">Learn more about landscape installations</a>.
              </p>

              <h3 className="text-white text-xl font-bold box-border caret-transparent leading-[28px] mb-4 sm:text-2xl sm:leading-[32px]">
                Outdoor Step Construction
              </h3>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6">
                Professional outdoor step construction in Ayrshire. We build steps that are safe, durable, and complement your outdoor space design. <a href="/service/outdoor-step-construction-irvine" className="text-[#787e59] hover:underline font-medium">Discover outdoor step construction</a>.
              </p>

              <h3 className="text-white text-xl font-bold box-border caret-transparent leading-[28px] mb-4 sm:text-2xl sm:leading-[32px]">
                Patio Design
              </h3>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6">
                Patio design is about creating an outdoor space that works for you. We design patios that fit your property, your lifestyle, and your budget. Good patio design makes your garden more usable. <a href="/service/patio-design-irvine" className="text-[#787e59] hover:underline font-medium">Learn about patio design</a>.
              </p>
            </div>

            {/* Construction Company - Secondary Category */}
            <div className="box-border caret-transparent mb-12 md:mb-16">
              <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">
                Construction Company
              </h2>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6 md:mb-8">
                As a construction company, we handle repairs and maintenance for all the work we do. Once we've built something, we're here to help keep it in good shape. Our construction company in Ayrshire provides comprehensive building and installation services for outdoor structures. <a href="/construction-company-irvine" className="text-[#787e59] hover:underline font-medium">Find out more about our construction services</a>.
              </p>

              <h3 className="text-white text-xl font-bold box-border caret-transparent leading-[28px] mb-4 sm:text-2xl sm:leading-[32px]">
                Repairs and Maintenance
              </h3>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6">
                Repairs and maintenance keep everything working properly. We do regular maintenance on fences, decks, and other structures we've built. Repairs and maintenance in Ayrshire means dealing with weather damage, wear and tear, and just keeping things in good condition. <a href="/service/repairs-and-maintenance-irvine" className="text-[#787e59] hover:underline font-medium">Learn about repairs and maintenance</a>.
              </p>
            </div>

            {/* Garage Builder - Secondary Category */}
            <div className="box-border caret-transparent mb-12 md:mb-16">
              <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">
                Garage Builder
              </h2>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6 md:mb-8">
                Professional garage building services in Ayrshire and Glasgow. We design and construct custom garages tailored to your specific requirements. Our experienced garage builders work with you to create practical, secure storage solutions that enhance your property's functionality. <a href="/garage-builder-irvine" className="text-[#787e59] hover:underline font-medium">Learn more about our garage building services</a>.
              </p>
            </div>

            {/* General Contractor - Secondary Category */}
            <div className="box-border caret-transparent mb-12 md:mb-16">
              <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">
                General Contractor
              </h2>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6 md:mb-8">
                As a general contractor in Ayrshire, we provide comprehensive construction services for outdoor projects. We coordinate and manage all aspects of your construction project, from initial planning through completion. Our general contracting services ensure quality workmanship and timely project delivery. <a href="/general-contractor-irvine" className="text-[#787e59] hover:underline font-medium">Discover our general contracting services</a>.
              </p>
            </div>

            {/* Landscape Architect - Secondary Category */}
            <div className="box-border caret-transparent mb-12 md:mb-16">
              <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">
                Landscape Architect
              </h2>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6 md:mb-8">
                Professional landscape architecture services in Ayrshire. We design outdoor spaces that are both functional and beautiful, creating cohesive landscapes that enhance your property's value and appeal. Our landscape architects work with you to create outdoor environments that meet your needs and exceed your expectations. <a href="/landscape-architect-irvine" className="text-[#787e59] hover:underline font-medium">Explore our landscape architecture services</a>.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
