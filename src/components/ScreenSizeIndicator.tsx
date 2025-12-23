"use client";
import { useEffect, useState } from "react";

const breakpoints: Record<string, string> = {
  sm: "(sm)",
  md: "(md)",
  lg: "(lg)",
  xl: " (xl)",
  "2xl": "(2xl)",
};

const ScreenSizeIndicator: React.FC = () => {
  const [screenSize, setScreenSize] = useState<string>("");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width < 640) setScreenSize(breakpoints.sm);
      else if (width >= 640 && width < 768) setScreenSize(breakpoints.md);
      else if (width >= 768 && width < 1024) setScreenSize(breakpoints.lg);
      else if (width >= 1024 && width < 1280) setScreenSize(breakpoints.xl);
      else if (width >= 1280) setScreenSize(breakpoints["2xl"]);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white text-sm py-2 px-4 rounded-lg shadow-lg z-50">
      {screenSize}
    </div>
  );
};

export default ScreenSizeIndicator;
