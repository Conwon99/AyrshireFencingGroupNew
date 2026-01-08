import { ContactForm } from "@/components/ContactForm";

export const ContactFormSection = () => {
  return (
    <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:gap-x-[50px] md:grid-cols-[1fr_1fr] md:gap-y-[50px]">
      <div className="box-border caret-transparent overflow-hidden rounded-[20px]">
        <img
          src="https://c.animaapp.com/mhqqiiyn5JzZir/assets/67123e05f4550dcd381f1dc1_contact-01.avif"
          alt="Contact Image"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full scale-[1.00785px] md:scale-[1.02331px]"
        />
      </div>
      <div className="bg-slate-50 box-border caret-transparent p-5 rounded-[20px] md:p-10">
        <h2 className="text-gray-900 text-lg font-bold box-border caret-transparent leading-[23.4px] mb-2.5 md:text-[22px] md:leading-[28.6px]">
          We’re here for all your roofing needs
        </h2>
        <div className="box-border caret-transparent mt-[30px] mb-[15px]">
          <ContactForm />
          <div
            role="region"
            aria-label="Contact Form success"
            className="text-white bg-emerald-500 box-border caret-transparent hidden text-center p-[15px] rounded-[20px]"
          >
            <div className="box-border caret-transparent">
              Thank you! Your submission has been received!
            </div>
          </div>
          <div
            role="region"
            aria-label="Contact Form failure"
            className="text-white bg-red-700 box-border caret-transparent hidden text-center mt-2.5 p-[15px] rounded-[20px]"
          >
            <div className="box-border caret-transparent">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
