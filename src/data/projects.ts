export interface Project {
  slug: string;
  title: string;
  headline: string;
  location: string;
  date: string;
  category: "fencing" | "decking";
  imageUrl: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  challenge?: string;
  solution?: string;
  solutionPoints?: string[];
  result?: string;
}

export const projects: Project[] = [
  // Fencing Projects
  {
    slug: "venetian-fencing-gate",
    title: "Venetian Fencing & Gate",
    headline: "Venetian Fencing & Gate",
    location: "Irvine, Ayrshire",
    date: "4th June 2025",
    category: "fencing",
    imageUrl: "/projects/project-1.webp",
    imageAlt: "Venetian Fencing & Gate installation in Irvine, Ayrshire",
    seoTitle: "Venetian Fencing & Gate Installation Irvine Ayrshire | Ayrshire Fencing Group",
    seoDescription: "View our completed Venetian fencing and gate installation in Irvine, Ayrshire. Professional installation showcasing quality craftsmanship and durable fencing solutions.",
    challenge: "The client in Irvine, Ayrshire required a stylish and modern fencing solution that would provide privacy while maintaining an attractive appearance. Venetian fencing was chosen for its contemporary look and ability to offer both security and visual appeal. The project needed to integrate seamlessly with the existing property layout and accommodate a matching gate for vehicle access.",
    solution: "We installed premium Venetian fencing panels with a matching gate system, carefully measuring and planning the layout to ensure perfect alignment and consistent spacing. The installation included proper post foundations for stability and longevity. We used high-quality materials that are weather-resistant and require minimal maintenance, ensuring the fencing will look great for years to come.",
    solutionPoints: [
      "Precise measurement and layout planning",
      "Premium Venetian fencing panels installation",
      "Matching gate system with secure hardware",
      "Weather-resistant materials for durability",
      "Professional finishing and attention to detail"
    ],
    result: "The completed Venetian fencing and gate installation transformed the property's boundary, providing excellent privacy and security while enhancing the property's modern aesthetic. The client was delighted with the clean, contemporary look and the quality of workmanship. The fencing provides a perfect balance of privacy and style, and the matching gate ensures seamless access while maintaining security."
  },
  {
    slug: "concrete-posts-composite-panels-gate",
    title: "Concrete Posts & Composite Panels & Gate",
    headline: "Concrete posts & composite panels & gate",
    location: "Irvine, Ayrshire",
    date: "13th October 2025",
    category: "fencing",
    imageUrl: "/projects/project-2.webp",
    imageAlt: "Concrete posts and composite panels with gate installation in Irvine, Ayrshire",
    seoTitle: "Concrete Posts & Composite Panels Gate Installation Irvine Ayrshire | Ayrshire Fencing Group",
    seoDescription: "Explore our concrete posts and composite panels fencing installation with gate in Irvine, Ayrshire. Expert craftsmanship delivering secure, attractive boundary solutions.",
    challenge: "This property in Irvine required a robust, long-lasting fencing solution that could withstand the Scottish weather conditions while providing maximum security and privacy. The client wanted a low-maintenance option that would look great for many years without requiring regular painting or treatment. The installation needed to include a secure gate for vehicle access.",
    solution: "We installed a combination of concrete posts and composite panels, creating a durable and maintenance-free fencing system. The concrete posts provide exceptional strength and stability, while the composite panels offer a modern appearance that won't rot, warp, or require painting. We carefully installed a matching composite gate with secure hardware, ensuring smooth operation and long-term reliability.",
    solutionPoints: [
      "Concrete post installation for maximum durability",
      "Composite panel system for low maintenance",
      "Secure gate with quality hardware",
      "Weather-resistant materials throughout",
      "Professional installation ensuring longevity"
    ],
    result: "The concrete posts and composite panels fencing system provides an excellent long-term solution for the property. The client benefits from a virtually maintenance-free fence that will retain its appearance and structural integrity for decades. The combination of concrete and composite materials offers the perfect balance of strength, security, and aesthetic appeal, making it an ideal choice for the Scottish climate."
  },
  {
    slug: "timber-overlap-coping-double-gates",
    title: "Timber Overlap & Coping with Double Gates",
    headline: "Timber Overlap & coping with double gates",
    location: "Irvine, Ayrshire",
    date: "22nd August 2025",
    category: "fencing",
    imageUrl: "/projects/project-3.webp",
    imageAlt: "Timber overlap fencing with coping and double gates in Irvine, Ayrshire",
    seoTitle: "Timber Overlap Fencing with Coping & Double Gates Irvine Ayrshire | Ayrshire Fencing Group",
    seoDescription: "See our timber overlap fencing with coping and double gates completed in Irvine, Ayrshire. High-quality timber fencing installation demonstrating professional workmanship.",
    challenge: "The client wanted a traditional timber fencing solution that would provide privacy and security while maintaining a classic, natural appearance. The property required double gates for wide vehicle access, and the fencing needed to be finished with coping boards for protection and a professional finish. The installation needed to handle varying ground levels while maintaining a consistent appearance.",
    solution: "We installed high-quality timber overlap fencing panels with treated timber posts for durability. The panels were carefully aligned and fixed to ensure a consistent, professional appearance. We added coping boards along the top of the fence to protect the timber from weather damage and provide a finished look. The double gates were custom-built to match the fencing style and fitted with heavy-duty hinges and secure latches for reliable operation.",
    solutionPoints: [
      "Premium treated timber overlap panels",
      "Professional coping board installation",
      "Custom-built double gates for wide access",
      "Heavy-duty gate hardware and fittings",
      "Weather-resistant treatment and finishing"
    ],
    result: "The timber overlap fencing with coping and double gates provides a beautiful, traditional fencing solution that enhances the property's appearance. The coping boards protect the fence from weather damage while adding a professional finish. The double gates operate smoothly and provide secure access for vehicles. The client is delighted with the natural timber appearance and the quality of craftsmanship throughout the installation."
  },
  {
    slug: "composite-fencing-bespoke-gates",
    title: "47m Composite Fencing & 2 Bespoke Gates",
    headline: "47m of composite fencing & 2 bespoke gates",
    location: "Ayrshire",
    date: "7th November 2025",
    category: "fencing",
    imageUrl: "/projects/project-7.webp",
    imageAlt: "47m of composite fencing with 2 bespoke gates featuring dark grey slats, black composite and aluminium posts, black trellis, trims and caps in Ayrshire",
    seoTitle: "Composite Fencing & Bespoke Gates Installation Ayrshire | Ayrshire Fencing Group",
    seoDescription: "View our completed 47m composite fencing installation with 2 bespoke gates in Ayrshire. Dark grey slats with black composite and aluminium posts, black trellis, trims and caps. Professional installation completed to the highest standard.",
    challenge: "This extensive project required 47 metres of premium composite fencing with two bespoke gates, creating a modern and sophisticated boundary solution. The client wanted a specific colour scheme featuring dark grey slats with black composite and aluminium posts, complemented by black trellis, trims, and caps. The installation needed to be completed to the highest standard with attention to every detail.",
    solution: "We installed a comprehensive composite fencing system using dark grey slats with black composite and aluminium posts for a sleek, modern appearance. The installation included black trellis panels for added visual interest, along with matching black trims and caps for a cohesive finish. Two bespoke gates were custom-designed and built to match the fencing style, ensuring seamless integration. Every component was carefully installed with precision to achieve the highest quality finish.",
    solutionPoints: [
      "47 metres of premium composite fencing",
      "Dark grey slats with black composite posts",
      "Aluminium posts for strength and durability",
      "Black trellis panels for visual appeal",
      "Two bespoke gates custom-built to match",
      "Black trims and caps for professional finish"
    ],
    result: "The completed 47m composite fencing installation with two bespoke gates exceeded the client's expectations. The dark grey and black colour scheme creates a sophisticated, modern appearance that enhances the property significantly. The composite materials ensure minimal maintenance while providing excellent durability. The bespoke gates operate smoothly and complement the fencing perfectly. This project showcases our ability to deliver large-scale installations to the highest standards, completed in collaboration with N,C Fencing & Decking."
  },
  // Decking Projects
  {
    slug: "timber-wheelchair-access-steps",
    title: "Timber Wheelchair Access & Steps",
    headline: "Timber wheelchair access & steps",
    location: "Stevenston, Ayrshire",
    date: "16th October 2025",
    category: "decking",
    imageUrl: "/projects/project-4.webp",
    imageAlt: "Timber wheelchair access and steps installation in Stevenston, Ayrshire",
    seoTitle: "Timber Wheelchair Access & Steps Installation Stevenston Ayrshire | Ayrshire Fencing Group",
    seoDescription: "Discover our timber wheelchair access and steps installation in Stevenston, Ayrshire. Professional decking installation transforming outdoor spaces with accessibility in mind.",
    challenge: "The property in Stevenston required an accessible entrance solution that would allow wheelchair users to safely access the property while maintaining an attractive appearance. The installation needed to meet accessibility standards with appropriate gradients, handrails, and non-slip surfaces. The design had to integrate seamlessly with the existing property layout and provide a safe, durable solution.",
    solution: "We designed and installed a timber wheelchair access ramp with accompanying steps, ensuring compliance with accessibility regulations. The ramp features a gentle gradient suitable for wheelchair use, with non-slip decking boards for safety. We installed sturdy handrails on both sides for support and security. The steps were constructed to complement the ramp, providing an alternative access route. All timber was treated for weather resistance and durability.",
    solutionPoints: [
      "Accessible ramp design meeting regulations",
      "Non-slip timber decking for safety",
      "Sturdy handrails on both sides",
      "Complementary steps installation",
      "Weather-resistant treated timber"
    ],
    result: "The timber wheelchair access and steps installation provides a safe, accessible entrance to the property while maintaining an attractive appearance. The ramp allows wheelchair users to access the property independently, and the handrails provide security for all users. The client is pleased with both the functionality and the quality of the installation, which enhances the property's accessibility without compromising on aesthetics."
  },
  {
    slug: "composite-decking-glass-handrails",
    title: "Composite Decking with Glass and Handrails",
    headline: "Composite decking with Glass and handrails",
    location: "Kings Park, Glasgow",
    date: "8th August 2025",
    category: "decking",
    imageUrl: "/projects/project-5.webp",
    imageAlt: "Composite decking with glass and handrails installation in Kings Park, Glasgow",
    seoTitle: "Composite Decking with Glass & Handrails Kings Park Glasgow | Ayrshire Fencing Group",
    seoDescription: "View our composite decking with glass and handrails installation in Kings Park, Glasgow. Premium decking installation showcasing modern design and professional craftsmanship.",
    challenge: "The client in Kings Park, Glasgow wanted a premium decking solution that would create a modern, sophisticated outdoor space. The design needed to incorporate glass panels and handrails for safety while maintaining an open, contemporary feel. The composite decking had to be low-maintenance and durable, suitable for the Scottish climate, while the glass elements needed to provide safety without obstructing views.",
    solution: "We installed premium composite decking boards that offer the appearance of natural wood without the maintenance requirements. The installation features glass panels integrated into the handrail system, creating a modern, open feel while providing essential safety barriers. The glass panels are securely fixed and designed to withstand weather conditions. The composite decking provides a stable, slip-resistant surface that will maintain its appearance for years with minimal upkeep.",
    solutionPoints: [
      "Premium composite decking installation",
      "Glass panel handrail system",
      "Modern, contemporary design",
      "Low-maintenance materials",
      "Weather-resistant construction"
    ],
    result: "The composite decking with glass and handrails creates a stunning, modern outdoor space that enhances the property significantly. The glass panels provide safety while maintaining an open, airy feel, and the composite decking offers a beautiful, low-maintenance surface. The client is delighted with the contemporary design and the quality of workmanship, creating an outdoor space that can be enjoyed year-round."
  },
  {
    slug: "timber-decking",
    title: "Timber Decking",
    headline: "Timber Decking",
    location: "Stevenston, Ayrshire",
    date: "30th July 2025",
    category: "decking",
    imageUrl: "/projects/project-6.webp",
    imageAlt: "Timber decking installation in Stevenston, Ayrshire",
    seoTitle: "Timber Decking Installation Stevenston Ayrshire | Ayrshire Fencing Group",
    seoDescription: "Explore our timber decking project completed in Stevenston, Ayrshire. High-quality decking installation demonstrating natural wood beauty and professional workmanship.",
    challenge: "The property in Stevenston required a timber decking installation that would create a functional outdoor living space. The decking needed to be installed on a level surface, properly supported, and finished to a high standard. The client wanted a natural timber appearance that would complement the property while providing a durable, long-lasting outdoor area for relaxation and entertainment.",
    solution: "We installed high-quality treated timber decking boards, carefully planning the layout to ensure optimal use of the space. The decking was constructed on a solid framework with proper support joists and adequate spacing for drainage. We used premium treated timber that is resistant to rot and weather damage, ensuring longevity. The boards were precisely cut and fixed to create a smooth, level surface with consistent spacing and professional finishing throughout.",
    solutionPoints: [
      "Premium treated timber decking boards",
      "Solid framework and support structure",
      "Proper drainage and spacing",
      "Weather-resistant treatment",
      "Professional finishing and detailing"
    ],
    result: "The timber decking installation has transformed the outdoor space, providing a beautiful and functional area for the client to enjoy. The natural timber appearance adds warmth and character to the property, while the quality construction ensures years of reliable use. The client is pleased with the professional finish and the way the decking enhances their outdoor living experience."
  },
];

export const getProjectBySlug = (slug: string | undefined): Project | undefined => {
  if (!slug) return undefined;
  return projects.find((project) => project.slug === slug);
};

export const getFencingProjects = (): Project[] => {
  return projects.filter((project) => project.category === "fencing");
};

export const getDeckingProjects = (): Project[] => {
  return projects.filter((project) => project.category === "decking");
};

