export type Language = "en" | "hi" | "bn" | "es" | "fr" | "ar" | "zh";

export interface FAQ {
  id: string;
  question: {
    en: string;
    hi: string;
    bn: string;
    es: string;
    fr: string;
    ar: string;
    zh: string;
  };
  answer: {
    en: string;
    hi: string;
    bn: string;
    es: string;
    fr: string;
    ar: string;
    zh: string;
  };
}

export interface FAQTranslation {
  question: string;
  answer: string;
}