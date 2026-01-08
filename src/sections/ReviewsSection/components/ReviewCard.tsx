export type ReviewCardProps = {
  author: string;
  text: string;
  isRecommendation?: boolean;
};

export const ReviewCard = (props: ReviewCardProps) => {
  return (
    <div className="bg-gray-800 box-border caret-transparent flex flex-col gap-y-4 max-w-full overflow-hidden p-5 rounded-[20px] md:p-[30px] md:gap-y-5">
      <div className="box-border caret-transparent">
        {props.isRecommendation && (
          <div className="text-green-500 text-sm font-medium box-border caret-transparent mb-2 md:text-base">
            ★ Recommended
          </div>
        )}
        <div className="text-white text-lg font-semibold box-border caret-transparent leading-6 mb-2 md:text-xl md:leading-7">
          {props.author}
        </div>
        <p className="text-gray-200 text-base box-border caret-transparent leading-6 md:text-lg md:leading-7">
          "{props.text}"
        </p>
      </div>
      <div className="box-border caret-transparent flex items-center gap-x-1 mt-auto">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="text-green-500 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};


