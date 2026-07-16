import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Plane from "./components/Plane";
import ReviewsCarousel from "./components/ReviewsCarousel";
import OffersCarousel from "./components/OffersCarousel";
import BusinessHours from "./components/BusinessHours";
import { RevealLeft, RevealLines, RevealUp } from "./components/Reveal";
import { useLanguage } from "./i18n/LanguageContext";
import "./App.css";

// Eases layout jumps (e.g. a section growing/shrinking taller because the
// active language's copy is longer or shorter) into a smooth transition
// instead of an instant, jarring snap.
const SECTION_LAYOUT_TRANSITION = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

// Approximate, round figures — not a live feed, just how the agency
// describes its own track record. The label text (translated) lives in
// t.stats.labels; only the numbers themselves are language-independent.
const STATS = [
  { value: "5+", labelKey: "experience" as const },
  { value: "6000+", labelKey: "vacations" as const },
  { value: "68", labelKey: "destinations" as const },
  { value: "≈1.850 €", labelKey: "avgPrice" as const },
];

export default function App() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <Plane />

      <main id="top">
        {/* ---------------- 01 · HERO ---------------- */}
        <motion.section
          className="section section--departure"
          layout
          transition={SECTION_LAYOUT_TRANSITION}
        >
          <div className="section__inner hero__inner">
            <div className="hero__content">
              <RevealLeft className="eyebrow" delay={0.05}>
                <span className="eyebrow__dot" />
                {t.hero.eyebrow}
              </RevealLeft>
              <RevealLines
                as="h1"
                className="hero__headline"
                lines={t.hero.headline}
                delay={0.15}
              />
              <RevealUp delay={0.55} className="hero__sub">
                <p>{t.hero.sub}</p>
              </RevealUp>
              <RevealUp delay={0.62} className="hero__facts">
                <ul>
                  {t.hero.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </RevealUp>
              <RevealUp delay={0.7} className="hero__scroll-cue">
                <span>{t.hero.scrollCue}</span>
                <span className="hero__scroll-line" />
              </RevealUp>
            </div>
            <div className="hero__reviews">
              <RevealUp delay={0.4} className="hero__logo">
                <img src="/hero-banner.jpg" alt="Bee Voyage — Agenție de Turism" />
              </RevealUp>
              <RevealUp delay={0.5}>
                <ReviewsCarousel reviews={t.reviews.items} label={t.reviews.label} />
              </RevealUp>
            </div>
          </div>
        </motion.section>

        {/* ---------------- 02 · OFFERS ---------------- */}
        <motion.section
          className="section section--ascent"
          id="offers"
          layout
          transition={SECTION_LAYOUT_TRANSITION}
        >
          <div className="section__inner">
            <RevealLeft className="eyebrow eyebrow--dark" delay={0}>
              <span className="eyebrow__dot" />
              {t.offers.eyebrow}
            </RevealLeft>
            <RevealLines
              as="h2"
              className="section__headline"
              lines={t.offers.headline}
            />
            <RevealUp delay={0.05} className="section__lede">
              <p>{t.offers.lede}</p>
            </RevealUp>
            <RevealUp delay={0.1}>
              <OffersCarousel offers={t.offers.items} priceLabel={t.offers.priceLabel} />
            </RevealUp>
          </div>
        </motion.section>

        {/* ---------------- 03 · STATS ---------------- */}
        <motion.section
          className="section section--cruise"
          id="stats"
          layout
          transition={SECTION_LAYOUT_TRANSITION}
        >
          <div className="section__inner">
            <RevealLeft className="eyebrow eyebrow--light" delay={0}>
              <span className="eyebrow__dot" />
              {t.stats.eyebrow}
            </RevealLeft>
            <RevealLines
              as="h2"
              className="section__headline section__headline--light"
              lines={t.stats.headline}
            />
            <RevealUp delay={0.04} className="section__lede section__lede--light">
              <p>{t.stats.lede}</p>
            </RevealUp>
            <div className="stats-row">
              {STATS.map((stat, i) => (
                <RevealUp key={stat.labelKey} delay={0.08 + i * 0.07} className="stat">
                  <span className="stat__value">{stat.value}</span>
                  <span className="stat__label">{t.stats.labels[stat.labelKey]}</span>
                </RevealUp>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ---------------- 04 · WHY US ---------------- */}
        <motion.section
          className="section section--descent"
          id="why"
          layout
          transition={SECTION_LAYOUT_TRANSITION}
        >
          <div className="section__inner">
            <RevealLeft className="eyebrow eyebrow--light" delay={0}>
              <span className="eyebrow__dot" />
              {t.why.eyebrow}
            </RevealLeft>
            <RevealLines
              as="h2"
              className="section__headline section__headline--light"
              lines={t.why.headline}
            />
            <RevealUp delay={0.04} className="section__lede section__lede--light">
              <p>{t.why.lede}</p>
            </RevealUp>
            <div className="experience-list">
              {t.why.items.map((item, i) => (
                <RevealUp key={item.title} delay={0.1 + i * 0.09} className="experience-item">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </RevealUp>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ---------------- 05 · CONTACT ---------------- */}
        <motion.section
          className="section section--arrival"
          id="contact"
          layout
          transition={SECTION_LAYOUT_TRANSITION}
        >
          <div className="section__inner arrival__inner">
            <RevealLeft className="eyebrow eyebrow--light" delay={0}>
              <span className="eyebrow__dot" />
              {t.contact.eyebrow}
            </RevealLeft>
            <RevealLines
              as="h2"
              className="section__headline section__headline--light"
              lines={t.contact.headline}
            />
            <RevealUp delay={0.2} className="section__lede section__lede--light">
              <p>{t.contact.lede}</p>
            </RevealUp>

            <div className="contact-grid">
              <RevealUp delay={0.3} className="contact-details">
                <dl>
                  <div>
                    <dt>{t.contact.addressLabel}</dt>
                    <dd>Vasile Alecsandri 89/1, Chișinău, Moldova</dd>
                  </div>
                  <div>
                    <dt>{t.contact.phoneLabel}</dt>
                    <dd>
                      <a href="tel:+37379500701">+373 795 00 701</a>
                    </dd>
                  </div>
                  <div>
                    <dt>{t.contact.emailLabel}</dt>
                    <dd>
                      <a href="mailto:dumitrubeevoyage@gmail.com">dumitrubeevoyage@gmail.com</a>
                    </dd>
                  </div>
                  <div>
                    <dt>{t.contact.instagramLabel}</dt>
                    <dd>
                      <a
                        href="https://t.me/beevoyage"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Telegram
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt>{t.contact.facebookLabel}</dt>
                    <dd>
                      <a
                        href="https://www.facebook.com/photo/?fbid=392919686161877&set=a.392919676161878"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bee Voyage
                      </a>
                    </dd>
                  </div>
                </dl>
              </RevealUp>

              <RevealUp delay={0.35} className="contact-hours">
                <span className="contact-hours__label">{t.contact.hoursLabel}</span>
                <BusinessHours
                  days={t.contact.days}
                  closedWord={t.contact.closedWord}
                  openNow={t.contact.openNow}
                  closedNow={t.contact.closedNow}
                />
              </RevealUp>
            </div>

            <footer className="footer">
              <span>© {new Date().getFullYear()} Bee Voyage</span>
              <span className="footer__sep" aria-hidden="true">
                ·
              </span>
              <span>{t.contact.footerOperator}</span>
            </footer>
          </div>
        </motion.section>
      </main>
    </>
  );
}
