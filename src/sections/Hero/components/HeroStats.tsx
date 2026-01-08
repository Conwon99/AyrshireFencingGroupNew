export const HeroStats = () => {
  return (
    <div className="backdrop-blur-[21px] bg-[linear-gradient(45deg,rgba(255,255,255,0),rgba(255,255,255,0.33))] box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-52 gap-y-5 border p-3 rounded-lg border-solid border-white/20 md:p-4">
      <div className="box-border caret-transparent gap-x-1 flex flex-col gap-y-1.5">
        <div className="text-white text-[26px] font-medium box-border caret-transparent leading-[34px] md:text-[32px] md:leading-[40px]">
          13+
        </div>
        <div className="text-white text-base box-border caret-transparent leading-7 md:text-lg md:leading-8">
          Years Experience
        </div>
      </div>
      <div className="box-border caret-transparent flex items-center gap-x-1.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="box-border caret-transparent h-5 w-5 text-yellow-400 md:h-6 md:w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <a
          href="https://www.facebook.com/100089970103885/"
          target="_blank"
          rel="noopener noreferrer"
          className="box-border caret-transparent ml-2 hover:opacity-80"
        >
          <svg
            className="box-border caret-transparent h-5 w-5 text-white md:h-6 md:w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

