import { useState, useEffect } from "react";
import { CANONICAL_PHONE, CANONICAL_PHONE_TEL, TRACKING_PHONE_TEL, formatTrackingPhoneDisplay } from "@/utils/phoneTracking";
import { trackPhone } from "@/utils/analytics";

interface PhoneLinkProps {
  className?: string;
  displayClassName?: string;
  iconSrc?: string;
  iconAlt?: string;
  showIcon?: boolean;
  variant?: "default" | "footer" | "hero";
  trackingLocation?: string; // e.g., "hero", "nav", "services"
}

export const PhoneLink = ({ 
  className = "", 
  displayClassName = "",
  iconSrc,
  iconAlt = "Phone",
  showIcon = true,
  variant = "default",
  trackingLocation
}: PhoneLinkProps) => {
  const [phoneNumber, setPhoneNumber] = useState(CANONICAL_PHONE);
  const [telHref, setTelHref] = useState(`tel:${CANONICAL_PHONE_TEL}`);

  useEffect(() => {
    // Replace with tracking number after component mounts (client-side only)
    setPhoneNumber(formatTrackingPhoneDisplay());
    setTelHref(`tel:${TRACKING_PHONE_TEL}`);
  }, []);

  const handleClick = () => {
    if (trackingLocation) {
      trackPhone(trackingLocation);
    } else if (variant === "hero") {
      trackPhone("hero");
    } else if (variant === "footer") {
      // Footer phone links don't need tracking by default
    } else {
      trackPhone("nav");
    }
  };

  const defaultClasses = variant === "hero" 
    ? "text-white items-center box-border caret-transparent gap-x-2 flex max-w-full gap-y-2 overflow-hidden hover:text-green-500 min-h-[44px] touch-manipulation"
    : variant === "footer"
    ? "text-white/80 text-sm box-border caret-transparent hover:text-white hover:decoration-transparent"
    : "text-white box-border caret-transparent flex justify-center max-w-full text-center md:text-white hover:text-green-500 hover:border-green-500";

  const defaultDisplayClasses = variant === "hero"
    ? "text-white text-base font-medium box-border caret-transparent leading-6 sm:text-lg sm:leading-7 md:text-xl lg:text-2xl"
    : variant === "footer"
    ? ""
    : "box-border caret-transparent text-base font-medium md:text-lg lg:text-xl text-white";

  return (
    <a
      href={telHref}
      onClick={handleClick}
      className={className || defaultClasses}
    >
      {showIcon && iconSrc && (() => {
        const iconSize = displayClassName?.includes("text-2xl") 
          ? "h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9"
          : displayClassName?.includes("text-xl") || displayClassName?.includes("text-lg")
          ? "h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
          : variant === "hero" 
          ? "h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
          : "h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8";
        
        return (
          <img
            src={iconSrc}
            alt={iconAlt}
            className={`box-border caret-transparent flex-shrink-0 ${iconSize} ${variant !== "footer" && variant !== "hero" ? "brightness-0 invert" : ""}`}
          />
        );
      })()}
      <div className={displayClassName || defaultDisplayClasses}>
        {phoneNumber}
      </div>
    </a>
  );
};

