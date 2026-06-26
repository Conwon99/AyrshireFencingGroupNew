import { useState, useEffect } from "react";

const galleryImages = [
  { src: "/projects/project-8.jpg", alt: "Decorative fence panels with curved lattice top on concrete gravel boards" },
  { src: "/projects/project-9.jpg", alt: "Raised timber decking with handrails and steps for a static caravan" },
  { src: "/projects/project-10.jpg", alt: "Octagonal timber decking with full perimeter balustrade" },
  { src: "/projects/project-11.jpg", alt: "Composite double gate with black aluminium frame and timber-effect panels" },
  { src: "/projects/project-12.jpg", alt: "Aerial view of timber decking area with garden fencing" },
  { src: "/projects/project-13.jpg", alt: "Multi-level timber decking with integrated steps and balustrade" },
  { src: "/projects/project-14.jpg", alt: "Timber pergola and veranda structure with gravel garden landscaping" },
  { src: "/projects/project-1.webp", alt: "Venetian fencing and gate installation" },
  { src: "/projects/project-2.webp", alt: "Concrete posts and composite panels with gate" },
  { src: "/projects/project-3.webp", alt: "Timber overlap fencing with coping and double gates" },
  { src: "/projects/project-7.webp", alt: "47m composite fencing with two bespoke gates" },
  { src: "/projects/project-4.webp", alt: "Timber wheelchair access and steps" },
  { src: "/projects/project-5.webp", alt: "Composite decking with glass and handrails" },
  { src: "/projects/project-6.webp", alt: "Timber decking installation" },
];

export const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));
  const goPrev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null
    );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <>
      <section className="py-[100px] md:py-[140px]">
        <div className="max-w-[1540px] mx-auto px-[15px] md:px-[30px]">
          <h1 className="text-white text-[38px] font-bold leading-[49.4px] mb-[50px] md:mb-[70px] md:text-6xl md:leading-[78px] text-center">
            Our Work
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-r-[20px] rounded-b-[20px] aspect-[4/3] w-full focus:outline-none focus:ring-2 focus:ring-[#787e59]"
                aria-label={`View photo: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3 md:p-4"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3 md:p-4"
            aria-label="Next"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm md:text-base bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
};
