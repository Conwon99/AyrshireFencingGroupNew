import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { getFencingProjects, getDeckingProjects } from "@/data/projects";

export const ProjectsSection = () => {
  const fencingProjects = getFencingProjects().slice(0, 3);
  const deckingProjects = getDeckingProjects().slice(0, 3);

  return (
    <section id="projects" className="bg-transparent box-border caret-transparent py-[50px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent mb-[50px] md:mb-[70px]">
          <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[38px] mb-[30px] sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            Fencing Projects
          </h2>
          <div className="items-start box-border caret-transparent gap-x-[50px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[50px] md:gap-x-[70px] md:grid-cols-[1fr_1fr] md:gap-y-[70px] lg:grid-cols-[1fr_1fr_1fr]">
            {fencingProjects.map((project) => (
              <div
                key={project.slug}
                role="listitem"
                className="box-border caret-transparent shrink-0"
              >
                <ProjectCard
                  href={`/project/${project.slug}`}
                  imageUrl={project.imageUrl}
                  imageAlt={project.imageAlt}
                  location={project.location}
                  title={project.title}
                  locationIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a5588102623a5b87071eb_location-dot.svg"
                  locationIconAlt="Location icon"
                  shapeIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a32569be90004c73f6cf4e_bf4df3c7f28098d382f9ca48f7190044_shape-03.svg"
                  shapeIconAlt=""
                />
              </div>
            ))}
          </div>
          <div className="box-border caret-transparent text-center mt-[30px] md:mt-[40px]">
            <a
              href="/fencing-projects"
              className="text-white text-sm font-bold bg-[#787e59] box-border caret-transparent inline-block leading-[19.6px] border border-[#787e59] px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:bg-[#8a9168] hover:decoration-transparent shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300"
            >
              View all fencing projects
            </a>
          </div>
        </div>
        <div className="box-border caret-transparent mt-[70px] md:mt-[100px]">
          <h2 className="text-white text-3xl font-bold box-border caret-transparent leading-[38px] mb-[30px] sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
            Decking Projects
          </h2>
          <div className="items-start box-border caret-transparent gap-x-[50px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[50px] md:gap-x-[70px] md:grid-cols-[1fr_1fr] md:gap-y-[70px] lg:grid-cols-[1fr_1fr_1fr]">
            {deckingProjects.map((project) => (
              <div
                key={project.slug}
                role="listitem"
                className="box-border caret-transparent shrink-0"
              >
                <ProjectCard
                  href={`/project/${project.slug}`}
                  imageUrl={project.imageUrl}
                  imageAlt={project.imageAlt}
                  location={project.location}
                  title={project.title}
                  locationIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a5588102623a5b87071eb_location-dot.svg"
                  locationIconAlt="Location icon"
                  shapeIconUrl="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a32569be90004c73f6cf4e_bf4df3c7f28098d382f9ca48f7190044_shape-03.svg"
                  shapeIconAlt=""
                />
              </div>
            ))}
          </div>
          <div className="box-border caret-transparent text-center mt-[30px] md:mt-[40px]">
            <a
              href="/decking-projects"
              className="text-white text-sm font-bold bg-[#787e59] box-border caret-transparent inline-block leading-[19.6px] border border-[#787e59] px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:bg-[#8a9168] hover:decoration-transparent shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300"
            >
              View all decking projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
