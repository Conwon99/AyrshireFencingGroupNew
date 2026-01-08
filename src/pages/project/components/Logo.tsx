export const Logo = () => {
  return (
    <a
      href="/"
      aria-label="home"
      className="relative text-zinc-800 box-border caret-transparent block float-left justify-self-start mr-auto hover:decoration-transparent"
    >
      <img
        src="/logo.webp"
        alt="Ayrshire Fencing Group Logo"
        className="box-border caret-transparent inline-block h-6 max-w-full w-full md:h-7"
      />
    </a>
  );
};
