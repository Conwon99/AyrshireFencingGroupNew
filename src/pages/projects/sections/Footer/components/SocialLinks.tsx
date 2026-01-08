export const SocialLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-[15px] flex gap-y-[15px] flex-wrap">
      <a
        href="https://www.facebook.com/profile.php?id=100089970103885"
        target="_blank"
        rel="noopener noreferrer"
        className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-orange-500 hover:decoration-transparent"
        aria-label="Facebook"
      >
        <img
          src="https://c.animaapp.com/mhqqgvrna0ssg4/assets/670f58e375e253beb4db0e54_facebook.svg"
          alt="Facebook"
          className="box-border caret-transparent h-5 max-w-full w-5"
        />
      </a>
      <a
        href="https://www.instagram.com/ayrshirefencinggroup/"
        target="_blank"
        rel="noopener noreferrer"
        className="items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 rounded-[50%] hover:bg-orange-500 hover:decoration-transparent"
        aria-label="Instagram"
      >
        <img
          src="https://c.animaapp.com/mhqqgvrna0ssg4/assets/670f58e333797fd0eb9fa085_instagram.svg"
          alt="Instagram"
          className="box-border caret-transparent h-5 max-w-full w-5"
        />
      </a>
      <a
        href="https://www.trustatrader.com/traders/ayrshire-fencing-group-saltcoats-irvine-troon-and-prewick"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent flex items-center"
        aria-label="TrustATrader"
      >
        TrustATrader
      </a>
    </div>
  );
};

