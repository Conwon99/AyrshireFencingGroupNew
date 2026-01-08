export const FooterNewsletter = () => {
  return (
    <div className="box-border caret-transparent">
      <a
        href="/"
        className="box-border caret-transparent inline-block max-w-full underline mb-5 md:mb-10 hover:decoration-transparent"
      >
        <img
          src="/logo.webp"
          alt="Ayrshire Fencing Group Logo"
          className="box-border caret-transparent inline-block h-8 max-w-full w-full md:h-9"
        />
      </a>
      <p className="text-white box-border caret-transparent mb-2.5">
        Each of these captures the essence of what makes your insurance service
        stand out, focusing on key aspects.
      </p>
      <div className="box-border caret-transparent mt-[30px] mb-[15px]">
        <form
          name="wf-form-Footer-Email-Form"
          aria-label="Footer Email Form"
          className="relative box-border caret-transparent"
        >
          <input
            name="Footer-Email"
            placeholder="Enter your email "
            type="email"
            className="text-gray-900 text-base box-border caret-transparent block h-[52px] leading-[25.6px] align-middle w-full border border-slate-200 pl-5 pr-[60px] py-2.5 rounded-[50px] border-solid"
          />
          <input
            type="submit"
            aria-label="Link"
            value=""
            className="absolute text-white bg-transparent bg-[url('https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922e1c7b30c0affab90e_arrow-01.svg')] bg-no-repeat box-border caret-transparent block h-10 text-center text-nowrap w-10 bg-center my-auto p-0 right-2.5 inset-y-[5px]"
          />
        </form>
        <div
          role="region"
          aria-label="Footer Email Form success"
          className="text-white bg-emerald-500 box-border caret-transparent hidden text-center p-[15px] rounded-[20px]"
        >
          <div className="box-border caret-transparent">
            Thank you! Your submission has been received!
          </div>
        </div>
        <div
          role="region"
          aria-label="Footer Email Form failure"
          className="text-white bg-orange-700 box-border caret-transparent hidden text-center mt-2.5 p-[15px] rounded-[20px]"
        >
          <div className="box-border caret-transparent">
            Oops! Something went wrong while submitting the form.
          </div>
        </div>
      </div>
    </div>
  );
};

