import { MainImage } from "@/sections/Hero/components/MainImage";
import { ThumbnailGrid } from "@/sections/Hero/components/ThumbnailGrid";

export const ImageGallery = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 md:grid-cols-[1fr_0.75fr]">
      <MainImage />
      <ThumbnailGrid />
    </div>
  );
};
