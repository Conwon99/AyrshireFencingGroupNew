export const BookingForm = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="static bg-yellow-500 box-border caret-transparent p-5 rounded-[20px] top-[50px] md:sticky md:p-[50px]">
        <h2 className="text-gray-900 text-3xl font-bold box-border caret-transparent leading-9 mb-2.5 md:text-[46px] md:leading-[55.2px]">
          Book a call
        </h2>
        <div className="box-border caret-transparent mt-[30px] md:mt-[50px]">
          <form
            name="wf-form-Booking-Form"
            aria-label="Booking Form"
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
                name="Phone"
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
                name="Service"
                className="text-gray-900 text-base bg-amber-400 caret-transparent block h-12 leading-[normal] align-middle w-full border-amber-400 mb-2.5 px-5 py-2 rounded-[20px]"
              >
                <option
                  value="Select service..."
                  className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                >
                  Select service...
                </option>
                <option
                  value="Roof Installations"
                  className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                >
                  Roof Installations
                </option>
                <option
                  value="Roof Repairs"
                  className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                >
                  Roof Repairs
                </option>
                <option
                  value="Roof Inspections"
                  className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                >
                  Roof Inspections
                </option>
                <option
                  value="Gutter Installations"
                  className="font-normal items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                >
                  Gutter Installations
                </option>
              </select>
            </div>
            <input
              type="submit"
              value="Request a call"
              className="text-yellow-500 text-sm bg-gray-900 box-border caret-transparent leading-[19.6px] text-center text-nowrap w-full border border-gray-900 px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:text-gray-900 hover:bg-yellow-500"
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
