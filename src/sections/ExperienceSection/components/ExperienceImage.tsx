import { Badge } from "@/components/Badge";
import { TestimonialsCarousel } from "@/sections/ExperienceSection/components/TestimonialsCarousel";

export const ExperienceImage = () => {
  return (
    <div className="relative self-start box-border caret-transparent overflow-hidden rounded-[20px]">
      <div className="relative">
        <img
          src="/ABOUTMCINES.webp"
          alt="Ayrshire Fencing Group team working on fencing and decking projects in Ayrshire"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full scale-[1.03587px] md:scale-[1.03477px]"
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: '#323232',
            mixBlendMode: 'multiply',
            opacity: 0.4
          }}
        ></div>
      </div>
      <Badge />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
        <TestimonialsCarousel />
      </div>
    </div>
  );
};
