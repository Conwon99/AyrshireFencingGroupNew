export const Logo = () => {
  return (
    <div className="box-border caret-transparent ml-0 md:ml-4 lg:ml-6">
      <a
        href="/"
        aria-label="home"
        className="relative text-gray-900 box-border caret-transparent block h-20 max-h-20 overflow-visible md:h-20 md:max-h-20 lg:h-24 lg:max-h-24"
      >
        <img
          src="/logo.webp"
          alt="Ayrshire Fencing Group Logo"
          className="box-border caret-transparent inline-block h-full max-w-full object-contain scale-[1.6] md:scale-[1.5] lg:scale-[1.7] origin-left"
        />
      </a>
    </div>
  );
};
