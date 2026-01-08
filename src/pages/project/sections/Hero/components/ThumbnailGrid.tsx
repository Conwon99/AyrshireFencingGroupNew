import { getProjectNumber, getProjectImagePrefix } from "@/pages/project/sections/Hero/components/MainImage";

interface ThumbnailGridProps {
  slug?: string;
  onImageClick?: (index: number) => void;
}

export const ThumbnailGrid = ({ slug, onImageClick }: ThumbnailGridProps) => {
  const imagePrefix = getProjectImagePrefix(slug);
  
  // Define how many images each project has (including the main hero image)
  const projectImageCounts: Record<string, number> = {
    "venetian-fencing-gate": 5,
    "concrete-posts-composite-panels-gate": 4,
    "timber-overlap-coping-double-gates": 4,
    "composite-fencing-bespoke-gates": 4, // 1 main (project-7.webp) + 3 additional (project-007-001, 002, 003)
    "timber-wheelchair-access-steps": 3,
    "composite-decking-glass-handrails": 4,
    "timber-decking": 3,
  };

  const imageCount = projectImageCounts[slug || ""] || 4;
  
  // Check if this is a decking project that uses 3-digit numbering (002, 003, etc.)
  const isDeckingProject = slug?.includes("timber-wheelchair-access-steps") || slug?.includes("composite-decking-glass-handrails") || slug?.includes("timber-decking");
  // Check if this is a project that uses 3-digit numbering (project-007-001, etc.)
  const usesThreeDigitNumbering = slug?.includes("composite-fencing-bespoke-gates") || isDeckingProject;
  
  // Generate image numbers for thumbnails
  // For projects using 3-digit numbering, additional images start from 001 (not 002)
  // For other projects, they start from 2 (excluding hero image which is 1)
  const startNumber = usesThreeDigitNumbering ? 1 : 2;
  const thumbnailImages = Array.from({ length: imageCount - 1 }, (_, i) => startNumber + i)
    .map((number) => {
      // For projects that use 3-digit numbering (decking projects and composite-fencing-bespoke-gates), use 3-digit format (001, 002, etc.)
      // For other projects, use their existing format
      let formattedNumber: string;
      if (usesThreeDigitNumbering) {
        formattedNumber = number.toString().padStart(3, "0");
      } else {
        formattedNumber = number.toString();
      }
      // Generate descriptive alt text based on project type
      let altText = "";
      if (slug?.includes("venetian-fencing-gate")) {
        altText = `Venetian fencing and gate project ${number} completed in Irvine, Ayrshire`;
      } else if (slug?.includes("concrete-posts-composite-panels-gate")) {
        altText = `Concrete posts and composite panels with gate project ${number} completed in Irvine, Ayrshire`;
      } else if (slug?.includes("timber-overlap-coping-double-gates")) {
        altText = `Timber overlap fencing with coping and double gates project ${number} completed in Irvine, Ayrshire`;
      } else if (slug?.includes("composite-fencing-bespoke-gates")) {
        altText = `Composite fencing with bespoke gates project ${number} completed in Ayrshire`;
      } else if (slug?.includes("timber-wheelchair-access-steps")) {
        altText = `Timber wheelchair access and steps project ${number} completed in Stevenston, Ayrshire`;
      } else if (slug?.includes("composite-decking-glass-handrails")) {
        altText = `Composite decking with glass and handrails project ${number} completed in Kings Park, Glasgow`;
      } else if (slug?.includes("timber-decking")) {
        altText = `Timber decking project ${number} completed in Stevenston, Ayrshire`;
      } else {
        altText = `Fencing and decking project ${number} completed in Ayrshire`;
      }
      
      return {
        number: formattedNumber,
        alt: altText,
      };
    });

  return (
    <div className="box-border caret-transparent">
      <div
        role="list"
        className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-full gap-y-5"
      >
        {thumbnailImages.map((img, index) => (
          <div key={index} role="listitem" className="box-border caret-transparent">
            <button
              onClick={() => onImageClick?.(index + 1)}
              aria-label="open lightbox"
              className="box-border caret-transparent inline-block h-full max-w-full w-full overflow-hidden rounded-[20px] hover:opacity-90 transition-opacity cursor-pointer p-0 border-0 bg-transparent"
            >
              <img
                src={`/projects/${imagePrefix}-${img.number}.webp`}
                alt={img.alt}
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </button>
          </div>
        ))}
      </div>
      {thumbnailImages.length === 0 && (
        <div className="text-white bg-gray-800 box-border caret-transparent text-center border border-gray-700 px-5 py-2.5 rounded-[20px] border-solid">
          <div className="box-border caret-transparent">No items found.</div>
        </div>
      )}
    </div>
  );
};
