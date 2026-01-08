import { DetailItem } from "@/pages/project/sections/Hero/components/DetailItem";
import { getProjectBySlug } from "@/data/projects";

interface ProjectDetailsProps {
  slug?: string;
}

export const ProjectDetails = ({ slug }: ProjectDetailsProps) => {
  const project = getProjectBySlug(slug);
  const category = project?.category === "decking" ? "Decking Services" : "Fencing Services";
  const location = project?.location || "Ayrshire";
  const date = project?.date || "";
  
  return (
    <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 mb-5 md:gap-x-[30px] md:grid-cols-[1fr_1fr_1fr] md:gap-y-[30px] md:mb-10">
      <DetailItem label="Category:" value={category} />
      <DetailItem label="Location:" value={location} />
      <DetailItem label="Date:" value={date} />
    </div>
  );
};
