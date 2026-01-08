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
        className="box-border caret-transparent inline-block h-6 max-w-full w-full md:h-7 scale-[1.1] md:scale-[1.2] lg:scale-[1.3] origin-left"
      />
    </a>
  );
};
