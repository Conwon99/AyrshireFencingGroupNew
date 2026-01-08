export const FooterCopyright = () => {
  return (
    <div className="items-start box-border caret-transparent flex justify-center">
      <div className="relative text-sm items-start bg-white box-border caret-transparent flex justify-center leading-[21px] mx-2.5 pt-2.5 px-[15px] rounded-t-[10px] md:text-lg md:leading-[27px] md:mx-[42px] md:pt-5 md:px-[30px] md:rounded-t-none">
        <p className="text-gray-900 text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px]">
          Designed by{" "}
          <a
            href="https://webestica.com/"
            className="text-orange-500 text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px] hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
          >
            Webestica
          </a>
          , Powered by{" "}
          <a
            href="https://webflow.com/"
            className="text-orange-500 text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px] hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
          >
            Webflow
          </a>
        </p>
        <img
          src="https://c.animaapp.com/mial13ktyN5Jkh/assets/67a313f1157f16b6f57c2e09_shape-01.svg"
          alt="Shape 01"
          className="absolute text-sm box-border caret-transparent hidden h-full leading-[21px] max-w-full transform-none -left-8 top-[0%] md:text-lg md:block md:left-[-42px] md:leading-[27px]"
        />
        <img
          src="https://c.animaapp.com/mial13ktyN5Jkh/assets/67a313f1157f16b6f57c2e09_shape-01.svg"
          alt="Shape 01"
          className="absolute text-sm box-border caret-transparent hidden h-full leading-[21px] max-w-full transform-none -right-8 bottom-[0%] md:text-lg md:block md:leading-[27px] md:right-[-42px] md:scale-x-[-1px] md:scale-y-[-1px]"
        />
      </div>
    </div>
  );
};
