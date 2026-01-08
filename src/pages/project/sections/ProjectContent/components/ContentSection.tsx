import { getProjectBySlug } from "@/data/projects";

interface ContentSectionProps {
  slug?: string;
}

export const ContentSection = ({ slug }: ContentSectionProps) => {
  const project = getProjectBySlug(slug);

  // Fallback content if project doesn't have specific content
  const challenge = project?.challenge || "Every property in Ayrshire presents unique challenges when it comes to fencing and decking installation. This project required careful planning to address specific site conditions, including varying ground levels, existing structures, and the client's vision for their outdoor space. Our team conducted a thorough site assessment to identify potential obstacles and develop a comprehensive solution that would meet both functional and aesthetic requirements.";
  
  const solution = project?.solution || "Our solution began with a detailed consultation to understand the client's specific needs and preferences. We provided expert advice on material selection, design options, and installation methods that would best suit their property in Ayrshire. Using high-quality materials sourced from trusted suppliers, we ensured durability and longevity for the installation. The installation process was carefully managed with attention to detail at every stage.";
  
  const solutionPoints = project?.solutionPoints || [
    "Detailed consultation and planning",
    "High-quality materials selection",
    "Professional installation techniques",
    "Attention to detail throughout",
    "Quality assurance and finishing"
  ];
  
  const result = project?.result || "The completed installation exceeded the client's expectations, delivering a beautiful and functional solution that enhances their property. The quality of workmanship and attention to detail is evident throughout, with every component properly installed and finished to a professional standard. The client was delighted with the results, noting the significant improvement to their property's appearance and functionality.";

  return (
    <div className="box-border caret-transparent max-w-[980px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
          <h5 className="text-white text-[22px] font-bold box-border caret-transparent leading-[28.6px] mb-2.5 md:text-[26px] md:leading-[33.8px]">
            01. The Challenge
          </h5>
          <p className="text-gray-200 box-border caret-transparent mb-5 md:mb-10">
            {challenge}
          </p>
          <h5 className="text-white text-[22px] font-bold box-border caret-transparent leading-[28.6px] mb-2.5 md:text-[26px] md:leading-[33.8px]">
            02. The Solution
          </h5>
          <p className="text-gray-200 box-border caret-transparent mb-5 md:mb-10">
            {solution}
          </p>
          {solutionPoints && solutionPoints.length > 0 && (
            <ul
              role="list"
              className="box-border caret-transparent overflow-hidden mb-5 pl-[26px] md:mb-10"
            >
              {solutionPoints.map((point, index) => (
                <li key={index} className="text-gray-200 box-border caret-transparent mb-2.5">
                  {point}
                </li>
              ))}
            </ul>
          )}
          <h5 className="text-white text-[22px] font-bold box-border caret-transparent leading-[28.6px] mb-2.5 md:text-[26px] md:leading-[33.8px]">
            03. The Result
          </h5>
          <p className="text-gray-200 box-border caret-transparent mb-5 md:mb-10">
            {result}
          </p>
        </div>
      </div>
    </div>
  );
};
