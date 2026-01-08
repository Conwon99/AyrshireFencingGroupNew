export const CTABanner = () => {
  return (
    <div className="relative bg-white box-border caret-transparent mt-[-50px] mx-[30px] pb-2.5 px-2.5 rounded-[20px] md:mt-[-130px] md:mx-[60px] md:pb-5 md:px-5">
      <img
        src="https://c.animaapp.com/mhqqhnhjBr0jWt/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
        alt="Shape 02"
        className="absolute box-border caret-transparent h-5 max-w-full rotate-90 w-5 -left-5 top-[50px] md:top-[130px]"
      />
      <img
        src="https://c.animaapp.com/mhqqhnhjBr0jWt/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
        alt="Shape 02"
        className="absolute box-border caret-transparent h-5 max-w-full w-5 -right-5 top-[50px] md:top-[130px]"
      />
      <div className="relative bg-slate-200 box-border caret-transparent gap-x-[15px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[15px] p-[15px] rounded-[20px] md:gap-x-[100px] md:grid-cols-[1fr_0.75fr] md:gap-y-[100px] md:p-[70px]">
        <h2 className="text-gray-900 text-2xl font-bold box-border caret-transparent leading-[28.8px] md:text-[50px] md:leading-[60px]">
          Get a free estimate today
        </h2>
        <div className="items-start box-border caret-transparent gap-x-5 flex flex-col justify-between gap-y-5 text-left md:items-end md:text-right">
          <p className="box-border caret-transparent text-left mb-2.5 md:text-right">
            A typical roof installation takes 1-3 days depending on the size of
            the roof.
          </p>
          <a
            href="/contact"
            className="text-gray-900 text-sm font-bold bg-yellow-500 box-border caret-transparent block leading-[19.6px] text-center border border-yellow-500 px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:text-white hover:bg-gray-900 hover:decoration-transparent"
          >
            Request a free estimate
          </a>
        </div>
      </div>
    </div>
  );
};
