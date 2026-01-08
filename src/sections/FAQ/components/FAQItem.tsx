export type FAQItemProps = {
  question: string;
  answer?: string;
  isOpen?: boolean;
};

export const FAQItem = (props: FAQItemProps) => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-col justify-center">
      <div className="items-start box-border caret-transparent gap-x-5 flex justify-between gap-y-5 md:gap-x-[normal] md:gap-y-[normal]">
        <h3
          className={`font-bold box-border caret-transparent md:text-[22px] md:leading-[28.6px] ${props.isOpen ? "text-orange-500 text-lg leading-[23.4px]" : "text-gray-900 text-xl leading-[26px]"}`}
        >
          {props.question}
        </h3>
        <div
          className={`items-center box-border caret-transparent flex shrink-0 justify-center min-h-5 w-5 mt-1 rounded-[50%] md:min-h-6 md:w-6 md:mt-0 ${props.isOpen ? "bg-orange-500" : "bg-gray-900"}`}
        >
          <div className="relative items-center box-border caret-transparent flex shrink-0 justify-center min-h-3.5 w-3.5">
            <div className="absolute bg-white box-border caret-transparent shrink-0 h-0 min-h-0.5 w-4/5 md:h-0.5 md:w-full"></div>
            <div
              className={`absolute bg-white box-border caret-transparent shrink-0 h-0.5 min-h-0.5 w-4/5 md:w-full ${!props.isOpen ? "rotate-90" : ""}`}
            ></div>
          </div>
        </div>
      </div>
      {props.isOpen && props.answer && (
        <div className="box-border caret-transparent items-start flex flex-col justify-start overflow-hidden">
          <p className="text-sm box-border caret-transparent leading-[22.4px] max-w-full pt-5 md:text-lg md:leading-[27px] md:max-w-none">
            {props.answer}
          </p>
        </div>
      )}
      <div className="bg-gray-900 box-border caret-transparent h-0.5 opacity-10 w-full mt-5 md:mt-[30px]"></div>
    </div>
  );
};
