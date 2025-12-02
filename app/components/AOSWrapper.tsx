"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AOSWrapper() {
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 800,
        once: false,
        easing: "ease-in-out",
      });
    };

    loadAOS();
  }, []);

  return null; // No UI, only initializes AOS
}
