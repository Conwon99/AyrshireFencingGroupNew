export const NavbarLogo = () => {
  return (
    <a
      href="/"
      aria-label="home"
      className="relative text-zinc-800 box-border caret-transparent block float-left justify-self-start mr-auto hover:decoration-transparent"
    >
      <img
        src="/logo.webp"
        alt="Ayrshire Fencing Group Logo"
        className="box-border caret-transparent inline-block h-20 max-w-full w-full md:h-24 lg:h-28 scale-[1.7] md:scale-[1.9] lg:scale-[2.1] origin-left"
      />
    </a>
  );
};
