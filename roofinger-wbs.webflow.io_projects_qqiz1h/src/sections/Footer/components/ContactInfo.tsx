export const ContactInfo = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-[15px] flex flex-col justify-start gap-y-[15px] md:gap-x-5 md:gap-y-5">
      <div className="text-white items-start box-border caret-transparent gap-x-2.5 flex justify-start gap-y-2.5">
        <img
          src="https://c.animaapp.com/mhqqgvrna0ssg4/assets/67108bda6761bcf051e210eb_envelope.svg"
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
          src="https://c.animaapp.com/mhqqgvrna0ssg4/assets/670f86de88858acaf330ddd9_phone.svg"
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
          src="https://c.animaapp.com/mhqqgvrna0ssg4/assets/67108bda6d31254d6c320ce3_location-01.svg"
          alt=""
          className="box-border caret-transparent h-6 max-w-full w-6 mt-1"
        />
        <div className="box-border caret-transparent">
          544 Honey Creek Rd., West Des Moines, IA 50265
        </div>
      </div>
    </div>
  );
};
