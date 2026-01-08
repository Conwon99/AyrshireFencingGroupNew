import { useState } from "react";

export const ServiceAreasSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const serviceAreas = {
    "Ayrshire": {
      cities: [
        "Irvine",
        "Kilmarnock",
        "Ayr",
        "Troon",
        "Prestwick",
        "Kilwinning",
        "Saltcoats",
        "Ardrossan",
        "Largs",
        "Dalry",
        "Beith",
        "Stewarton",
        "Dreghorn",
        "Springside",
        "Dundonald",
        "Symington",
        "Tarbolton",
        "Mauchline",
        "Cumnock",
        "Newmilns",
        "Darvel",
        "Galston",
        "Hurlford",
        "Fenwick",
        "Kilmurs",
        "Crosshouse",
        "Kilmaurs",
        "Dalrymple",
        "Maybole",
        "Girvan"
      ],
      description: "Ayrshire is a historic county in southwest Scotland, known for its beautiful coastline, rolling countryside, and vibrant towns. We provide comprehensive fencing and decking services throughout Ayrshire, from the coastal towns of Troon and Prestwick to the inland communities of Kilmarnock and Ayr. Our local knowledge and expertise ensure we understand the unique requirements of properties across this diverse region."
    },
    "Glasgow": {
      cities: [
        "Glasgow City Centre",
        "East End",
        "West End",
        "Southside",
        "North Glasgow",
        "Govan",
        "Partick",
        "Maryhill",
        "Pollokshields",
        "Shawlands",
        "Bearsden",
        "Milngavie",
        "Bishopbriggs",
        "Kirkintilloch",
        "Lenzie",
        "Newton Mearns",
        "Giffnock",
        "Clarkston",
        "Barrhead",
        "Paisley",
        "Renfrew",
        "Clydebank",
        "Dumbarton",
        "Helensburgh"
      ],
      description: "Glasgow, Scotland's largest city, offers a diverse range of properties from Victorian tenements to modern developments. We extend our professional fencing and decking services to Glasgow and surrounding areas, bringing our expertise in quality installation and craftsmanship to urban and suburban properties. Whether you're in the city centre or the surrounding suburbs, we're here to help enhance your property with durable, attractive fencing and decking solutions."
    }
  };

  const handleAreaClick = (area: string) => {
    setSelectedArea(selectedArea === area ? null : area);
  };

  return (
    <section className="box-border caret-transparent pt-0 pb-[50px] md:pt-0 md:pb-[70px] bg-transparent">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px]">
        
        {/* Accordion Button - Always Visible */}
        <div className="box-border caret-transparent text-center mb-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white box-border caret-transparent inline-flex items-center justify-center gap-2 text-center px-4 py-2 rounded text-sm md:text-base transition-colors hover:decoration-transparent"
            aria-expanded={isOpen}
            aria-controls="service-areas-accordion"
          >
            <span>{isOpen ? "Hide" : "View"} Service Areas</span>
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
          id="service-areas-accordion"
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
            {/* Title moved inside dropdown */}
            <div className="box-border caret-transparent text-center mb-6">
              <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[38px] sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px] mb-6">
                Our Service Areas
              </h2>
            </div>
            
            <div className="box-border caret-transparent text-center mb-[30px] md:mb-[50px]">
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent mt-4 max-w-3xl mx-auto">
                Ayrshire Fencing Group provides professional fencing and decking services across Ayrshire and Glasgow. Our experienced team serves residential and commercial properties throughout these regions, bringing quality craftsmanship and expert installation to your local area.
              </p>
            </div>

            <div className="box-border caret-transparent mb-8 md:mb-12">
              <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 max-w-4xl mx-auto text-center">
                We understand the importance of local knowledge when it comes to fencing and decking projects. Different areas have varying weather conditions, soil types, and local planning requirements. Our team's familiarity with Ayrshire and Glasgow means we can provide advice tailored to your specific location, ensuring your fencing and decking solutions are not only beautiful but also built to withstand local conditions. Whether you're in a coastal area like Troon or Prestwick, or in the heart of Glasgow, we bring the same commitment to quality and customer service to every project.
              </p>
            </div>

            <div className="box-border caret-transparent grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {Object.entries(serviceAreas).map(([areaName, areaData]) => (
                <div
                  key={areaName}
                  className="box-border caret-transparent bg-gray-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => handleAreaClick(areaName)}
                    className="box-border caret-transparent w-full text-left p-6 md:p-8 hover:bg-gray-700/50 transition-colors flex items-center justify-between border-b border-gray-700/50"
                  >
                    <h3 className="text-white text-xl font-bold box-border caret-transparent md:text-2xl">
                      {areaName}
                    </h3>
                    <svg
                      className={`box-border caret-transparent h-5 w-5 text-gray-400 transition-transform ${
                        selectedArea === areaName ? "rotate-180" : ""
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

                  {selectedArea === areaName && (
                    <div className="box-border caret-transparent p-6 md:p-8 pt-0 border-t border-gray-700">
                      <p className="text-gray-200 text-sm sm:text-base md:text-lg box-border caret-transparent mb-6 leading-7">
                        {areaData.description}
                      </p>
                      <div className="box-border caret-transparent">
                        <h4 className="text-white text-base font-semibold box-border caret-transparent mb-4 md:text-lg">
                          Areas We Serve in {areaName}:
                        </h4>
                        <div className="box-border caret-transparent grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {areaData.cities.map((city) => (
                            <div
                              key={city}
                              className="text-gray-200 text-sm box-border caret-transparent flex items-center gap-2 md:text-base"
                            >
                              <svg
                                className="box-border caret-transparent h-4 w-4 text-[#787e59] flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{city}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

