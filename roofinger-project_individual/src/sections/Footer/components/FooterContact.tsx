export const FooterContact = () => {
  return (
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
  );
};
