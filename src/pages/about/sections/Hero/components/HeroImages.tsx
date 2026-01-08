export const HeroImages = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-2.5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] mb-[-30px] gap-y-2.5 md:gap-x-[30px] md:grid-cols-[1fr_1.25fr_1fr] md:mb-[-200px] md:gap-y-[30px]">
      <div className="box-border caret-transparent h-full translate-y-[0.042px] overflow-hidden rounded-[20px] md:h-[260px] md:translate-y-[13.857px]">
        <img
          src="/projects/project-1.webp"
          alt="Professional wooden gate and fencing installation completed by Ayrshire Fencing Group in Ayrshire"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
      <div className="box-border caret-transparent overflow-hidden rounded-[20px]">
        <img
          src="/projects/project-2.webp"
          alt="Professional fencing installation project completed by Ayrshire Fencing Group in Ayrshire"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
      <div className="box-border caret-transparent h-full translate-y-[-50px] overflow-hidden rounded-[20px] md:h-[270px] md:translate-y-[-21.555px]">
        <img
          src="/projects/project-3.webp"
          alt="Professional wooden fencing installation completed by Ayrshire Fencing Group in Ayrshire"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
    </div>
  );
};

