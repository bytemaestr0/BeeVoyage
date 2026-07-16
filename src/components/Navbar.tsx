import { motion } from "framer-motion";
import { useNavbarVisibility } from "../hooks/useNavbarVisibility";
import { useLanguage } from "../i18n/LanguageContext";
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from "../i18n/translations";
import "./Navbar.css";

// Smoothly reflows the navbar's grid/flex layout whenever label widths
// change (e.g. switching language makes a link or button wider/narrower)
// instead of letting everything else snap sideways instantly.
const LAYOUT_TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

export default function Navbar() {
  const hidden = useNavbarVisibility();
  const { language, setLanguage, t } = useLanguage();

  const LINKS = [
    { href: "#offers", label: t.nav.offers },
    { href: "#stats", label: t.nav.stats },
    { href: "#why", label: t.nav.why },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <div className="navbar_wrap">
    <motion.header
      className="navbar"
      layout
      animate={{ y: hidden ? "-95%" : "0%" }}
      transition={{ type: "spring", stiffness: 260, damping: 32, mass: 0.7 }}
    >
      <motion.a className="navbar__mark" href="#top" layout="position" transition={LAYOUT_TRANSITION}>
        <img className="navbar__mark-logo" src="/logo.png" alt="Bee Voyage" />
        <span className="navbar__mark-label">Bee Voyage</span>
      </motion.a>
      <motion.nav className="navbar__links" layout transition={LAYOUT_TRANSITION}>
        {LINKS.map((link) => (
          <motion.a key={link.href} href={link.href} layout transition={LAYOUT_TRANSITION}>
            {link.label}
          </motion.a>
        ))}
      </motion.nav>
      <motion.div className="navbar__right" layout transition={LAYOUT_TRANSITION}>
        <motion.div
          className="lang-switch"
          role="group"
          aria-label="Select language"
          layout
          transition={LAYOUT_TRANSITION}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <motion.button
              key={lang}
              type="button"
              className={`lang-switch__option${
                lang === language ? " lang-switch__option--active" : ""
              }`}
              aria-pressed={lang === language}
              onClick={() => setLanguage(lang)}
              layout
              transition={LAYOUT_TRANSITION}
            >
              {LANGUAGE_LABELS[lang]}
            </motion.button>
          ))}
        </motion.div>
        <motion.a className="navbar__cta" href="#contact" layout transition={LAYOUT_TRANSITION}>
          {t.nav.cta}
        </motion.a>
      </motion.div>
    </motion.header>
    </div>
  );
}
