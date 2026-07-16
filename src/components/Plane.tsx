import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./Plane.css";

// Total vertical travel of the plane, as a fraction of the viewport height.
// Chosen so the mapping stays linear: scrolling 10% of the document moves
// the plane 10% of this travel distance — proportional at every point.
const TRAVEL_VH = 92;
// Total horizontal travel, as a fraction of the viewport width. The plane
// drifts steadily rightward as it climbs, rather than swinging back and forth.
const TRAVEL_VW = 40;
// How quickly the plane eases toward its scroll-driven target (0-1).
// Lower = smoother, laggier glide.
const LERP_FACTOR = 0.075;

export default function Plane() {
  const { localeTag } = useLanguage();
  const localeTagRef = useRef(localeTag);
  localeTagRef.current = localeTag;

  const wrapRef = useRef<HTMLDivElement>(null);
  const altitudeRef = useRef<HTMLSpanElement>(null);
  const current = useRef(0);
  const target = useRef(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      if (wrapRef.current) {
        wrapRef.current.style.opacity = "1";
      }
      if (altitudeRef.current) {
        altitudeRef.current.textContent = "18,500";
      }
      return;
    }

    const computeTarget = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const fraction = scrollable > 0 ? window.scrollY / scrollable : 0;
      target.current = Math.min(Math.max(fraction, 0), 1);
    };

    const tick = () => {
      current.current += (target.current - current.current) * LERP_FACTOR;

      const travelYPx = (TRAVEL_VH / 100) * window.innerHeight;
      const travelXPx = (TRAVEL_VW / 100) * window.innerWidth;
      const y = -current.current * travelYPx;
      // Small organic wobble layered on top of the steady rightward climb,
      // so the flight path doesn't feel like a perfectly straight rail.
      const wobble = Math.sin(current.current * Math.PI * 2.4) * 10;
      const x = current.current * travelXPx + wobble;

      // Fade in over the first sliver of scroll, fade out on final approach
      // so the plane doesn't clip abruptly at either end of the page.
      const fadeIn = Math.min(current.current / 0.04, 1);
      const fadeOut = 1 - Math.max((current.current - 0.9) / 0.1, 0);
      const opacity = Math.min(fadeIn, fadeOut);

      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        wrapRef.current.style.opacity = String(opacity);
      }
      if (altitudeRef.current) {
        const altitude = Math.round(2000 + current.current * 34000);
        altitudeRef.current.textContent = altitude.toLocaleString(
          localeTagRef.current
        );
      }

      frame.current = requestAnimationFrame(tick);
    };

    computeTarget();
    const onScroll = () => computeTarget();
    const onResize = () => computeTarget();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    frame.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="plane-layer" aria-hidden="true">
      <div className="plane-wrap" ref={wrapRef}>
        <img
          className="plane-svg"
          src="/plane.svg"
          alt=""
          draggable={false}
        />

        <div className="plane-hud">
          <span className="plane-hud__label">ALT</span>
          <span className="plane-hud__value" ref={altitudeRef}>
            2,000
          </span>
          <span className="plane-hud__unit">FT</span>
        </div>
      </div>
    </div>
  );
}
