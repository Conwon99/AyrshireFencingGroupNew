export type ServiceCardProps = {
  href?: string;
  iconUrl: string;
  iconAlt: string;
  title: string;
  description: string;
};



export const ServiceCard = (props: ServiceCardProps) => {
  const content = (
    <>
      <div className="box-border caret-transparent">
        <div className="relative box-border caret-transparent mb-[30px]">
          <img
            src={props.iconUrl}
            alt={props.iconAlt}
            className="box-border caret-transparent inline-block h-10 max-w-full w-10"
          />
        </div>
        <div className="box-border caret-transparent">
          <h3 className="text-white text-xl font-bold box-border caret-transparent leading-[26.4px] mb-2.5 sm:text-[22px] md:text-[26px] md:leading-[31.2px]">
            {props.title}
          </h3>
          <p className="text-gray-200 text-sm sm:text-base box-border caret-transparent my-[30px] md:my-[50px] leading-relaxed">
            {props.description}
          </p>
        </div>
      </div>
      <div className="relative bg-[#323232] box-border caret-transparent z-[2] -ml-5 -mb-5 pr-2.5 pt-2.5 rounded-tr-[30px] md:mb-[-30px] md:ml-[-30px]">
        <img
          src="https://c.animaapp.com/mial13ktyN5Jkh/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt=""
          aria-hidden="true"
          className="absolute box-border caret-transparent h-5 max-w-full -rotate-90 w-5 left-0 -top-5 md:h-[26px] md:top-[-25px] md:w-[26px] md:-left-px"
          style={{ filter: 'brightness(0) saturate(100%) invert(20%)' }}
        />
        <img
          src="https://c.animaapp.com/mial13ktyN5Jkh/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt=""
          aria-hidden="true"
          className="absolute box-border caret-transparent h-5 max-w-full -rotate-90 w-5 -right-5 bottom-0 md:h-[26px] md:right-[-25px] md:w-[26px] md:-bottom-px"
          style={{ filter: 'brightness(0) saturate(100%) invert(20%)' }}
        />
        <div className="relative items-center bg-[#787e59] box-border caret-transparent flex h-10 justify-center w-10 rounded-[50%] md:h-[54px] md:w-[54px]">
          <img
            src="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922e1c7b30c0affab90e_arrow-01.svg"
            alt="Arrow icon - View service"
            className="box-border caret-transparent h-3.5 max-w-full w-5 md:h-4 md:w-[22px]"
            style={{ filter: 'brightness(0) saturate(100%)' }}
          />
        </div>
      </div>
    </>
  );

  if (props.href) {
    return (
      <a href={props.href}
        className="relative items-start bg-[#787e59] box-border caret-transparent flex flex-col justify-between max-w-full overflow-hidden p-5 rounded-r-[20px] rounded-tl-[20px] md:p-[30px] hover:decoration-transparent"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="relative items-start bg-[#787e59] box-border caret-transparent flex flex-col justify-between max-w-full overflow-hidden p-5 rounded-r-[20px] rounded-tl-[20px] md:p-[30px]">
      {content}
    </div>
  );
};
