import { useRef, useState } from "react";
import type { Offer, OfferDate } from "../i18n/translations";
import "./OffersCarousel.css";

const DRAG_CLICK_THRESHOLD = 6;
// How long (seconds) the marquee takes to scroll past a single date/price
// item. Total loop duration scales with the number of items so agencies
// with more dates don't get a rushed-feeling scroll.
const SECONDS_PER_DATE = 2.1;

/**
 * A continuously auto-scrolling strip of "date — price" pairs. Sized so
 * exactly one item is fully visible plus half of the next one at rest,
 * then it keeps drifting sideways on its own — the text is not meant to
 * be grabbed or selected, only read.
 */
function PriceDatesMarquee({ label, dates }: { label: string; dates: OfferDate[] }) {
  // Duplicate the list so the CSS animation can loop seamlessly from
  // -0% to -50% and jump back unnoticed.
  const loop = [...dates, ...dates];
  const duration = `${Math.max(dates.length, 1) * SECONDS_PER_DATE}s`;

  return (
    <div className="price-marquee">
      <span className="price-marquee__label">{label}</span>
      <div className="price-marquee__viewport">
        <div
          className="price-marquee__track"
          style={{ animationDuration: duration }}
        >
          {loop.map((d, i) => (
            <div className="price-marquee__item" key={i}>
              <span className="price-marquee__date">{d.date}</span>
              <span className="price-marquee__price">{d.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * A horizontally-scrolling row of vacation offer cards, each pairing a
 * photo with the hotel details and a self-scrolling date/price strip.
 * Supports native touch/trackpad scrolling, scroll-snap, arrow-button
 * paging, and click-and-drag panning with the mouse.
 */
export default function OffersCarousel({
  offers,
  priceLabel,
}: {
  offers: Offer[];
  priceLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const dragState = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: 0,
  });

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".offer-card");
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    (e.target as Element).setPointerCapture(e.pointerId);
    dragState.current = {
      active: true,
      startX: e.clientX,
      startScroll: track.scrollLeft,
      moved: 0,
    };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    const state = dragState.current;
    if (!state.active || !track) return;
    const dx = e.clientX - state.startX;
    state.moved = Math.max(state.moved, Math.abs(dx));
    track.scrollLeft = state.startScroll - dx;
  };

  const endDrag = () => {
    dragState.current.active = false;
    setDragging(false);
  };

  // Prevent a drag-release from also firing as a link click on children.
  const onClickCapture = (e: React.MouseEvent) => {
    if (dragState.current.moved > DRAG_CLICK_THRESHOLD) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="offers-carousel">
      <div
        className={`offers-carousel__track${dragging ? " offers-carousel__track--grabbing" : ""}`}
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={(e) => {
          if (e.buttons === 0) endDrag();
        }}
        onClickCapture={onClickCapture}
      >
        {offers.map((offer) => (
          <article className="offer-card" key={offer.hotel}>
            <div className="offer-card__photo">
              <img
                src={`/offers/${offer.photo}`}
                alt={offer.hotel}
                draggable={false}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="offer-card__photo-fallback" aria-hidden="true">
                {offer.emoji}
              </span>
            </div>
            <div className="offer-card__body">
              <h3 className="offer-card__destination">
                <span aria-hidden="true">{offer.emoji}</span> {offer.hotel}
              </h3>
              <p className="offer-card__tagline">{offer.tagline}</p>
              <dl className="offer-card__facts">
                <div>
                  <dt>📍</dt>
                  <dd>{offer.destination}</dd>
                </div>
                <div>
                  <dt>🌙</dt>
                  <dd>{offer.duration}</dd>
                </div>
                <div>
                  <dt>🍽️</dt>
                  <dd>{offer.meal}</dd>
                </div>
              </dl>
              <ul className="offer-card__includes">
                {offer.includes.map((item) => (
                  <li key={item}>✔️ {item}</li>
                ))}
              </ul>
              <PriceDatesMarquee label={priceLabel} dates={offer.dates} />
              {offer.note && <p className="offer-card__note">{offer.note}</p>}
            </div>
          </article>
        ))}
      </div>
      <div className="offers-carousel__nav">
        <button
          type="button"
          className="offers-carousel__arrow"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous offer"
        >
          ←
        </button>
        <button
          type="button"
          className="offers-carousel__arrow"
          onClick={() => scrollByCard(1)}
          aria-label="Next offer"
        >
          →
        </button>
      </div>
    </div>
  );
}
