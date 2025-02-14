import { useEffect } from "react";
import { useLocation } from "react-router";

const AdsHandler = () => {
  const location = useLocation(); // Get current route

  useEffect(() => {
    if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
      window.adsbygoogle.push({});
    }
  }, [location.pathname]); // Run when the route changes

  return null; // No need to render anything
};

export default AdsHandler;