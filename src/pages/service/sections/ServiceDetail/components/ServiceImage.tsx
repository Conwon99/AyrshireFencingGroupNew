interface ServiceImageProps {
  slug?: string;
}

export const ServiceImage = ({ slug }: ServiceImageProps = {}) => {
  const getImageSrc = () => {
    // Decking images
    if (slug === "decking" || slug === "timber-decking-irvine" || slug === "composite-decking-irvine" || slug === "wooden-decking-irvine") return "/projects/project-6.webp";
    // Fencing images
    if (slug === "fencing" || slug === "custom-fence-construction-irvine" || slug === "wood-fence-installation-irvine" || slug === "wooden-fencing-irvine" || slug === "garden-fence-installation-irvine" || slug === "composite-fencing-installation-irvine" || slug === "composite-fencing-irvine" || slug === "chainlink-fencing-installation-irvine" || slug === "chainlink-fencing-irvine" || slug === "nylofor-fencing-irvine" || slug === "concrete-fencing-irvine") return "/projects/project-1.webp";
    if (slug === "fence-repairs" || slug === "fence-replacement-irvine") return "/projects/project-2.webp";
    if (slug === "gates") return "/ABOUTMCINES.webp";
    if (slug === "sheds") return "/shed.jpg";
    if (slug === "garden-rooms") return "/gardenroom.jpg";
    return "/projects/project-1.webp";
  };

  const getImageAlt = () => {
    if (slug === "composite-decking-irvine") return "Professional composite decking installation completed by Ayrshire Fencing Group in Ayrshire";
    if (slug === "wooden-decking-irvine") return "Professional wooden decking installation completed by Ayrshire Fencing Group in Ayrshire";
    if (slug === "wooden-fencing-irvine") return "Professional wooden fencing installation completed by Ayrshire Fencing Group in Ayrshire";
    if (slug === "composite-fencing-irvine") return "Professional composite fencing installation completed by Ayrshire Fencing Group in Ayrshire";
    if (slug === "chainlink-fencing-irvine") return "Professional chainlink fencing installation completed by Ayrshire Fencing Group in Ayrshire";
    if (slug === "nylofor-fencing-irvine") return "Professional nylofor fencing installation completed by Ayrshire Fencing Group in Ayrshire";
    if (slug === "concrete-fencing-irvine") return "Professional concrete fencing installation completed by Ayrshire Fencing Group in Ayrshire";
    if (slug === "decking" || slug === "timber-decking-irvine") return "Professional decking installation service provided by Ayrshire Fencing Group in Ayrshire";
    if (slug === "fencing" || slug === "custom-fence-construction-irvine" || slug === "wood-fence-installation-irvine" || slug === "garden-fence-installation-irvine" || slug === "composite-fencing-installation-irvine" || slug === "chainlink-fencing-installation-irvine") return "Professional fencing installation service provided by Ayrshire Fencing Group in Ayrshire";
    if (slug === "fence-repairs" || slug === "fence-replacement-irvine") return "Professional fence repair service provided by Ayrshire Fencing Group in Ayrshire";
    if (slug === "gates") return "Professional gate installation and fencing work by Ayrshire Fencing Group in Ayrshire";
    if (slug === "sheds") return "Professional custom shed installation by Ayrshire Fencing Group in Ayrshire";
    if (slug === "garden-rooms") return "Professional garden room installation by Ayrshire Fencing Group in Ayrshire";
    return "Professional service provided by Ayrshire Fencing Group in Ayrshire";
  };

  return (
    <div className="box-border caret-transparent overflow-hidden mb-5 rounded-[20px] md:mb-[50px]">
      <img
        src={getImageSrc()}
        alt={getImageAlt()}
        className="box-border caret-transparent inline-block h-full max-w-full w-full"
      />
    </div>
  );
};
