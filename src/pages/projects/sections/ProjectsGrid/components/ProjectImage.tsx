import { LocationBadge } from "@/pages/projects/sections/ProjectsGrid/components/LocationBadge";

export type ProjectImageProps = {
  imageUrl: string;
  imageAlt?: string;
  imageClassName?: string;
  location: string;
};

export const ProjectImage = (props: ProjectImageProps) => {
  return (
    <div className="relative box-border caret-transparent overflow-hidden mb-2.5 rounded-r-[20px] rounded-b-[20px] md:mb-5">
      <img
        src={props.imageUrl}
        alt={props.imageAlt || ""}
        className={`box-border caret-transparent inline-block h-full max-w-full object-cover w-full ${props.imageClassName || ""}`}
      />
      <LocationBadge location={props.location} />
    </div>
  );
};

