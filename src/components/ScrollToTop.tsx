import { useEffect } from "react";

export const ScrollToTop = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return null;
};
