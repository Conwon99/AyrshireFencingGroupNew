import { getProjectImagePrefix } from "./MainImage";
import { getProjectBySlug } from "@/data/projects";

export interface ProjectImage {
  src: string;
  alt: string;
}

const projectHeroImages: Record<
  string,
  { src: string; alt: string }
> = {
  "venetian-fencing-gate": {
    src: "/projects/project-1.webp",
    alt: "Venetian Fencing & Gate installation in Irvine, Ayrshire",
  },
  "concrete-posts-composite-panels-gate": {
    src: "/projects/project-2.webp",
    alt: "Concrete posts and composite panels with gate installation in Irvine, Ayrshire",
  },
  "timber-overlap-coping-double-gates": {
    src: "/projects/project-3.webp",
    alt: "Timber overlap fencing with coping and double gates in Irvine, Ayrshire",
  },
  "timber-wheelchair-access-steps": {
    src: "/projects/project-4.webp",
    alt: "Timber wheelchair access and steps installation in Stevenston, Ayrshire",
  },
  "composite-decking-glass-handrails": {
    src: "/projects/project-5.webp",
    alt: "Composite decking with glass and handrails installation in Kings Park, Glasgow",
  },
  "timber-decking": {
    src: "/projects/project-6.webp",
    alt: "Timber decking installation in Stevenston, Ayrshire",
  },
  "composite-fencing-bespoke-gates": {
    src: "/projects/project-7.webp",
    alt: "47m of composite fencing with 2 bespoke gates featuring dark grey slats, black composite and aluminium posts, black trellis, trims and caps in Ayrshire",
  },
};

export const getProjectImages = (slug?: string): ProjectImage[] => {
  if (!slug) return [];

  const imagePrefix = getProjectImagePrefix(slug);
  
  // Define how many images each project has (including the main hero image)
  const projectImageCounts: Record<string, number> = {
    "venetian-fencing-gate": 5,
    "concrete-posts-composite-panels-gate": 4,
    "timber-overlap-coping-double-gates": 4,
    "composite-fencing-bespoke-gates": 4,
    "timber-wheelchair-access-steps": 3,
    "composite-decking-glass-handrails": 4,
    "timber-decking": 3,
  };

  const imageCount = projectImageCounts[slug] || 4;
  
  // Check if this is a decking project that uses 3-digit numbering
  const isDeckingProject = slug.includes("timber-wheelchair-access-steps") || 
    slug.includes("composite-decking-glass-handrails") || 
    slug.includes("timber-decking");
  // Check if this is a project that uses 3-digit numbering
  const usesThreeDigitNumbering = slug.includes("composite-fencing-bespoke-gates") || isDeckingProject;

  const images: ProjectImage[] = [];

  // Add main image first
  const mainImage = projectHeroImages[slug];
  const projectData = getProjectBySlug(slug);
  
  if (mainImage) {
    images.push(mainImage);
  } else if (projectData) {
    images.push({
      src: projectData.imageUrl,
      alt: projectData.imageAlt,
    });
  }

  // Add thumbnail images
  const startNumber = usesThreeDigitNumbering ? 1 : 2;
  for (let i = 0; i < imageCount - 1; i++) {
    const number = startNumber + i;
    const formattedNumber = usesThreeDigitNumbering 
      ? number.toString().padStart(3, "0")
      : number.toString();
    
    // Generate alt text
    let altText = "";
    if (slug.includes("venetian-fencing-gate")) {
      altText = `Venetian fencing and gate project ${number} completed in Irvine, Ayrshire`;
    } else if (slug.includes("concrete-posts-composite-panels-gate")) {
      altText = `Concrete posts and composite panels with gate project ${number} completed in Irvine, Ayrshire`;
    } else if (slug.includes("timber-overlap-coping-double-gates")) {
      altText = `Timber overlap fencing with coping and double gates project ${number} completed in Irvine, Ayrshire`;
    } else if (slug.includes("composite-fencing-bespoke-gates")) {
      altText = `Composite fencing with bespoke gates project ${number} completed in Ayrshire`;
    } else if (slug.includes("timber-wheelchair-access-steps")) {
      altText = `Timber wheelchair access and steps project ${number} completed in Stevenston, Ayrshire`;
    } else if (slug.includes("composite-decking-glass-handrails")) {
      altText = `Composite decking with glass and handrails project ${number} completed in Kings Park, Glasgow`;
    } else if (slug.includes("timber-decking")) {
      altText = `Timber decking project ${number} completed in Stevenston, Ayrshire`;
    } else {
      altText = `Fencing and decking project ${number} completed in Ayrshire`;
    }

    images.push({
      src: `/projects/${imagePrefix}-${formattedNumber}.webp`,
      alt: altText,
    });
  }

  return images;
};

