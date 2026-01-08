export type BlogCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  date: string;
};

export const BlogCard = (props: BlogCardProps) => {
  return (
    <a
      aria-label="Link"
      href={props.href}
      className="box-border caret-transparent inline-block h-full max-w-full w-full hover:decoration-transparent"
    >
      <div className="relative box-border caret-transparent overflow-hidden mb-2.5 rounded-r-[20px] rounded-b-[20px] md:mb-5">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="box-border caret-transparent inline-block h-full max-w-full w-full"
        />
        <div className="absolute bg-white box-border caret-transparent pr-2.5 pb-2.5 rounded-br-[20px] left-[0%] top-[0%] md:pr-[15px] md:pb-[15px]">
          <div className="text-gray-900 text-sm font-semibold bg-slate-200 box-border caret-transparent leading-[21px] px-[18px] py-2 rounded-[10px] md:px-4">
            {props.category}
          </div>
          <img
            src="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
            alt="Shape 02"
            className="absolute box-border caret-transparent h-5 max-w-full w-5 -right-5 top-[0%]"
          />
          <img
            src="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
            alt="Shape 02"
            className="absolute bottom-[-19px] box-border caret-transparent h-5 max-w-full w-5 left-[0%]"
          />
        </div>
      </div>
      <div className="box-border caret-transparent">
        <h3 className="text-gray-900 text-[22px] font-bold box-border caret-transparent leading-[28.6px] mb-2.5 md:text-[26px] md:leading-[33.8px]">
          {props.title}
        </h3>
        <div className="box-border caret-transparent">{props.date}</div>
      </div>
    </a>
  );
};
