export const Badge = () => {
  return (
    <div className="absolute bg-[#323232] box-border caret-transparent pt-2.5 pb-[15px] px-[15px] right-1/4 top-[0%] md:pl-5 md:pr-[25px] md:pt-[15px] md:pb-[25px] md:right-[22%]">
      <h2 className="text-white text-4xl font-bold box-border caret-transparent leading-[25.2px] md:text-[56px] md:leading-[39.2px]">
        13+
      </h2>
      <img
        src="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a313f1157f16b6f57c2e09_shape-01.svg"
        alt="Shape 01"
        className="absolute box-border caret-transparent h-full left-[-46px] max-w-full top-[0%] md:left-[-69px]"
        style={{ filter: 'brightness(0) saturate(100%) invert(20%)' }}
      />
      <img
        src="https://c.animaapp.com/mhooxuovKXaEfR/assets/67a313f1157f16b6f57c2e09_shape-01.svg"
        alt="Shape 01"
        className="absolute box-border caret-transparent h-full max-w-full right-[-46px] top-[0%] md:right-[-69px] scale-x-[-1]"
        style={{ filter: 'brightness(0) saturate(100%) invert(20%)' }}
      />
    </div>
  );
};
