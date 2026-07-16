import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  LOCALE_TAGS,
  SUPPORTED_LANGUAGES,
  TRANSLATIONS,
  type Language,
  type Translation,
} from "./translations";

const STORAGE_KEY = "beevoyage-language";

function isSupportedLanguage(value: string | null): value is Language {
  return !!value && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "ro";

  // 1. Respect a previously saved choice (persists across sessions/tabs).
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isSupportedLanguage(stored)) return stored;
  } catch {
    // localStorage can throw in some privacy modes — fall through.
  }

  // 2. Otherwise fall back to the browser's language, if we support it.
  const browserLangs = window.navigator.languages ?? [window.navigator.language];
  for (const lang of browserLangs) {
    const short = lang?.slice(0, 2).toLowerCase();
    if (isSupportedLanguage(short)) return short;
  }

  return "ro";
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
  localeTag: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() =>
    detectInitialLanguage()
  );

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      // localStorage (not sessionStorage) so the choice survives closing
      // the tab/browser and is remembered on the next visit.
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore write failures (e.g. Safari private mode with full storage).
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = TRANSLATIONS[language].meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        TRANSLATIONS[language].meta.description
      );
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: TRANSLATIONS[language],
      localeTag: LOCALE_TAGS[language],
    }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
