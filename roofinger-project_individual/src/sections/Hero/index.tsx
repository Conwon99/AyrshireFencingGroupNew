import { ProjectDetails } from "@/sections/Hero/components/ProjectDetails";
import { ImageGallery } from "@/sections/Hero/components/ImageGallery";

export const Hero = () => {
  return (
    <section className="box-border caret-transparent pt-5 pb-10 md:pt-10 md:pb-[50px]">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent text-center w-full mb-5 mx-auto md:w-4/5 md:mb-10">
          <h1 className="text-gray-900 text-4xl font-bold box-border caret-transparent leading-[46.8px] mb-2.5 md:text-[54px] md:leading-[70.2px]">
            Residential roof replacement
          </h1>
          <p className="box-border caret-transparent w-full mb-2.5 mx-auto md:w-9/12">
            {" "}
            We specialize in upgrading and replacing roofs with high-quality
            materials that offer long-lasting durability and enhanced curb
            appeal.{" "}
          </p>
        </div>
        <ProjectDetails />
        <ImageGallery />
      </div>
    </section>
  );
};
