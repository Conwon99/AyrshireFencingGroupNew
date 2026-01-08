export const CTASection = () => {
  return (
    <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
      <div className="relative bg-white box-border caret-transparent mt-[-50px] mx-[30px] pb-2.5 px-2.5 rounded-[20px] md:mt-[-130px] md:mx-[60px] md:pb-5 md:px-5">
        <img
          src="https://c.animaapp.com/miakqmnoJuBvHF/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt="Shape 02"
          className="absolute box-border caret-transparent h-5 max-w-full rotate-90 w-5 -left-5 top-[50px] md:top-[130px]"
        />
        <img
          src="https://c.animaapp.com/miakqmnoJuBvHF/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt="Shape 02"
          className="absolute box-border caret-transparent h-5 max-w-full w-5 -right-5 top-[50px] md:top-[130px]"
        />
        <div className="relative bg-slate-200 box-border caret-transparent gap-x-[15px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[15px] p-[15px] rounded-[20px] md:gap-x-[100px] md:grid-cols-[1fr_0.75fr] md:gap-y-[100px] md:p-[70px]">
          <h2 className="text-gray-900 text-2xl font-bold box-border caret-transparent leading-[28.8px] md:text-[50px] md:leading-[60px]">
            Get a free estimate today
          </h2>
          <div className="items-start box-border caret-transparent gap-x-5 flex flex-col justify-between gap-y-5 text-left md:items-end md:text-right">
            <p className="box-border caret-transparent text-left mb-2.5 md:text-right">
              A typical roof installation takes 1-3 days depending on the size
              of the roof.
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
      <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1.25fr] grid-rows-[auto] gap-y-[30px] mt-[30px] mb-10 md:gap-x-20 md:grid-cols-[0.75fr_1.25fr_0.5fr] md:gap-y-20 md:my-20">
        <div className="box-border caret-transparent">
          <a
            href="/"
            className="box-border caret-transparent inline-block max-w-full underline mb-5 md:mb-10 hover:decoration-transparent"
          >
            <img
              src="https://c.animaapp.com/miakqmnoJuBvHF/assets/67a317271f522bf735b96b50_roofinger.svg"
              alt="Roofinger logo"
              className="box-border caret-transparent inline-block h-[34px] max-w-full w-full md:h-10"
            />
          </a>
          <p className="text-white box-border caret-transparent mb-2.5">
            Each of these captures the essence of what makes your insurance
            service stand out, focusing on key aspects.
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
                className="absolute text-white bg-transparent bg-[url('https://cdn.prod.website-files.com/670f4a042a66942f7e529f31/670f922e1c7b30c0affab90e_arrow-01.svg')] bg-no-repeat box-border caret-transparent block h-10 text-center text-nowrap w-10 bg-center my-auto p-0 right-2.5 inset-y-[5px]"
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
              className="text-white bg-red-700 box-border caret-transparent hidden text-center mt-2.5 p-[15px] rounded-[20px]"
            >
              <div className="box-border caret-transparent">
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-2 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-2 md:gap-x-[60px] md:grid-cols-[1fr_1fr_1.5fr] md:gap-y-[60px]">
          <div className="items-start box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 md:gap-x-5 md:gap-y-5">
            <a
              href="/"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Home 1
            </a>
            <a
              href="/home-2"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Home 2
            </a>
            <a
              href="/about"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              About
            </a>
            <a
              href="/services"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Services
            </a>
            <a
              href="/service-static"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Service Static
            </a>
            <a
              href="/projects"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Projects
            </a>
            <a
              href="/pricing"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Pricing
            </a>
          </div>
          <div className="items-start box-border caret-transparent gap-x-2 flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start gap-y-2 md:gap-x-5 md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto md:gap-y-5">
            <a
              href="/blog"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Contact
            </a>
            <a
              href="/privacy-policy"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Privacy Policy
            </a>
            <a
              href="/utility-pages/style-guide"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Style Guide
            </a>
            <a
              href="/utility-pages/instructions"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Instructions
            </a>
            <a
              href="/utility-pages/licenses"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Licenses
            </a>
            <a
              href="/utility-pages/changelog"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Changelog
            </a>
          </div>
          <div className="items-start box-border caret-transparent gap-x-2 flex flex-col justify-start gap-y-2 md:gap-x-5 md:gap-y-5">
            <a
              href="/utility-pages/coming-soon"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Coming Soon
            </a>
            <a
              href="/utility-pages/link-in-bio"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Link in Bio
            </a>
            <a
              href="https://roofinger-wbs.webflow.io/401"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Password Protected
            </a>
            <a
              href="https://roofinger-wbs.webflow.io/404"
              className="text-white box-border caret-transparent block hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
            >
              Error 404
            </a>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-5 flex flex-col justify-between gap-y-5 md:gap-x-[30px] md:gap-y-[30px]">
          <div className="items-start box-border caret-transparent gap-x-[15px] flex flex-col justify-start gap-y-[15px] md:gap-x-5 md:gap-y-5">
            <div className="text-white items-start box-border caret-transparent gap-x-2.5 flex justify-start gap-y-2.5">
              <img
                src="https://c.animaapp.com/miakqmnoJuBvHF/assets/67108bda6761bcf051e210eb_envelope.svg"
                alt=""
                className="box-border caret-transparent h-6 max-w-full w-6 mt-1"
              />
              <a
                href="mailto://example@gmail.com"
                className="box-border caret-transparent block underline hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
              >
                example@gmail.com
              </a>
            </div>
            <div className="text-white items-start box-border caret-transparent gap-x-2.5 flex justify-start gap-y-2.5">
              <img
                src="https://c.animaapp.com/miakqmnoJuBvHF/assets/670f86de88858acaf330ddd9_phone.svg"
                alt=""
                className="box-border caret-transparent h-6 max-w-full w-6 mt-1"
              />
              <a
                href="tel://+1(555)123-4567"
                className="box-border caret-transparent block underline hover:text-yellow-500 hover:decoration-transparent hover:border-yellow-500"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="text-white items-start box-border caret-transparent gap-x-2.5 flex justify-start gap-y-2.5">
              <img
                src="https://c.animaapp.com/miakqmnoJuBvHF/assets/67108bda6d31254d6c320ce3_location-01.svg"
                alt=""
                className="box-border caret-transparent h-6 max-w-full w-6 mt-1"
              />
              <div className="box-border caret-transparent">
                544 Honey Creek Rd., West Des Moines, IA 50265
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-[15px] flex gap-y-[15px]">
            <a
              href="https://www.instagram.com/"
              className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-yellow-500 hover:decoration-transparent"
            >
              <img
                src="https://c.animaapp.com/miakqmnoJuBvHF/assets/670f58e333797fd0eb9fa085_instagram.svg"
                alt="Social Icon"
                className="box-border caret-transparent h-5 max-w-full w-5"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-yellow-500 hover:decoration-transparent"
            >
              <img
                src="https://c.animaapp.com/miakqmnoJuBvHF/assets/670f58e375e253beb4db0e54_facebook.svg"
                alt="Social Icon"
                className="box-border caret-transparent h-5 max-w-full w-5"
              />
            </a>
            <a
              href="https://twitter.com/"
              className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-yellow-500 hover:decoration-transparent"
            >
              <img
                src="https://c.animaapp.com/miakqmnoJuBvHF/assets/670f58e3c0bab665af9c269a_twitter-x.svg"
                alt="Social Icon"
                className="box-border caret-transparent h-5 max-w-full w-5"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="items-start box-border caret-transparent flex justify-center">
        <div className="relative text-sm items-start bg-white box-border caret-transparent flex justify-center leading-[21px] mx-2.5 pt-2.5 px-[15px] rounded-t-[10px] md:text-lg md:leading-[27px] md:mx-[42px] md:pt-5 md:px-[30px] md:rounded-t-none">
          <p className="text-gray-900 text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px]">
            Designed by{" "}
            <a
              href="https://webestica.com/"
              className="text-yellow-500 text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px] hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
            >
              Webestica
            </a>
            , Powered by{" "}
            <a
              href="https://webflow.com/"
              className="text-yellow-500 text-sm box-border caret-transparent leading-[21px] md:text-lg md:leading-[27px] hover:text-gray-900 hover:decoration-transparent hover:border-gray-900"
            >
              Webflow
            </a>
          </p>
          <img
            src="https://c.animaapp.com/miakqmnoJuBvHF/assets/67a313f1157f16b6f57c2e09_shape-01.svg"
            alt="Shape 01"
            className="absolute text-sm box-border caret-transparent hidden h-full leading-[21px] max-w-full transform-none -left-8 top-[0%] md:text-lg md:block md:left-[-42px] md:leading-[27px]"
          />
          <img
            src="https://c.animaapp.com/miakqmnoJuBvHF/assets/67a313f1157f16b6f57c2e09_shape-01.svg"
            alt="Shape 01"
            className="absolute text-sm box-border caret-transparent hidden h-full leading-[21px] max-w-full transform-none -right-8 bottom-[0%] md:text-lg md:block md:leading-[27px] md:right-[-42px] md:scale-x-[-1px] md:scale-y-[-1px]"
          />
        </div>
      </div>
    </div>
  );
};
