import { useEffect } from "react";

export const BookingForm = () => {
  useEffect(() => {
    const form = document.querySelector('form[name="wf-form-Booking-Form"]') as HTMLFormElement;
    const successMessage = document.querySelector('[aria-label="Booking Form success"]') as HTMLElement;
    const errorMessage = document.querySelector('[aria-label="Booking Form failure"]') as HTMLElement;

    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        if (successMessage) successMessage.classList.add("hidden");
        if (errorMessage) errorMessage.classList.add("hidden");

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
    <div className="box-border caret-transparent">
      <div className="static bg-[#787e59] box-border caret-transparent p-5 rounded-[20px] top-[50px] md:sticky md:p-[50px]">
        <h2 className="text-gray-900 text-3xl font-bold box-border caret-transparent leading-9 mb-2.5 md:text-[46px] md:leading-[55.2px]">
          Book a call
        </h2>
        <div className="box-border caret-transparent mt-[30px] md:mt-[50px]">
          <form
            name="wf-form-Booking-Form"
            aria-label="Booking Form"
            action="https://formspree.io/f/xqarbvgy"
            method="POST"
            className="box-border caret-transparent"
          >
            <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
              <label className="text-gray-900 text-base box-border caret-transparent block mb-[5px] md:text-lg">
                Name
              </label>
              <input
                name="name"
                placeholder="Dennis Barrett"
                type="text"
                className="text-gray-900 text-base bg-amber-400 box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border border-amber-400 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid"
              />
            </div>
            <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
              <label className="text-gray-900 text-base box-border caret-transparent block mb-[5px] md:text-lg">
                Phone
              </label>
              <input
                name="phone"
                placeholder="+1234567890"
                type="tel"
                className="text-gray-900 text-base bg-amber-400 box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border border-amber-400 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid"
              />
            </div>
            <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
              <label className="text-gray-900 text-base box-border caret-transparent block mb-[5px] md:text-lg">
                Prepare time to contact
              </label>
              <input
                name="Prepare-time-to-contact"
                placeholder="10:00am"
                type="text"
                className="text-gray-900 text-base bg-amber-400 box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border border-amber-400 mb-2.5 px-5 py-2.5 rounded-[20px] border-solid"
              />
            </div>
            <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
              <label className="text-gray-900 text-base box-border caret-transparent block mb-[5px] md:text-lg">
                Select service
              </label>
              <select
                name="service"
                className="text-gray-900 text-base bg-amber-400 caret-transparent block h-12 leading-[normal] align-middle w-full border-amber-400 mb-2.5 px-5 py-2 rounded-[20px]"
              >
                <option
                  value="Select service..."
                  className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                >
                  Select service...
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
            <input
              type="submit"
              value="Request a call"
              className="text-white text-sm bg-[#787e59] box-border caret-transparent leading-[19.6px] text-center text-nowrap w-full border border-[#787e59] px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:bg-[#8a9168] shadow-[0_0_20px_rgba(120,126,89,0.5),0_0_40px_rgba(120,126,89,0.3)] hover:shadow-[0_0_30px_rgba(120,126,89,0.7),0_0_60px_rgba(120,126,89,0.5)] transition-shadow duration-300"
            />
          </form>
          <div
            role="region"
            aria-label="Booking Form success"
            className="text-white bg-emerald-500 box-border caret-transparent hidden text-center p-[15px] rounded-[20px]"
          >
            <div className="box-border caret-transparent">
              Thank you! Your submission has been received!
            </div>
          </div>
          <div
            role="region"
            aria-label="Booking Form failure"
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
