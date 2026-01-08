export const VideoPlayer = () => {
  return (
    <div className="relative text-white box-border caret-transparent h-[250px] overflow-hidden rounded-r-[20px] rounded-tl-[20px] md:h-[550px]">
      <video
        autoplay=""
        loop=""
        muted=""
        playsinline=""
        className="absolute bg-[url('https://cdn.prod.website-files.com/670f4a042a66942f7e529f31%2F670f9f7aa00205c29381c215_video-01-poster-00001.webp')] bg-cover box-border caret-transparent h-full object-cover w-full z-[-100] bg-center m-auto -inset-full"
      >
        <source
          src="https://cdn.prod.website-files.com/670f4a042a66942f7e529f31/670f9f7aa00205c29381c215_video-01-transcode.mp4"
          className="text-black text-base font-normal box-border caret-transparent leading-[normal] font-times_new_roman"
        />
        <source
          src="https://cdn.prod.website-files.com/670f4a042a66942f7e529f31/670f9f7aa00205c29381c215_video-01-transcode.webm"
          className="text-black text-base font-normal box-border caret-transparent leading-[normal] font-times_new_roman"
        />
      </video>
      <div className="absolute bg-slate-50 box-border caret-transparent z-[2] pr-2.5 pt-2.5 rounded-tr-[30px] left-[0%] bottom-[0%]">
        <img
          src="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a33bc177a707bbe6ba45aa_shape-04.svg"
          alt="Shape 04"
          className="absolute box-border caret-transparent h-5 max-w-full -rotate-90 w-5 left-0 -top-5 md:h-[26px] md:top-[-25px] md:w-[26px]"
        />
        <img
          src="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a33bc177a707bbe6ba45aa_shape-04.svg"
          alt="Shape 04"
          className="absolute box-border caret-transparent h-5 max-w-full -rotate-90 w-5 -right-5 bottom-0 md:h-[26px] md:right-[-25px] md:w-[26px]"
        />
        <div className="box-border caret-transparent">
          <button
            type="button"
            className="items-center bg-orange-500 caret-transparent flex flex-col h-10 justify-center text-center w-10 p-0 rounded-[50%] left-5 right-[18px] bottom-5 md:h-[50px] md:w-[50px] md:left-auto md:bottom-[18px]"
          >
            <span className="box-border caret-transparent block">
              <img
                src="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a57181aa6955efd0f01cd_pause.svg"
                alt="Pause video"
                className="box-border caret-transparent inline-block h-5 max-w-full w-[15px]"
              />
            </span>
            <span className="box-border caret-transparent hidden">
              <img
                alt="Play video"
                src="https://c.animaapp.com/mhooxuovKXaEfR/assets/676a5718e940776dc51997db_play.svg"
                className="box-border caret-transparent inline-block h-5 max-w-full w-[15px]"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
