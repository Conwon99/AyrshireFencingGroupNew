import { getProjectBySlug } from "@/data/projects";

const projectHeroImages: Record<
  string,
  { src: string; alt: string; projectNumber: string; imagePrefix: string }
> = {
  "venetian-fencing-gate": {
    src: "/projects/project-1.webp",
    alt: "Venetian Fencing & Gate installation in Irvine, Ayrshire",
    projectNumber: "001",
    imagePrefix: "wooden-gate-fencing",
  },
  "concrete-posts-composite-panels-gate": {
    src: "/projects/project-2.webp",
    alt: "Concrete posts and composite panels with gate installation in Irvine, Ayrshire",
    projectNumber: "002",
    imagePrefix: "project-2",
  },
  "timber-overlap-coping-double-gates": {
    src: "/projects/project-3.webp",
    alt: "Timber overlap fencing with coping and double gates in Irvine, Ayrshire",
    projectNumber: "003",
    imagePrefix: "wooden-fencing",
  },
  "timber-wheelchair-access-steps": {
    src: "/projects/project-4.webp",
    alt: "Timber wheelchair access and steps installation in Stevenston, Ayrshire",
    projectNumber: "004",
    imagePrefix: "project-004",
  },
  "composite-decking-glass-handrails": {
    src: "/projects/project-5.webp",
    alt: "Composite decking with glass and handrails installation in Kings Park, Glasgow",
    projectNumber: "005",
    imagePrefix: "project-005",
  },
  "timber-decking": {
    src: "/projects/project-6.webp",
    alt: "Timber decking installation in Stevenston, Ayrshire",
    projectNumber: "006",
    imagePrefix: "project-006",
  },
  "composite-fencing-bespoke-gates": {
    src: "/projects/project-7.webp",
    alt: "47m of composite fencing with 2 bespoke gates featuring dark grey slats, black composite and aluminium posts, black trellis, trims and caps in Ayrshire",
    projectNumber: "007",
    imagePrefix: "project-007",
  },
};

interface MainImageProps {
  slug?: string;
  onImageClick?: () => void;
}

export const MainImage = ({ slug, onImageClick }: MainImageProps) => {
  const projectData = getProjectBySlug(slug);
  const project =
    (slug && projectHeroImages[slug]) ??
    (projectData ? {
      src: projectData.imageUrl,
      alt: projectData.imageAlt,
      projectNumber: "001",
      imagePrefix: "project-1",
    } : projectHeroImages["venetian-fencing-gate"]);

  return (
    <button
      onClick={onImageClick}
      aria-label="open lightbox"
      className="box-border caret-transparent block h-full max-w-full w-full overflow-hidden rounded-[20px] hover:opacity-90 transition-opacity cursor-pointer p-0 border-0 bg-transparent"
    >
      <img
        src={project.src}
        alt={project.alt}
        className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
      />
    </button>
  );
};

export const getProjectNumber = (slug?: string): string => {
  const projectData = getProjectBySlug(slug);
  const project =
    (slug && projectHeroImages[slug]) ??
    (projectData ? {
      src: projectData.imageUrl,
      alt: projectData.imageAlt,
      projectNumber: "001",
      imagePrefix: "project-1",
    } : projectHeroImages["venetian-fencing-gate"]);
  return project.projectNumber;
};

export const getProjectImagePrefix = (slug?: string): string => {
  const projectData = getProjectBySlug(slug);
  const project =
    (slug && projectHeroImages[slug]) ??
    (projectData ? {
      src: projectData.imageUrl,
      alt: projectData.imageAlt,
      projectNumber: "001",
      imagePrefix: "project-1",
    } : projectHeroImages["venetian-fencing-gate"]);
  return project.imagePrefix || `project-${project.projectNumber}`;
};
