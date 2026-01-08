import { ProjectImage } from "@/sections/ProjectsGrid/components/ProjectImage";

export type ProjectCardProps = {
  href: string;
  imageUrl: string;
  imageAlt?: string;
  imageClassName?: string;
  location: string;
  title: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div role="listitem" className="box-border caret-transparent shrink-0">
      <a
        aria-label="link"
        href={props.href}
        className="box-border caret-transparent inline-block h-full max-w-full w-full hover:decoration-transparent"
      >
        <ProjectImage
          imageUrl={props.imageUrl}
          imageAlt={props.imageAlt}
          imageClassName={props.imageClassName}
          location={props.location}
        />
        <div className="box-border caret-transparent">
          <h2 className="text-gray-900 text-[22px] font-bold box-border caret-transparent leading-[26.4px] md:text-[26px] md:leading-[31.2px]">
            {props.title}
          </h2>
        </div>
      </a>
    </div>
  );
};
