export const NewsletterForm = () => {
  return (
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
  );
};
