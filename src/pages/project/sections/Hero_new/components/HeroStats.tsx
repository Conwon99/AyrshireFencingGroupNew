export const HeroStats = () => {
  return (
    <div className="backdrop-blur-[21px] bg-[linear-gradient(45deg,rgba(255,255,255,0),rgba(255,255,255,0.33))] box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-48 gap-y-4 border p-2 rounded-lg border-solid border-white/20 md:p-3">
      <div className="box-border caret-transparent gap-x-1 flex flex-col gap-y-1">
        <div className="text-[22px] font-medium box-border caret-transparent leading-[30px] md:text-[28px] md:leading-9">
          5k+
        </div>
        <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
          Satisfied Clients
        </div>
      </div>
      <div className="box-border caret-transparent flex">
        <div className="box-border caret-transparent h-12 w-12 border overflow-hidden rounded-[50%] border-solid border-white left-[0%]">
          <img
            src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be86b8c3e10dd212c1f13_Frame_1597880824.webp"
            alt="Client 02"
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          />
        </div>
        <div className="box-border caret-transparent h-12 w-12 border overflow-hidden -ml-6 rounded-[50%] border-solid border-white">
          <img
            src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be86b92836344983b93ea_Frame_1597880825.webp"
            alt="Client 03"
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          />
        </div>
        <div className="box-border caret-transparent h-12 w-12 border overflow-hidden -ml-6 rounded-[50%] border-solid border-white">
          <img
            src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be86bb252850145b37a6d_Frame_1597880826.webp"
            alt="Client 01"
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          />
        </div>
        <div className="box-border caret-transparent h-12 w-12 border overflow-hidden -ml-6 rounded-[50%] border-solid border-white">
          <img
            src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/689be86b8df959bbb7189ba5_Frame_1597880828.webp"
            alt="Client 04"
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          />
        </div>
        <div className="items-center bg-white box-border caret-transparent flex h-12 justify-center w-12 border overflow-hidden -ml-6 rounded-[50%] border-solid border-white">
          <div className="items-center box-border caret-transparent flex h-6 justify-center w-6 before:accent-auto before:caret-transparent before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
            <img
              src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-6.svg"
              alt="Icon"
              className="box-border caret-transparent h-[18px] w-[18px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
