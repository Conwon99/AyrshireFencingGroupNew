import { ProjectCard } from "@/pages/projects/sections/ProjectsGrid/components/ProjectCard";
import { getDeckingProjects } from "@/data/projects";

export const DeckingProjectsGrid = () => {
  const deckingProjects = getDeckingProjects();

  return (
    <section className="box-border caret-transparent pb-[70px] md:pb-[140px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent">
          <div
            role="list"
            className="box-border caret-transparent gap-x-10 grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:gap-x-[70px] md:grid-cols-[1fr_1fr] md:gap-y-[70px]"
          >
            {deckingProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                href={`/project/${project.slug}`}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                location={project.location}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

