import { NewsletterForm } from "@/sections/Footer/components/NewsletterForm";

export const FooterNewsletter = () => {
  return (
    <div className="box-border caret-transparent">
      <a
        href="/"
        className="box-border caret-transparent inline-block max-w-full underline mb-5 md:mb-10 hover:decoration-transparent"
      >
        <img
          src="https://c.animaapp.com/mhqqgvrna0ssg4/assets/67a317271f522bf735b96b50_roofinger.svg"
          alt="Roofinger logo"
          className="box-border caret-transparent inline-block h-[34px] max-w-full w-full md:h-10"
        />
      </a>
      <p className="text-white box-border caret-transparent mb-2.5">
        Each of these captures the essence of what makes your insurance service
        stand out, focusing on key aspects.
      </p>
      <div className="box-border caret-transparent mt-[30px] mb-[15px]">
        <NewsletterForm />
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
  );
};
