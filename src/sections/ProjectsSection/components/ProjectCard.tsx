export type ProjectCardProps = {
  href: string;
  imageUrl: string;
  imageAlt?: string;
  location: string;
  title: string;
  locationIconUrl?: string;
  locationIconAlt?: string;
  shapeIconUrl?: string;
  shapeIconAlt?: string;
};



export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <a
      aria-label="link"
      href={props.href}
      className="box-border caret-transparent inline-block h-full max-w-full w-full hover:decoration-transparent"
    >
      <div className="relative box-border caret-transparent overflow-hidden mb-2.5 rounded-r-[20px] rounded-b-[20px] md:mb-5">
        <img
          src={props.imageUrl}
          alt={props.imageAlt || ""}
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
        <div className="absolute bg-gray-800 box-border caret-transparent pr-2.5 pb-2.5 rounded-br-[20px] left-[0%] top-[0%] md:pr-[15px] md:pb-[15px]">
          <div className="text-white text-xs font-bold items-center bg-gray-800 box-border caret-transparent gap-x-1.5 flex justify-start leading-[16.8px] gap-y-1.5 px-2.5 py-1 rounded-[10px] left-2.5 top-2.5 md:text-sm md:leading-[19.6px] md:pr-5 md:py-2 md:left-auto md:top-auto">
            <img
              src={
                props.locationIconUrl ||
                "https://c.animaapp.com/mhooxuovKXaEfR/assets/676a5588102623a5b87071eb_location-dot.svg"
              }
              alt={props.locationIconAlt || "Location icon"}
              className="text-xs box-border caret-transparent h-[18px] leading-[16.8px] max-w-full w-5 md:text-sm md:h-5 md:leading-[19.6px]"
            />
            <div className="text-xs box-border caret-transparent leading-[16.8px] md:text-sm md:leading-[19.6px]">
              {props.location}
            </div>
          </div>
          <img
            src={
              props.shapeIconUrl ||
              "https://c.animaapp.com/mhooxuovKXaEfR/assets/67a32569be90004c73f6cf4e_bf4df3c7f28098d382f9ca48f7190044_shape-03.svg"
            }
            alt=""
            aria-hidden="true"
            className="absolute box-border caret-transparent h-5 max-w-full w-5 -right-5 top-[0%]"
            style={{ filter: 'brightness(0) saturate(100%) invert(20%)' }}
          />
          <img
            src={
              props.shapeIconUrl ||
              "https://c.animaapp.com/mhooxuovKXaEfR/assets/67a32569be90004c73f6cf4e_bf4df3c7f28098d382f9ca48f7190044_shape-03.svg"
            }
            alt=""
            aria-hidden="true"
            className="absolute bottom-[-19px] box-border caret-transparent h-5 max-w-full w-5 left-[0%]"
            style={{ filter: 'brightness(0) saturate(100%) invert(20%)' }}
          />
        </div>
      </div>
      <div className="box-border caret-transparent">
        <h3 className="text-white text-xl font-bold box-border caret-transparent leading-[26.4px] sm:text-[22px] md:text-[26px] md:leading-[31.2px]">
          {props.title}
        </h3>
      </div>
    </a>
  );
};
