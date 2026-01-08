export type ValueCardProps = {
  variant: string;
  iconUrl: string;
  iconAlt: string;
  title: string;
  titleClassName?: string;
  description: string;
  descriptionClassName?: string;
};

export const ValueCard = (props: ValueCardProps) => {
  return (
    <div
      className={`relative text-gray-900 items-start box-border caret-transparent flex flex-col justify-start overflow-hidden p-5 rounded-r-[20px] rounded-b-[20px] ${props.variant}`}
    >
      <div className="relative bg-white box-border caret-transparent z-[2] -ml-5 -mt-5 mb-[30px] pr-2.5 pb-2.5 rounded-br-[30px]">
        <img
          src="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt="Shape 02"
          className="absolute box-border caret-transparent h-5 max-w-full w-5 -right-5 top-[0%] md:h-[26px] md:right-[-25px] md:w-[26px]"
        />
        <img
          src="https://c.animaapp.com/mhozf8vs0Lu3gx/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt="Shape 02"
          className="absolute box-border caret-transparent h-5 max-w-full w-5 left-[0%] -bottom-5 md:bottom-[-25px] md:h-[26px] md:w-[26px]"
        />
        <div
          className={`relative items-center box-border caret-transparent flex h-11 justify-center w-11 rounded-[50%] md:h-[54px] md:w-[54px] ${props.variant}`}
        >
          <img
            src={props.iconUrl}
            alt={props.iconAlt}
            className="box-border caret-transparent h-6 max-w-full w-6 md:h-[30px] md:w-[30px]"
          />
        </div>
      </div>
      <h2
        className={`text-xl font-bold box-border caret-transparent leading-6 mb-2.5 md:text-2xl md:leading-[28.8px] ${props.titleClassName || ""}`}
      >
        {props.title}
      </h2>
      <p
        className={`box-border caret-transparent mb-2.5 ${props.descriptionClassName || ""}`}
      >
        {props.description}
      </p>
    </div>
  );
};
