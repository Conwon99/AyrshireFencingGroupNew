import { ContactForm } from "@/pages/contact/components/ContactForm";

export const ContactFormSection = () => {
  return (
    <div className="box-border caret-transparent mb-[50px] md:mb-[70px]">
      <div className="bg-[#787e59] box-border caret-transparent p-4 sm:p-5 rounded-[20px] md:p-10 max-w-[800px] mx-auto border-2 border-[#787e59] shadow-lg">
        <h2 className="text-white text-lg font-bold box-border caret-transparent leading-[23.4px] mb-2.5 md:text-[22px] md:leading-[28.6px]">
          We're here for all your fencing and decking needs
        </h2>
        <div className="box-border caret-transparent mt-[30px] mb-[15px]">
          <ContactForm />
          <div
            role="region"
            aria-label="Contact Form success"
            className="text-white bg-[#787e59] box-border caret-transparent hidden text-center p-[15px] rounded-[20px]"
          >
            <div className="box-border caret-transparent">
              Thank you! Your submission has been received!
            </div>
          </div>
          <div
            role="region"
            aria-label="Contact Form failure"
            className="text-white bg-[#8a9168] box-border caret-transparent hidden text-center mt-2.5 p-[15px] rounded-[20px]"
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

