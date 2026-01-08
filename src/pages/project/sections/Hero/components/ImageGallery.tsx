import { useState } from "react";
import { MainImage } from "@/pages/project/sections/Hero/components/MainImage";
import { ThumbnailGrid } from "@/pages/project/sections/Hero/components/ThumbnailGrid";
import { Lightbox } from "@/pages/project/sections/Hero/components/Lightbox";
import { getProjectImages } from "@/pages/project/sections/Hero/components/getProjectImages";

interface ImageGalleryProps {
  slug?: string;
}

export const ImageGallery = ({ slug }: ImageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = getProjectImages(slug);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 md:grid-cols-[1fr_0.75fr]">
        <MainImage slug={slug} onImageClick={() => openLightbox(0)} />
        <ThumbnailGrid slug={slug} onImageClick={openLightbox} />
      </div>
      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  );
};
