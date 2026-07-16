import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./ReviewsCarousel.css";

export interface Review {
  quote: string;
  name: string;
  title: string;
}

const AUTOPLAY_PX_PER_SEC = 22;
const RESUME_DELAY_MS = 1400;
const MOMENTUM_FRICTION = 0.94;
const MOMENTUM_MIN_VELOCITY = 0.02;

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * A continuously drifting vertical carousel of reviews. Cards size to fit
 * their own text, so — unlike a fixed-row carousel — one set's total height
 * can't be assumed from a single card. Instead the whole (tripled) track is
 * measured and divided by three, which stays correct no matter how the
 * individual card heights vary (including when they reflow after a
 * language change). The viewport height itself is a fixed CSS value rather
 * than "N rows", since rows are no longer uniform.
 *
 * Left alone, the list drifts slowly upward; grabbing it with the mouse (or
 * a finger) hands over 1:1 control — drag down and the cards follow
 * downward — and releasing carries the last bit of velocity forward before
 * autoplay quietly resumes.
 */
export default function ReviewsCarousel({
  reviews,
  label = "What clients say",
}: {
  reviews: Review[];
  label?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [setHeight, setSetHeight] = useState(0);
  const [dragging, setDragging] = useState(false);

  // Continuous, unbounded scroll position. Wrapped (mod one set height) at
  // render time so it can grow or shrink forever without ever needing a
  // jarring reset.
  const offset = useRef(0);
  const velocity = useRef(0);
  const lastPointerY = useRef(0);
  const lastMoveTime = useRef(0);
  const rafId = useRef<number | null>(null);
  const resumeTimer = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const driftAllowed = useRef(true);

  // Measure the full (tripled) track and derive one set's height from it.
  // Re-measures automatically whenever card content reflows — e.g. a
  // language switch changing quote length — via ResizeObserver.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      setSetHeight(track.offsetHeight / 3);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [reviews]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || setHeight === 0) return;

    const render = () => {
      const wrapped = ((offset.current % setHeight) + setHeight) % setHeight;
      track.style.transform = `translate3d(0, ${-(setHeight + wrapped)}px, 0)`;
    };

    const tick = () => {
      if (!draggingRef.current) {
        if (Math.abs(velocity.current) > MOMENTUM_MIN_VELOCITY) {
          // Coasting off released drag momentum.
          offset.current += velocity.current * 16;
          velocity.current *= MOMENTUM_FRICTION;
          render();
        } else {
          velocity.current = 0;
          if (driftAllowed.current) {
            // Gentle steady drift, only once the post-drag pause has elapsed.
            offset.current += (AUTOPLAY_PX_PER_SEC / 1000) * 16;
            render();
          }
        }
      }
      rafId.current = requestAnimationFrame(tick);
    };

    render();
    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [setHeight]);

  const clearResumeTimer = () => {
    if (resumeTimer.current) {
      window.clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as Element).setPointerCapture(e.pointerId);
    clearResumeTimer();
    draggingRef.current = true;
    driftAllowed.current = false;
    setDragging(true);
    velocity.current = 0;
    lastPointerY.current = e.clientY;
    lastMoveTime.current = performance.now();
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const now = performance.now();
    const dy = e.clientY - lastPointerY.current;
    const dt = Math.max(now - lastMoveTime.current, 1);

    // Drag down -> content follows down. Direct 1:1 manipulation.
    offset.current -= dy;
    velocity.current = -(dy / dt);

    lastPointerY.current = e.clientY;
    lastMoveTime.current = now;
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    resumeTimer.current = window.setTimeout(() => {
      velocity.current = 0;
      driftAllowed.current = true;
    }, RESUME_DELAY_MS);
  };

  const tripled = [...reviews, ...reviews, ...reviews];

  return (
    <div className="reviews" ref={wrapperRef}>
      <div className="reviews__label">{label}</div>
      <div
        className={`reviews__viewport${dragging ? " reviews__viewport--grabbing" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={(e) => {
          if (e.buttons === 0) endDrag();
        }}
      >
        <div className="reviews__track" ref={trackRef}>
          {tripled.map((review, i) => (
            <div className="review-card" key={i}>
              <span className="review-card__mark" aria-hidden="true">
                “
              </span>
              <p className="review-card__quote">{review.quote}</p>
              <div className="review-card__meta">
                <span className="review-card__avatar">{initials(review.name)}</span>
                <span className="review-card__who">
                  <span className="review-card__name">{review.name}</span>
                  <span className="review-card__title">{review.title}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
