import { useEffect, useRef, useState } from "react";

/**
 * Tracks scroll direction to decide whether the floating navbar should
 * tuck itself away. Scrolling down past a small buffer hides it (leaving a
 * sliver visible); scrolling up, or being near the top of the page, always
 * reveals it again.
 */
export function useNavbarVisibility(hideThreshold = 12, topBuffer = 96) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    lastY.current = window.scrollY;

    const evaluate = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < topBuffer) {
        setHidden(false);
      } else if (delta > hideThreshold) {
        setHidden(true);
        lastY.current = y;
      } else if (delta < -hideThreshold) {
        setHidden(false);
        lastY.current = y;
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(evaluate);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideThreshold, topBuffer]);

  return hidden;
}
