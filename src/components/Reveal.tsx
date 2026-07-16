import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Wraps a headline made of several lines. Each line sits inside an
 * overflow-hidden mask and slides up from the line beneath it as it enters
 * view, staggered so the headline builds itself in.
 */
export function RevealLines({
  lines,
  as: Tag = "h2",
  className,
  delay = 0,
}: {
  lines: string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}) {
  const { language } = useLanguage();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span className="reveal-line-mask" key={i}>
          <motion.span
            className="reveal-line-inner"
            key={language}
            initial={{ y: "115%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
            transition={{
              duration: 0.85,
              ease: EASE,
              delay: delay + i * 0.09,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/**
 * Simple fade + rise reveal for body copy, cards, and other supporting
 * content. Slides up a short distance while fading in.
 */
export function RevealUp({
  children,
  className,
  delay = 0,
  distance = 22,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}) {
  const { language } = useLanguage();

  return (
    <motion.div
      className={className}
      key={language}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Slides in from the left — used sparingly for eyebrow labels and asides,
 * per the brief's "slide from left" cue.
 */
export function RevealLeft({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { language } = useLanguage();

  return (
    <motion.div
      className={className}
      key={language}
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
