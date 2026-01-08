import { useState } from "react";

const testimonials = [
  {
    author: "Janey Traill",
    text: "I had Stewart from Ayrshire Fencing Group erect a new fence for me. He did an excellent job at a reasonable price. I would highly recommend him.",
  },
  {
    author: "SC Kelly",
    text: "Excellent job every time. Stuart has worked for myself, my mum and several other family members and friends. He is hard working, reliable and does a fantastic job.",
  },
  {
    author: "David Warnes",
    text: "Fantastic job, professional though and though. This is my second job done by Ayrshire fencing group!",
  },
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="box-border caret-transparent relative w-full">
      <div className="box-border caret-transparent p-4 bg-gray-900/90 backdrop-blur-sm rounded-lg md:p-5 relative">
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 items-center bg-gray-700 box-border caret-transparent flex h-10 justify-center w-10 rounded-[50%] shadow-md hover:bg-gray-600 transition-colors z-10 md:h-12 md:w-12"
          aria-label="Previous testimonial"
        >
          <svg
            className="box-border caret-transparent h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="box-border caret-transparent px-10 md:px-12">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="box-border caret-transparent h-4 w-4 text-yellow-400 md:h-5 md:w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-200 text-base italic box-border caret-transparent leading-6 md:text-lg md:leading-7">
            "{currentTestimonial.text}"
          </p>
          <p className="text-white text-sm font-semibold box-border caret-transparent mt-3 md:text-base">
            - {currentTestimonial.author}
          </p>
        </div>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 items-center bg-white box-border caret-transparent flex h-10 justify-center w-10 rounded-[50%] shadow-md hover:bg-gray-100 transition-colors z-10 md:h-12 md:w-12"
          aria-label="Next testimonial"
        >
          <svg
            className="box-border caret-transparent h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="box-border caret-transparent flex items-center justify-center gap-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`box-border caret-transparent h-2 w-2 rounded-[50%] transition-colors ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


