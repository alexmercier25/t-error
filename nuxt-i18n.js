import en from "./locales/en.json";
import fr from "./locales/fr.json";

export default {
  legacy: false,
  locale: "fr",
  fallbackLocale: "en",
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
        currencyDisplay: "symbol",
      },
    },
    fr: {
      currency: {
        style: "currency",
        currency: "CAD",
        currencyDisplay: "symbol",
      },
    },
  },
  messages: {
    en,
    fr,
  },
};
