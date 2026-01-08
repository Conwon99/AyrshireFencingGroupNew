export const NavbarCTA = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-5 hidden col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-end min-h-0 min-w-0 gap-y-5 md:gap-x-[35px] md:flex md:min-h-[auto] md:min-w-[auto] md:gap-y-[35px]">
      <a
        href="/contact"
        className="text-gray-900 text-sm font-bold bg-yellow-500 box-border caret-transparent inline-block leading-[19.6px] min-h-0 min-w-0 text-center border border-yellow-500 px-6 py-2 rounded-[50px] border-solid md:text-lg md:block md:leading-[25.2px] md:min-h-[auto] md:min-w-[auto] md:px-[30px] md:py-3 hover:text-white hover:bg-gray-900 hover:decoration-transparent"
      >
        Contact us
      </a>
    </div>
  );
};
