import { ContentSection } from "@/pages/project/sections/ProjectContent/components/ContentSection";

interface ProjectContentProps {
  slug?: string;
}

export const ProjectContent = ({ slug }: ProjectContentProps) => {
  return (
    <section className="box-border caret-transparent pb-[70px] md:pb-[140px]">
      <ContentSection slug={slug} />
    </section>
  );
};
