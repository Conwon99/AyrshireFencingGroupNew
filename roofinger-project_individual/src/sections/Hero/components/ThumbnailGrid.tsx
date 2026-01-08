export const ThumbnailGrid = () => {
  return (
    <div className="box-border caret-transparent">
      <div
        role="list"
        className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-full gap-y-5"
      >
        <div role="listitem" className="box-border caret-transparent">
          <a
            href="#"
            aria-label="open lightbox"
            className="box-border caret-transparent inline-block h-full max-w-full underline w-full overflow-hidden rounded-[20px] hover:decoration-transparent"
          >
            <img
              src="https://c.animaapp.com/miakqmnoJuBvHF/assets/676a7f7d7e04d0c6a41ebfda_gallery-01.avif"
              alt=""
              className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            />
          </a>
        </div>
        <div role="listitem" className="box-border caret-transparent">
          <a
            href="#"
            aria-label="open lightbox"
            className="box-border caret-transparent inline-block h-full max-w-full underline w-full overflow-hidden rounded-[20px] hover:decoration-transparent"
          >
            <img
              src="https://c.animaapp.com/miakqmnoJuBvHF/assets/676a7f7dca881a017061e19b_gallery-02.avif"
              alt=""
              className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            />
          </a>
        </div>
        <div role="listitem" className="box-border caret-transparent">
          <a
            href="#"
            aria-label="open lightbox"
            className="box-border caret-transparent inline-block h-full max-w-full underline w-full overflow-hidden rounded-[20px] hover:decoration-transparent"
          >
            <img
              src="https://c.animaapp.com/miakqmnoJuBvHF/assets/676a7f7d966bea352508b95b_gallery-03.avif"
              alt=""
              className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            />
          </a>
        </div>
        <div role="listitem" className="box-border caret-transparent">
          <a
            href="#"
            aria-label="open lightbox"
            className="box-border caret-transparent inline-block h-full max-w-full underline w-full overflow-hidden rounded-[20px] hover:decoration-transparent"
          >
            <img
              src="https://c.animaapp.com/miakqmnoJuBvHF/assets/676a7f7df94e481bcd937049_gallery-04.avif"
              alt=""
              className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            />
          </a>
        </div>
      </div>
      <div className="text-gray-900 bg-yellow-500 box-border caret-transparent hidden text-center border border-slate-200 px-5 py-2.5 rounded-[20px] border-solid">
        <div className="box-border caret-transparent">No items found.</div>
      </div>
    </div>
  );
};
