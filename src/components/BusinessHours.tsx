import { useEffect, useState } from "react";
import "./BusinessHours.css";

const TIMEZONE = "Europe/Chisinau";

// Minutes-since-midnight open/close window per weekday (index 0 = Sunday,
// matching Intl's weekday numbering convention used below). `null` = closed
// all day.
const SCHEDULE: ([number, number] | null)[] = [
  null, // Sunday — CLOSED
  [9 * 60, 18 * 60], // Monday 9:00–18:00
  [9 * 60, 18 * 60], // Tuesday
  [9 * 60, 18 * 60], // Wednesday
  [9 * 60, 18 * 60], // Thursday
  [9 * 60, 18 * 60], // Friday
  [9 * 60, 15 * 60], // Saturday 9:00–15:00
];

const HOURS_LABEL: (string | null)[] = [
  null,
  "9:00 AM - 6:00 PM",
  "9:00 AM - 6:00 PM",
  "9:00 AM - 6:00 PM",
  "9:00 AM - 6:00 PM",
  "9:00 AM - 6:00 PM",
  "9:00 AM - 3:00 PM",
];

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function getChisinauNow(): { weekday: number; minutes: number } {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const map: Record<string, string> = {};
  for (const part of parts) map[part.type] = part.value;

  const weekday = WEEKDAY_INDEX[map.weekday] ?? 0;
  // hour can come back as "24" for midnight in some environments; normalize.
  const hour = Number(map.hour) % 24;
  const minute = Number(map.minute);
  return { weekday, minutes: hour * 60 + minute };
}

function isOpenAt(weekday: number, minutes: number) {
  const window = SCHEDULE[weekday];
  if (!window) return false;
  return minutes >= window[0] && minutes < window[1];
}

export default function BusinessHours({
  days,
  closedWord,
  openNow,
  closedNow,
}: {
  days: readonly string[];
  closedWord: string;
  openNow: string;
  closedNow: string;
}) {
  const [now, setNow] = useState(getChisinauNow);

  useEffect(() => {
    const id = window.setInterval(() => setNow(getChisinauNow()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const open = isOpenAt(now.weekday, now.minutes);

  return (
    <div className="business-hours">
      <div className={`business-hours__badge${open ? " business-hours__badge--open" : " business-hours__badge--closed"}`}>
        <span className="business-hours__dot" aria-hidden="true" />
        {open ? openNow : closedNow}
      </div>
      <ul className="business-hours__list">
        {days.map((day, i) => (
          <li
            key={day}
            className={i === now.weekday ? "business-hours__row business-hours__row--today" : "business-hours__row"}
          >
            <span className="business-hours__day">{day}</span>
            <span className="business-hours__time">
              {HOURS_LABEL[i] ?? closedWord}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
