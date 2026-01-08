export const WhyChooseImage = () => {
  return (
    <div className="relative box-border caret-transparent h-full overflow-hidden rounded-r-[20px] rounded-tl-[20px] md:h-[500px]">
      <img
        src="https://c.animaapp.com/mhqqhnhjBr0jWt/assets/6712070fbf13639d2e9cdb56_why-choose-01.avif"
        sizes="(max-width: 479px) 94vw, (max-width: 991px) 96vw, (max-width: 1279px) 95vw, (max-width: 1919px) 96vw, 1480px"
        alt="WHy Choose Image"
        className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
      />
      <div className="absolute bg-slate-50 box-border caret-transparent z-[2] pr-2.5 pt-2.5 rounded-tr-[30px] left-[0%] bottom-[0%]">
        <a
          href="#"
          aria-label="open lightbox"
          className="items-center bg-yellow-500 box-border caret-transparent flex h-11 justify-center max-w-full underline w-11 rounded-[50%] md:h-[60px] md:w-[60px] hover:bg-slate-200 hover:decoration-transparent"
        >
          <img
            src="https://c.animaapp.com/mhqqhnhjBr0jWt/assets/676a5718e940776dc51997db_play.svg"
            alt=""
            className="box-border caret-transparent h-5 max-w-full w-5 md:h-6 md:w-6"
          />
        </a>
        <img
          src="https://c.animaapp.com/mhqqhnhjBr0jWt/assets/67a33bc177a707bbe6ba45aa_shape-04.svg"
          alt="Shape 04"
          className="absolute box-border caret-transparent h-5 max-w-full -rotate-90 w-5 left-[0%] -top-5 md:h-[26px] md:top-[-25px] md:w-[26px]"
        />
        <img
          src="https://c.animaapp.com/mhqqhnhjBr0jWt/assets/67a33bc177a707bbe6ba45aa_shape-04.svg"
          alt="Shape 04"
          className="absolute box-border caret-transparent h-5 max-w-full right-[-25px] -rotate-90 w-5 -left-5 bottom-[0%] md:h-[26px] md:w-[26px] md:left-auto"
        />
      </div>
    </div>
  );
};
