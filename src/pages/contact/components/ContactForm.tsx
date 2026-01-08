import { useEffect } from "react";
import { trackFormStart } from "@/utils/analytics";

export const ContactForm = () => {
  useEffect(() => {
    const form = document.querySelector('form[name="wf-form-Contact-Form"]') as HTMLFormElement;
    const successMessage = document.querySelector('[aria-label="Contact Form success"]') as HTMLElement;
    const errorMessage = document.querySelector('[aria-label="Contact Form failure"]') as HTMLElement;

    if (form) {
      // Track form start when user first interacts with any form field
      let formStarted = false;
      const handleFormStart = () => {
        if (!formStarted) {
          formStarted = true;
          trackFormStart('contact');
        }
      };

      const formFields = form.querySelectorAll('input, textarea, select');
      formFields.forEach((field) => {
        field.addEventListener('focus', handleFormStart, { once: true });
        field.addEventListener('click', handleFormStart, { once: true });
      });
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        if (successMessage) successMessage.classList.add("hidden");
        if (errorMessage) errorMessage.classList.add("hidden");

        // Check if form is valid
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const formData = new FormData(form);
        formData.append("websiteUrl", "www.ayrshirefencinggroup.com");

        try {
          const response = await fetch("https://formspree.io/f/xqarbvgy", {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            form.reset();
            if (successMessage) {
              successMessage.classList.remove("hidden");
              successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          } else {
            throw new Error("Form submission failed");
          }
        } catch (error) {
          if (errorMessage) {
            errorMessage.classList.remove("hidden");
            errorMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }
      });
    }
  }, []);

  return (
    <form
      name="wf-form-Contact-Form"
      aria-label="Contact Form"
      action="https://formspree.io/f/xqarbvgy"
      method="POST"
      className="box-border caret-transparent"
    >
      <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
        <label className="text-white text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
          Name
        </label>
        <input
          name="name"
          placeholder="Dennis Barrett"
          type="text"
          required
          className="text-gray-900 text-base bg-white box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border-2 border-white mb-2.5 px-5 py-2.5 rounded-[20px] border-solid focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
        />
      </div>
      <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
        <label className="text-white text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
          Email
        </label>
        <input
          name="email"
          placeholder="your.email@example.com"
          type="email"
          required
          className="text-gray-900 text-base bg-white box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border-2 border-white mb-2.5 px-5 py-2.5 rounded-[20px] border-solid focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
        />
      </div>
      <div className="items-start box-border caret-transparent gap-x-0 flex flex-col justify-start gap-y-0 md:[align-items:normal] md:gap-x-[30px] md:flex-row md:justify-normal md:gap-y-[30px]">
        <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
          <label className="text-white text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
            Phone
          </label>
          <input
            name="phone"
            placeholder="07926 592704"
            type="tel"
            required
            className="text-gray-900 text-base bg-white box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border-2 border-white mb-2.5 px-5 py-2.5 rounded-[20px] border-solid focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
          />
        </div>
        <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
          <label className="text-white text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
            Select Service
          </label>
          <select
            name="service"
            required
            className="text-gray-900 text-base bg-white caret-transparent block h-12 leading-[normal] align-middle w-full border-2 border-white mb-2.5 px-5 py-2 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
          >
            <option
              value=""
              disabled
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Select Service...
            </option>
            <option
              value="Fencing"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Fencing
            </option>
            <option
              value="Fence Repairs"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Fence Repairs
            </option>
            <option
              value="Decking"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Decking
            </option>
            <option
              value="Gates"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Gates
            </option>
            <option
              value="Sheds"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Sheds
            </option>
            <option
              value="Garden Rooms"
              className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Garden Rooms
            </option>
          </select>
        </div>
      </div>
      <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
        <label className="text-white text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Tell us about your fencing and decking needs..."
          rows={6}
          required
          className="text-gray-900 text-base bg-white box-border caret-transparent block leading-[25.6px] align-middle w-full border-2 border-white mb-2.5 px-5 py-2.5 rounded-[20px] border-solid resize-vertical focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="text-white text-base font-bold bg-orange-500 box-border caret-transparent leading-[24px] text-center text-nowrap w-full border-2 border-orange-500 px-6 py-3 rounded-[50px] border-solid md:text-xl md:leading-[28px] md:px-8 md:py-4 hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 min-h-[56px] md:min-h-[64px] shadow-lg"
      />
    </form>
  );
};

