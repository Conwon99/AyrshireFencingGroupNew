import { ProjectCard } from "@/sections/ProjectsGrid/components/ProjectCard";

export const ProjectsGrid = () => {
  return (
    <section className="box-border caret-transparent pb-[70px] md:pb-[140px]">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent">
          <div
            role="list"
            className="box-border caret-transparent gap-x-10 grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:gap-x-[70px] md:grid-cols-[1fr_1fr] md:gap-y-[70px]"
          >
            <ProjectCard
              href="/project/residential-roof-replacement"
              imageUrl="https://c.animaapp.com/mhqqgvrna0ssg4/assets/6717222eea319ed4ef7e0f5f_project-01.avif"
              imageAlt=""
              imageClassName="transform-none md:scale-[1.00989px]"
              location="West Des Moines, IA"
              title="Residential roof replacement"
            />
            <ProjectCard
              href="/project/commercial-flat-roof-installation"
              imageUrl="https://c.animaapp.com/mhqqgvrna0ssg4/assets/6717241ea4bea853dd266730_project-02.avif"
              location="Ankeny, IA"
              title="Commercial flat roof installation"
            />
            <ProjectCard
              href="/project/gutter-installation-for-suburban-home"
              imageUrl="https://c.animaapp.com/mhqqgvrna0ssg4/assets/676a8002e484cc03c65b1d54_project-03.avif"
              location="Urbandale, IA"
              title="Gutter installation for suburban home"
            />
            <ProjectCard
              href="/project/roof-repair-on-historic-property"
              imageUrl="https://c.animaapp.com/mhqqgvrna0ssg4/assets/676a802e7b0239638dc97e81_project-04.avif"
              location="Clive, IA"
              title="Roof repair on historic property"
            />
            <ProjectCard
              href="/project/residential-roof-replacement-project"
              imageUrl="https://c.animaapp.com/mhqqgvrna0ssg4/assets/671725b36b73774eedd91e74_project-05.avif"
              location="Cedar Creek Village"
              title="Residential Roof Replacement Project"
            />
            <ProjectCard
              href="/project/roof-repair-for-a-historic-gem"
              imageUrl="https://c.animaapp.com/mhqqgvrna0ssg4/assets/676a8111360720981cf2baeb_project-06.avif"
              location="Depot Road Midland"
              title="Roof repair for a historic gem"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
