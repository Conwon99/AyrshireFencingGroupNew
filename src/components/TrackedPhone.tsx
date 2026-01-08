import { useState, useEffect } from "react";
import { CANONICAL_PHONE, CANONICAL_PHONE_TEL, TRACKING_PHONE_TEL, formatTrackingPhoneDisplay } from "@/utils/phoneTracking";

interface TrackedPhoneProps {
  className?: string;
  as?: "span" | "div";
}

export const TrackedPhone = ({ className = "", as: Component = "span" }: TrackedPhoneProps) => {
  const [phoneNumber, setPhoneNumber] = useState(CANONICAL_PHONE);

  useEffect(() => {
    // Replace with tracking number after component mounts (client-side only)
    setPhoneNumber(formatTrackingPhoneDisplay());
  }, []);

  return <Component className={className}>{phoneNumber}</Component>;
};



