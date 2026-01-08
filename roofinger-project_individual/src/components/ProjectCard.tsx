export type ProjectCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
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
        <div className="relative box-border caret-transparent overflow-hidden mb-2.5 rounded-r-[20px] rounded-b-[20px] md:mb-5">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          />
          <div className="absolute bg-white box-border caret-transparent pr-2.5 pb-2.5 rounded-br-[20px] left-[0%] top-[0%] md:pr-[15px] md:pb-[15px]">
            <div className="text-white text-xs font-bold items-center bg-gray-900 box-border caret-transparent gap-x-1.5 flex justify-start leading-[16.8px] gap-y-1.5 px-2.5 py-1 rounded-[10px] left-2.5 top-2.5 md:text-sm md:leading-[19.6px] md:pr-5 md:py-2 md:left-auto md:top-auto">
              <img
                src="https://c.animaapp.com/miakqmnoJuBvHF/assets/676a5588102623a5b87071eb_location-dot.svg"
                alt=""
                className="text-xs box-border caret-transparent h-[18px] leading-[16.8px] max-w-full w-5 md:text-sm md:h-5 md:leading-[19.6px]"
              />
              <div className="text-xs box-border caret-transparent leading-[16.8px] md:text-sm md:leading-[19.6px]">
                {props.location}
              </div>
            </div>
            <img
              src="https://c.animaapp.com/miakqmnoJuBvHF/assets/67a33bc177a707bbe6ba45aa_shape-04.svg"
              alt="Shape 04"
              className="absolute box-border caret-transparent h-5 max-w-full w-5 -right-5 top-[0%]"
            />
            <img
              src="https://c.animaapp.com/miakqmnoJuBvHF/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
              alt="Shape 02"
              className="absolute bottom-[-19px] box-border caret-transparent h-5 max-w-full w-5 left-[0%]"
            />
          </div>
        </div>
        <div className="box-border caret-transparent">
          <h3 className="text-gray-900 text-[22px] font-bold box-border caret-transparent leading-[26.4px] md:text-[26px] md:leading-[31.2px]">
            {props.title}
          </h3>
        </div>
      </a>
    </div>
  );
};
